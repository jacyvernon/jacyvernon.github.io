# Jacy Vernon Website

A simple static artist portfolio site for GitHub Pages. It uses plain HTML, CSS, and a small amount of vanilla JavaScript only.

## Preview Locally

From the repository root, run:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

Using a local server is recommended because the Work page loads artwork data from `assets/data/works.json`.

## Enable GitHub Pages

1. Push the site to the `main` branch.
2. In GitHub, go to Settings -> Pages.
3. Choose Deploy from branch.
4. Select `main` and `/root`.
5. Save.

The site uses relative links so it can work from the repository root on GitHub Pages. No custom domain is assumed yet.

## Replace The Home Page Image

1. Add the new display image to `assets/img/home/`.
2. Open `index.html`.
3. Replace `assets/img/home/featured-placeholder.svg` with the new image path.
4. Update the `width`, `height`, and `alt` attributes.
5. Replace the caption text below the image.

Write alt text as a short description of what is visible in the artwork, not just the title.

## Add Works To The Work Page

The Work page is rendered from `assets/data/works.json`.

1. Add web-ready images to `assets/img/work/`.
2. Open `assets/data/works.json`.
3. Add or edit an object with `title`, `year`, `medium`, `dimensions`, `image`, `alt`, `width`, and `height`.
4. Keep the JSON syntax valid: commas between entries, no trailing comma after the last entry.

Example:

```json
{
  "title": "Artwork Title",
  "year": "2026",
  "medium": "Oil on panel",
  "dimensions": "24 x 30 in",
  "image": "assets/img/work/artwork-title.webp",
  "alt": "Abstract painting with dark line work and muted green shapes",
  "width": 1200,
  "height": 900
}
```

## Replace Placeholder Captions

Home page captions are edited directly in `index.html`.

Work page captions come from `assets/data/works.json`:

- `title` and `year` create the first caption line.
- `medium` and `dimensions` create the second caption line.

## Add A Handwritten Name Mark

The current header uses text: `Jacy Vernon`.

For a future handwritten name mark:

1. Add the logo file to `assets/img/branding/`.
2. SVG is best if the mark should behave like a clean logo.
3. Use a transparent PNG or WebP if preserving scan texture is more important.
4. Replace the text link in each page header with an image link.
5. Keep the image alt text short, such as `Jacy Vernon`.

The current logo file is `assets/img/branding/jacy_logo.svg`.

## Change The Favicon

1. Add the new favicon file to `assets/favicon/`.
2. Update the `<link rel="icon">` path in each HTML page if the filename changes.
3. Use a square icon. For PNG, use at least 48 x 48 px.

The current default favicon is `assets/favicon/favicon.svg`.

## Image Optimization

- Keep original high-resolution artwork files outside the repo.
- Export web display images as WebP when possible.
- Keep each display image roughly under 300 KB to 1 MB when possible.
- Preserve the original aspect ratio.
- Use descriptive filenames, such as `untitled-2026-oil-panel.webp`.
- Add artwork metadata in `assets/data/works.json`.

## Site Structure

```text
/
  index.html
  work.html
  about.html
  contact.html
  assets/
    css/styles.css
    js/main.js
    data/works.json
    img/
    favicon/
```
