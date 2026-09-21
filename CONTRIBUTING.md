# Contributing

Thanks for helping make editable video authoring easier.

## Add a recipe

Run `npm run new:recipe -- your-recipe-name`, then edit the generated `recipes/your-recipe-name/index.html`. Keep the recipe self-contained, use root-relative assets, and preserve the HyperFrames contract described in the README.

A good recipe should solve a recognizable job, have a strong first frame and final hold, use large video-scale typography, and remain understandable to someone who did not author it.

## Before opening a pull request

```bash
npm ci
npm run check
```

Do not commit `node_modules`, secrets, personal API keys, or large rendered videos. Add proof snapshots when they help reviewers understand the motion.

## Pull requests

Please include the problem the recipe solves, a short description of the visual language, and the exact local check command you ran. Small focused pull requests are easier to review and merge.
