# Jacy Vernon Website

A static artist portfolio for GitHub Pages. No installation or build step is needed.

## Preview locally

Run this command from the repository folder:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000/work.html. Use the server because the gallery loads a JSON file.

## File map

```text
index.html                       Home page
work.html                        Gallery page
about.html                       Artist biography
contact.html                     Contact details
work/
  *.jpg                          Full-resolution gallery photos
  gallery.json                   Photo order, paths, alt text, and pixel dimensions
  originals/*.heic                Preserved HEIC source files
assets/
  css/styles.css                 Shared layout and styling
  js/gallery.js                  Gallery loading and enlarged image view
  images/backgrounds/            Site background
  images/branding/               Header logo and footer apple
  images/home/                   Home page image
  favicon/favicon.svg            Apple icon for the former favicon URL
favicon.ico                      Apple browser icon (16, 32, and 48 pixels)
custom_assets/                   Original supplied design files
CNAME                            Custom domain for GitHub Pages
```

## Change the gallery

1. Put a JPEG, PNG, or WebP photo in `work/`. Use a short name with hyphens.
2. Add its entry to `work/gallery.json`.
3. Preview the gallery and click the photo to check the enlarged view.

```json
{
  "image": "work/bird-pitcher.jpg",
  "alt": "Blue and cream ceramic bird-shaped pitcher with a curved handle",
  "width": 4284,
  "height": 4828
}
```

Entries appear in file order, from left to right across each row. Reorder entries to change the layout; remove an entry to hide a photo. Keep commas between entries and omit the final trailing comma.

Use the actual pixel dimensions. Alt text describes the image for screen readers; it is not a visible caption.

The gallery always has three columns, including on small screens. Photos keep their original proportions and are not cropped. The original resolution is retained; the browser scales each photo to fit its column. Clicking a photo opens a larger view that fits the screen. Click outside the photo, click Close, or press Escape to return to the gallery.

Three supplied files had JPEG extensions but contained HEIC images. Their untouched source files are in `work/originals/`; the gallery uses JPEG conversions with the same pixel dimensions. The other five supplied photos were renamed without changing their contents. The self-portrait bust is displayed on the Home page in `assets/images/home/`.

New photos do not appear automatically: add them to `gallery.json`. Files in `work/originals/` are not listed in the gallery.

## Edit other pages

- Edit page text directly in its HTML file.
- Change the Home image and its `og:image` metadata in `index.html`.
- Update the header in all four HTML files to change navigation or the logo.
- Each page has a centered footer apple from `assets/images/branding/apple-sketch.svg`. Its width is about one third of a gallery photo, with a 48px minimum on small screens.
- All pages use `/favicon.ico?v=apple-2` for the browser icon. The small ICO is derived from the same apple drawing. Keep the root `favicon.ico` and former `assets/favicon/favicon.svg` URL showing the apple too, so browser fallback requests and older cached pages receive the same icon.
- Change layout and styling in `assets/css/styles.css`.

The Home page features the self-portrait bust, with no visible caption.

The site background is `assets/images/backgrounds/website-cover.svg`, copied from `custom_assets/website cover.svg`. The stylesheet selects it through `--site-background`. Keep original design files in `custom_assets/` and display assets in `assets/images/`.

## Publish with GitHub Pages

The repository is `jacyvernon/jacyvernon.github.io`, served at https://jacyvernon.com/.

Push the finished changes to `main`. In GitHub **Settings → Pages**, use **Deploy from a branch**, `main`, and `/ (root)`. Keep `CNAME` and `.nojekyll` in the repository root.
