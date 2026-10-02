# Pho Vietnam 3969 — Restaurant Website

This is a website I built for Pho Vietnam 3969, a Vietnamese and Chinese restaurant in Niagara Falls, Ontario. It is the second version of the site.

The goal was simple: let customers quickly see the menu, find the restaurant, and place an order, on any device.

## What it does

- **Home page:** introduces the restaurant, shows how to order (phone or SkipTheDishes), and lists the address, hours, and a Google Maps embed.
- **Menu page:** shows the full menu of over 200 dishes across 11 categories, with prices and sizes.
- **Search:** filters dishes as you type. It works with or without Vietnamese accents, so "pho" finds "Phở". You can also search by item number.
- **Category navigation:** buttons jump to each section, and the current section is highlighted as you scroll.
- **Mobile friendly:** the layout and navigation adjust for phones and tablets.

## How the menu is managed

The menu is not hard-coded. It loads from a Google Sheet published as a CSV, so the restaurant can change prices or dishes in a spreadsheet without touching any code.

If the Sheet can't be reached, the page falls back to a local copy (`menu-data.csv`), so the menu always shows.

## Built with

- HTML, CSS, and plain JavaScript, with no frameworks and no build step
- Google Sheets (published CSV) as a simple, free content source
- Google Fonts and a Google Maps embed

I kept the stack small on purpose. A restaurant site needs to be fast, cheap to host, and easy to maintain, and plain HTML, CSS, and JavaScript cover all of that.

## Decisions I made

- **Spreadsheet as the menu's data source:** the owner already knows how to use a spreadsheet, so there's no admin panel or database to learn or pay for.
- **A fallback copy of the menu:** the site never depends on a single outside service to show its most important page.
- **Accent-insensitive search:** most customers type without Vietnamese accents, so search strips them before comparing.
- **Performance:** I compressed and resized images and loaded only the font weights the pages use.

## Running it locally

The menu loads data with `fetch`, so serve the folder instead of opening the file directly:

```
python -m http.server
```

Then open `http://localhost:8000`.

## Project structure

```
index.html       Home page
menu.html        Menu page (loads and renders the menu)
menu-data.csv    Local fallback copy of the menu
css/styles.css   All styles
js/main.js       Mobile navigation
assets/images/   Photos, logo, favicon
```
