# LoginFlip website

Public product website for [LoginFlip](https://qingtan-labs.github.io/loginflip/), a local multi-account session switcher for Chrome.

This repository intentionally contains only public website material:

- static HTML, CSS, and the small language-preference script required by GitHub Pages;
- public product copy, privacy policy, and support information;
- approved Chrome Web Store icon, screenshots, and promotional images.

It does **not** contain the LoginFlip extension source, session-handling implementation, QA fixtures, build scripts, private releases, or extension packages. The extension source is a private personal asset maintained separately.

The website uses no analytics, tracking, advertising, remote fonts, cookies, forms, or developer-operated backend. The only browser storage used is localStorage for the English/Simplified Chinese display preference.

## Pages

- `/` — product homepage
- `/privacy/` — English and Simplified Chinese privacy policy
- `/support/` — compatibility, troubleshooting, security, and contact

## Publishing

GitHub Actions deploys the static files to GitHub Pages after a push to `main`. The Chrome Web Store call to action remains “In review” until the public store listing is available.

Copyright © 2026 qingtan. All rights reserved.
