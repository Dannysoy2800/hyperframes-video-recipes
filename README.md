# HyperFrames Video Recipes

> Production-ready, editable HTML video templates for launches, explainers, data stories, and kinetic social content.

[![HyperFrames checks](https://github.com/Dannysoy2800/hyperframes-video-recipes/actions/workflows/check.yml/badge.svg)](https://github.com/Dannysoy2800/hyperframes-video-recipes/actions/workflows/check.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Stop starting every motion graphic from a blank canvas. **HyperFrames Video Recipes** is a small, opinionated collection of seek-safe HTML/CSS/GSAP compositions that render locally to MP4 and remain easy to edit.

## Why this exists

Most video templates are either flattened exports or heavy application files. These recipes sit in the useful middle: readable source, deterministic timelines, large video-first typography, and a straightforward path from copy change to render.

## Included recipes

| Recipe | Best for | What you get |
|---|---|---|
| [`launch-teaser`](recipes/launch-teaser) | Product launches, SaaS announcements, feature reveals | Oversized type, graphic stamp, layered decoratives, premium end hold |
| [`data-explainer`](recipes/data-explainer) | Data stories, internal comms, social explainers | Live chart bars, annotation callout, editorial hierarchy |
| [`kinetic-lyric`](recipes/kinetic-lyric) | Music-led promos, quote videos, social posts | Type-led chorus, pulse motion, concentric rings, caption support |

## Quick start

Requirements: Node.js 22+, npm, and a local Chromium/FFmpeg environment supported by HyperFrames.

```bash
git clone https://github.com/Dannysoy2800/hyperframes-video-recipes.git
cd hyperframes-video-recipes
npm ci
npm run check
```

Render a recipe after reviewing its preview:

```bash
npx hyperframes preview recipes/launch-teaser
npx hyperframes render recipes/launch-teaser --quality high --output launch-teaser.mp4
```

## Make it yours

1. Open a recipe's `index.html`.
2. Change the copy and palette.
3. Adjust the root `data-duration` if the edit changes length.
4. Tune the single paused GSAP timeline.
5. Run `npm run check` before sharing or opening a pull request.

Create a new starter recipe from the included generator:

```bash
npm run new:recipe -- my-new-recipe
```

## Authoring contract

Every recipe is a standalone HyperFrames composition with a sized root, direct timed clips, root-relative assets, and exactly one deterministic paused timeline registered on `window.__timelines`. Live charts and typography stay editable; generated footage, speech, music, and images can be layered in later without flattening the design system.

## Project status

This is an intentionally compact foundation. Planned additions include portrait social variants, lower thirds, accessible caption skins, reusable chart primitives, and a small recipe gallery.

If this saves you from rebuilding a launch teaser or explainer from scratch, consider starring the repository and sharing a before/after. Contributions and new recipes are welcome.

## License

MIT. See [`LICENSE`](LICENSE).
