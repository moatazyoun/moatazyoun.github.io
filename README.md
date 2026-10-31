# younes — Moataz Younes · Personal Portfolio

Bilingual (Arabic RTL / English LTR) static portfolio in the **younes** brand identity
(black `#0A0A0A`, gold `#E3BE4A`, gold-on-light `#8A6D00`, Quicksand wordmark).
No build step, no backend. Works on GitHub Pages and when opened straight from the file system.

## Files
- `index.html` — page skeleton (rarely needs editing)
- `style.css` — design tokens, dark/light themes, RTL-aware layout, the younes wordmark
- `data.js` — **all your content** (Arabic + English): CV data, projects, software, contact
- `script.js` — logic (language/theme toggle, filters, modal, contact form)
- `assets/fonts` — self-hosted Quicksand (brand) and Cairo (Arabic)
- `assets/cv/Moataz-Younes-CV.pdf` — the CV behind the Download button
- `assets/img` — favicon, social cover (`og-cover.png`), and `projects/` for screenshots

## Deploy on GitHub Pages
1. Create a repository named `YOUR-USERNAME.github.io` (root URL) or any name (`/repo-name`).
2. Upload everything in this folder, keeping the structure.
3. Settings → Pages → Source: "Deploy from a branch" → `main` / `(root)` → Save.

## Still to fill in (search `EDIT` in data.js)
- `github` link (the GitHub icon/card stays hidden until you set a real link)
- **youpharma** and **youwidget**: real description, feature list, tech stack, screenshots
- youmusic (YouTube Music for LG TV): feature list, install method, screenshots
- Screenshots for every product: put images in `assets/img/projects/` and set
  `image: "assets/img/projects/youcad.png"` (several images → `gallery: ["...", "..."]`)
- Arabic CV: add a PDF and set `cv.ar` in `data.js` (the Arabic CV button appears automatically)
- Photos for the civil projects (`image:` inside the `civil` list)

## Product naming (data.js → `software`)
Every product is "you" + a short name, with its own accent colour (`color: { d: dark-bg, l: light-bg }`):
youpharma (mint), youerp (gold), youcad (violet), youweb (blue), yougis (lime), youplan (orange),
youwidget (magenta), youmusic (rose), youtv (cyan).
`group: "line"` cards are the big cards; `group: "tool"` cards are the smaller ones.
`wm: ["you","cad"]` draws the name in the wordmark style. Add a website to **youweb** by adding an entry to its `sites` list.

## Card text & map (data.js)
- Software cards show `tag` (domain label) and `short` (a one-to-two-line blurb) — keep all `short` texts about the same length so the cards stay uniform. `desc` / `details` appear only in the Details popup.
- Each civil project has `loc: { lat, lng, z, approx, place }`. The map is a Google Maps embed that jumps to the selected project;
  set `approx: false` once you put the exact coordinates (right-click the spot in Google Maps and copy the numbers).

## Contact form
Uses `mailto:` (opens the visitor's email app). For a form that sends mail directly,
create a free form at formspree.io and I can wire it in.
