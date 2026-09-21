"""Static checks for the Chicago-Sprawl GitHub Pages site."""

from pathlib import Path
import re
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1]


def inline_scripts(path: Path):
    text = path.read_text(encoding="utf-8")
    return re.findall(r"<script>([\s\S]*?)</script>", text)


def check_js(path: Path) -> None:
    scripts = inline_scripts(path)
    if not scripts:
        raise AssertionError(f"No inline JavaScript found in {path}")
    with tempfile.NamedTemporaryFile("w", suffix=".js", encoding="utf-8", delete=False) as handle:
        handle.write(scripts[-1])
        temp_path = handle.name
    result = subprocess.run(["node", "--check", temp_path], capture_output=True, text=True)
    if result.returncode:
        raise AssertionError(f"JavaScript syntax error in {path}:\n{result.stderr}")


def main() -> None:
    required = [
        ROOT / "index.html",
        ROOT / "data.js",
        ROOT / "press" / "index.html",
    ]
    missing = [str(path.relative_to(ROOT)) for path in required if not path.is_file()]
    if missing:
        raise AssertionError(f"Missing required files: {', '.join(missing)}")

    check_js(ROOT / "index.html")
    check_js(ROOT / "press" / "index.html")

    data = (ROOT / "data.js").read_text(encoding="utf-8")
    if "[CITY]" in data:
        raise AssertionError("data.js still contains the [CITY] placeholder")
    if 'const CITY_NAME = "CHICAGO-SPRAWL";' not in data:
        raise AssertionError("Expected Chicago-Sprawl city name")

    print("Chicago-Sprawl validation passed.")


if __name__ == "__main__":
    main()
