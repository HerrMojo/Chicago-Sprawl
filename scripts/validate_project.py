"""Static checks for the Chicago-Sprawl GitHub Pages site."""

from pathlib import Path
import re
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1]


def inline_scripts(path: Path):
    text = path.read_text(encoding="utf-8")
    return re.findall(r"<script>([\s\S]*?)</script>", text)


def check_js_source(source: str, label: str) -> None:
    with tempfile.NamedTemporaryFile("w", suffix=".js", encoding="utf-8", delete=False) as handle:
        handle.write(source)
        temp_path = Path(handle.name)
    try:
        result = subprocess.run(["node", "--check", str(temp_path)], capture_output=True, text=True)
        if result.returncode:
            raise AssertionError(f"JavaScript syntax error in {label}:\n{result.stderr}")
    finally:
        temp_path.unlink(missing_ok=True)


def check_html_js(path: Path) -> None:
    scripts = inline_scripts(path)
    if not scripts:
        raise AssertionError(f"No inline JavaScript found in {path}")
    for index, script in enumerate(scripts, 1):
        check_js_source(script, f"{path} script {index}")


def check_external_js(path: Path) -> None:
    if not path.is_file():
        raise AssertionError(f"Missing JavaScript file: {path.relative_to(ROOT)}")
    check_js_source(path.read_text(encoding="utf-8"), path)


def main() -> None:
    required = [
        ROOT / "index.html",
        ROOT / "data.js",
        ROOT / "press" / "index.html",
        ROOT / "run" / "index.html",
        ROOT / "run" / "app.js",
        ROOT / "run" / "styles.css",
    ]
    missing = [str(path.relative_to(ROOT)) for path in required if not path.is_file()]
    if missing:
        raise AssertionError(f"Missing required files: {', '.join(missing)}")

    check_html_js(ROOT / "index.html")
    check_html_js(ROOT / "press" / "index.html")
    check_external_js(ROOT / "run" / "app.js")
    check_js_source((ROOT / "data.js").read_text(encoding="utf-8"), ROOT / "data.js")

    data = (ROOT / "data.js").read_text(encoding="utf-8")
    if "[CITY]" in data:
        raise AssertionError("data.js still contains the [CITY] placeholder")
    if 'const CITY_NAME = "CHICAGO-SPRAWL";' not in data:
        raise AssertionError("Expected Chicago-Sprawl city name")

    print("Chicago-Sprawl validation passed.")


if __name__ == "__main__":
    main()
