# CHICAGO-SPRAWL CBR+PNK Run Console

The run console is the operational planning and game-notes tool for the Chicago-Sprawl campaign. It is published at `/run/` alongside the city wiki and press generator.

## Features

- Run overview and status
- Repeatable locations and potential assets
- Obstacles with Assault, Deception, Stealth, Social, and Transport plans
- Logoff notes
- Interactive segmented event/complication clocks
- Automatic browser storage
- Validated JSON import/export
- Plain-text session report export
- Responsive layout for desktop, tablet, and phone

## Data model

The browser stores one run in local storage under a versioned key. JSON exports contain:

- `run`
- `locations`
- `potentialAssets`
- `obstacles`
- `eventClocks`
- `logoff`

Imported records are normalized before rendering. Invalid or unexpected field types are discarded rather than inserted into the live DOM.

## Local development

From the repository root:

```bash
python -m http.server 8765 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8765/run/`.

The console is static and requires no account or server-side API key.
