# CHICAGO-SPRAWL Wiki

A living Chicago-based city wiki for a CBR+PNK campaign. Built to grow with every session.

## Setup

1. Push the repository to GitHub.
1. Open **Settings → Pages** and set the source to **GitHub Actions**.
1. Push to `main`, or run **Deploy Chicago-Sprawl to GitHub Pages** manually from the Actions tab.
1. Your wiki will be live at `https://yourusername.github.io/repo-name`.

The deployment workflow validates both HTML pages' JavaScript before publishing.
The press generator is available at `/press/`.

## After Each Session

1. Open the wiki and use the **+ Add** buttons to enter new NPCs, locations, corps, or districts
1. Go to the **Sessions** tab and log the run
1. Click **Export data.js** — this downloads an updated `data.js`
1. Upload the new `data.js` to your GitHub repo (replacing the old one)
1. Changes go live in ~30 seconds

## Customizing the Chicago Sprawl

The default setting is a fictional cyberpunk Chicago. To change the city name
or tagline, open `data.js` and edit:

```js
const CITY_NAME = "CHICAGO-SPRAWL";
const CITY_TAGLINE = "Lakefront megacity. Corporate towers. Hope beneath the L-tracks.";
```

## File Structure

```
/
├── index.html   ← The entire wiki app (don't edit this)
└── data.js      ← All your city data (edit this or use Export)
```

## Newspaper Links

When you publish a session newspaper page, paste its URL into the Session entry’s
**Newspaper URL** field. It will appear as a “📰 Read Issue” link in the Sessions tab.