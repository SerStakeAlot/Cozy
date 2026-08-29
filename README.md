# Cozy — two brands, one front door

Static HTML/CSS/JS. No build step. Works on GitHub Pages, Netlify, Vercel, or any host.

```
/
├── index.html                 ← hub: pick Cozy as Usual or Cozy Moments Group
├── assets/
│   ├── hub.css
│   └── img/
│       ├── cau-logo.jpg           (cozy_6)
│       ├── cau-lookbook-01.jpg    (cozy_7 — fashion example)
│       ├── cau-brand-board.jpg    (cozy_3 — fashion page filler)
│       ├── cmg-logo-dark.jpg      (cozy_1)
│       └── cmg-logo-cream.jpg     (cozy_2)
├── cozyasusual/               ← cozyasusual.com
│   ├── index.html · shop.html · collections.html · contact.html
│   ├── style.css · site.js
└── cozymomentsgroup/          ← cozymomentsgroup.com
    ├── index.html · style.css
```

## Run locally
Open `index.html` in a browser, or `python3 -m http.server` in this folder and visit http://localhost:8000.

## Deploy as two domains
Both sites live in this one repo. To point separate domains at them:
- **Netlify / Vercel:** deploy the repo, then add `cozyasusual.com` → `/cozyasusual/` and `cozymomentsgroup.com` → `/cozymomentsgroup/` as redirect rules (or split into two deploys with the subfolder as the publish directory).
- **GitHub Pages:** one custom domain per repo, so the simplest path is one repo per brand (copy the subfolder + `assets/`) and keep this hub repo on a third domain or subdomain.

## Things to swap when you're ready
- `cozyasusual/shop.html` — placeholder products (colored tiles). Replace with photos and link to Shopify Buy Buttons / Stripe.
- `cozyasusual/contact.html` and the newsletter form — currently open the mail client. Wire to Formspree, Netlify Forms, Klaviyo, etc.
- `hello@cozyasusual.com` — placeholder address; PR@cozymomentsgroup.com is live.
- Social links point at the platform home pages until you drop in your handles.
- `cozymomentsgroup/index.html` — "The roster" cards are "Coming soon" placeholders.
