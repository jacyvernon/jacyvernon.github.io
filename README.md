# Jacy Vernon Website

A static artist portfolio for GitHub Pages. The site uses HTML, one shared stylesheet, and a gallery script. There is no server backend, database, package installation, or build step.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. Use the server instead of opening HTML files directly: the Work page fetches `content/works.json`.

## File map

```text
index.html                         Home page and featured artwork
work.html                          Gallery page and larger image view
about.html                         Artist biography
contact.html                       Contact details
content/
  works.json                       Gallery titles, captions, and image paths
assets/
  css/styles.css                   Shared layout, typography, and background
  js/gallery.js                    Gallery loading and larger image view
  images/
    backgrounds/website-cover.svg  Site-wide background
    branding/jacy_logo.svg          Header logo
    home/                          Featured artwork images
    work/                          Gallery images
  favicon/favicon.svg              Browser icon
custom_assets/                      Original supplied design files
.nojekyll                           Serve the site directly on GitHub Pages
.gitignore                          Exclude local development clutter
```

Page URLs stay at the root. All pages share `assets/css/styles.css`. Only the Work page loads `assets/js/gallery.js`.

## Change the background

The display copy of `custom_assets/website cover.svg` is `assets/images/backgrounds/website-cover.svg`. All four pages use it through the `--site-background` variable in `assets/css/styles.css`.

The cover fills a fixed background layer. It keeps its aspect ratio and crops to fit each screen. It remains visible while a page scrolls. The header has a solid white background to keep the navigation readable.

To replace it, update the display file or change `--site-background`. CSS image paths are relative to the stylesheet, so the current path starts with `../images/`.

## Edit page content

- Home: edit the image, alt text, dimensions, and caption in `index.html`.
- About: edit the paragraphs in `about.html`.
- Contact: edit the email link in `contact.html`.
- Navigation or logo: update the header in all four HTML files.
- Layout, colors, and typography: edit `assets/css/styles.css`.

The current artwork and biography are placeholders. Replace them before sharing the portfolio as finished work.

## Add artwork

1. Put a web-ready image in `assets/images/work/`.
2. Add an entry to `content/works.json`.
3. Preview the Work page and open the image to check its caption and size.

```json
{
  "title": "Artwork Title",
  "year": "2026",
  "medium": "Oil on panel",
  "dimensions": "24 x 30 in",
  "image": "assets/images/work/artwork-title.webp",
  "alt": "Abstract painting with dark lines and muted green shapes",
  "width": 1200,
  "height": 900
}
```

Entries appear in file order. Keep valid JSON: put commas between entries and omit trailing commas. Image paths are relative to the page at the site root. Use the actual image dimensions and describe what is visible in the alt text.

For the Home page, place the image in `assets/images/home/` and update both the featured image and the `og:image` metadata in `index.html`.

## Keep assets tidy

Use lowercase filenames with hyphens for display assets. Keep images in the folder that matches their purpose. Export artwork as WebP when practical, preserve its aspect ratio, and aim for roughly 300 KB to 1 MB per display image.

Keep supplied design originals in `custom_assets/`; the site does not reference that folder. Put the display version in `assets/images/`. Keep large artwork originals outside this repository.

The favicon is `assets/favicon/favicon.svg`. If its filename changes, update the icon link in all four HTML files.

## Publish with GitHub Pages

The repository is `jacyvernon/jacyvernon.github.io`. GitHub Pages serves it at `https://jacyvernon.com/`. The `CNAME` file holds the custom domain; keep it when editing or reorganizing the site.

1. Push the finished changes to `main`.
2. In GitHub, open **Settings → Pages**.
3. Select **Deploy from a branch**, then `main` and `/ (root)`.

No build command is needed. Relative links work from the site root and from a GitHub Pages project subdirectory.
