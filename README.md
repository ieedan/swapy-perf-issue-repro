# Swapy Issue (Fixed!)

Issue repro for [swapy](https://swapy.tahazsh.com/).

# Whats the issue?

When using large amounts of content inside of a `swapy-item` performance degrades significantly when resizing screen. `animation: 'none'` doesn't make any difference when resizing.

## Steps

- `pnpm install`
- `pnpm dev`
- Open to `localhost:5173` and try resizing the screen either with dev tools or other means.
- You'll notice it is extremely slow and animates between states
- Try turning off animations with `animation: 'none'` and notice the issue persists.

## The Fix

If you want to see the resolution for the issue please look at the [fixed-branch](https://github.com/ieedan/swapy-perf-issue-repro/tree/fixed-branch).
