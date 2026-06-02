# [CITY] Wiki

A living city wiki for a CBR+PNK campaign. Built to grow with every session.

## Setup

1. Create a new GitHub repository (e.g. `city-wiki` or your city’s name)
1. Upload both files: `index.html` and `data.js`
1. Go to **Settings → Pages → Source: main branch / root**
1. Your wiki will be live at `https://yourusername.github.io/repo-name`

## After Each Session

1. Open the wiki and use the **+ Add** buttons to enter new NPCs, locations, corps, or districts
1. Go to the **Sessions** tab and log the run
1. Click **Export data.js** — this downloads an updated `data.js`
1. Upload the new `data.js` to your GitHub repo (replacing the old one)
1. Changes go live in ~30 seconds

## Naming Your City

When you have a city name, open `data.js` and change:

```js
const CITY_NAME = "[CITY]";
const CITY_TAGLINE = "Population: Unknown. Corporations: Countless. Hope: Scarce.";
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