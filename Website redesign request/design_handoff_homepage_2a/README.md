# Handoff: Homepage redesign — "Aurora Balanced" (option 2a)

## Overview
A redesign of the `jiajasonliu` personal-site homepage. It replaces the current
empty bordered hero with an **aurora hero** (drifting radial light, a shimmering
gradient wordmark, cursor parallax) that flows *continuously* into a **symmetric
card grid** with a centered purple "Intro" panel. Same "Dream Amethyst" identity:
purple palette, Lora serif + JetBrains Mono.

## About the design files
The files in `reference/` are **design references authored in HTML** (a prototype
of look + behavior), **not** production code to paste in. Your job is to
**recreate this design in the existing SvelteKit + Tailwind codebase**, using its
established patterns (Svelte 5 runes, the existing `Card.svelte`, the CSS custom
properties already in `src/app.css`).

- `reference/Homepage Redesign.dc.html` — the prototype. **Option 2a is the target.**
  Ignore the `<x-dc>` / `dc-import` / `renderVals()` wrappers — that's the prototype
  runtime, not part of your stack. Read it only for exact markup, styles, and the
  parallax logic. Other options (1a–1d, 2b, 2c) are alternatives — **do not build them.**
- `reference/AmethystCard.dc.html` — the card's hover behavior + the three tones
  (`light` / `tint` / `glass`). 2a uses the **light** tone only.
- `reference/2a-full.png` — screenshot of the hero.

## Fidelity
**High-fidelity.** Colors, type, spacing, and motion below are final — match them
pixel-for-pixel using Tailwind classes / arbitrary values or the existing CSS vars.

---

## Target files in the repo
- `src/routes/+page.svelte` — the homepage. This is where the hero + grid go.
- `src/lib/components/Card.svelte` — extend/replace with the hover + parallax card.
- `src/app.css` — design tokens live here as CSS custom properties; reuse them.
- `static/logo.png`, `static/jiajason.png` — existing assets, already in place.

---

## Design tokens
Reuse the existing purple vars in `src/app.css` where they match; these are the
exact values 2a uses:

**Color**
- Primary purple `#7A5FA8`
- Deep purple (headings / gradient end) `#4E3880`
- Soft accent `#8E7AAA`
- Ink (dark text) `#33294a`
- Body grey `#6b6577`
- Muted grey `#b0a7bd`
- Hero gradient stops: `#faf8fd 0%` → `#f1eaf9 34%` → `#f7f3fc 52%` → `#ffffff 68%`
- Aurora blobs: `rgba(158,120,214,.5)`, `rgba(196,164,232,.48)`, `rgba(158,120,214,.28)`
- Intro panel: `linear-gradient(165deg,#7A5FA8,#4E3880)`

**Type**
- Headings / serif: **Lora** (400–700, incl. italic)
- Labels / mono: **JetBrains Mono** (400/500)
- Intro heading: **Montserrat** 700
- Hero H1: 80px, italic for "Step into", `letter-spacing:-1px`, `line-height:1.02`
- Body lead: 19px / 1.6
- Kicker/eyebrow: 12px mono, `letter-spacing:.34em`, uppercase
- Card title: 22px Lora 600; card body: 15.5px / 1.6

**Radius / shadow / spacing**
- Card radius 18px; artboard/container radius 22px
- Card hover shadow `0 24px 46px -16px rgba(122,95,168,.42)`
- Container shadow `0 30px 70px -30px rgba(51,41,74,.45)`
- Grid gap 24px; section side padding 44px

---

## Screen: Homepage (`/`)

### Layout (top → bottom, all inside ONE continuous gradient container)
The key point of 2a: **hero and grid share a single background** — there is no
seam. The whole thing is one `position:relative; overflow:hidden` container with
the vertical gradient above, aurora blobs absolutely positioned inside it (one
deliberately placed ~480px down so it bleeds *behind* the top cards), and all
content stacked above at `z-index` ≥ 3.

1. **Nav** — transparent, sits directly over the aurora (no bar, no border, no
   blur). Left: `logo.png` (26px circle) + "ason Liu" in mono (the logo is the
   "J"). Right: Projects · Writing · About (mono 17px, `rgba(78,56,128,.55)`,
   hover → `#4E3880`).
2. **Hero** — centered, max-width 760px. Eyebrow ("Jia Jason Liu · Software
   Engineer · Bath, UK") → H1 "Step into / Dream Amethyst" (line 2 is the
   animated **sheen** gradient text) → lead paragraph → two pills: "View Projects"
   (filled `#7A5FA8`) and "Read Writing" (outline).
3. **Transition** — a thin vertical gradient line (`transparent → rgba(122,95,168,.5)`,
   46px tall) then the eyebrow label "WANDERING THE CORNERS". This is what visually
   bridges hero → grid.
4. **Card grid** — symmetric 3-column, gap 24px:
   - **Row block A** (`grid-template-columns:1fr 1fr 1fr`): Card, **Intro panel**
     (purple gradient, `grid-row: span 2`, centered), Card / then Card, Card under
     the outer columns so the Intro anchors the middle across two rows.
   - **Row block B** (second 3-col grid): three more cards.
   - Cards (real content): JSHandBook (Writing), Highway RL (Project), AI Agents ·
     Aura (Engineering), SparkLayer B2B (Experience), Currently Reading (Reading),
     The Foundation Is the Tool (Reflection), Soccer (Life). Copy is in the prototype.
   - **Intro panel** rows: Identity → "Jia Sheng Liu", Role → "Software Engineer",
     Location → "Bath, UK", then italic line "Built with SvelteKit, Tailwind, and
     stubbornness." White text on the purple gradient, thin white top-borders.
5. **Footer wordmark** — giant italic "Dream Amethyst" (116px, `opacity .3`,
   masked to fade out at the bottom via `mask-image: linear-gradient(to bottom, black, transparent)`).

---

## Components

### Card (`Card.svelte`)
On hover: lift `translateY(-6px)`, border → `rgba(122,95,168,.55)`, background →
`linear-gradient(160deg,#ffffff,#f7f4fb)`, shadow grows, a soft radial **glow**
fades in (top-right corner), the title/body colors deepen, and an "explore" cue
(a growing 10→26px line + mono label) fades up from the bottom. All transitions
~.45–.5s `cubic-bezier(.2,.8,.2,1)`. Props: `kicker`, `title`, `description`,
`tone` (2a only uses `light`). Exact styles in `reference/AmethystCard.dc.html`.

Suggested Svelte 5:
```svelte
<script>
  let { kicker = '', title, description } = $props();
  let hovered = $state(false);
</script>
<article
  onmouseenter={() => hovered = true}
  onmouseleave={() => hovered = false}
  class="card" class:is-hover={hovered}> … </article>
```

### Intro panel
Static purple-gradient card spanning two grid rows (the composition's symmetry
anchor). Not interactive.

---

## Interactions & behavior
- **Aurora drift** — the blobs animate with two keyframe loops (`auroraDrift` 15–24s,
  `auroraDrift2` 19s, `ease-in-out infinite`). Keyframes are in the prototype `<style>`.
- **Sheen** — the "Dream Amethyst" line is `background-clip:text` with a moving
  gradient (`sheen` 6s linear infinite, `background-size:200% auto`).
- **Cursor parallax** — on `mousemove` over the hero container, each element with a
  `data-depth` (the blobs) translates by `mouseOffset * depth * 26px`; reset on
  `mouseleave`. See `componentDidMount` in the prototype — port it to a Svelte
  `action` (`use:parallax`) or an `$effect` with a pointer listener.
- **Card hover** — as above.
- **Reduced motion** — the prototype disables animations under
  `@media (prefers-reduced-motion: reduce)`; keep that.
- **Entrance** — hero elements fade/rise in (`riseIn`, staggered `animation-delay`
  .05–.48s). Optional but nice.

## State
- `hovered` per card.
- Pointer position for parallax (local to the hero, no store needed).
- No data fetching — content is static (or from your existing `project/data.js`
  and `writing/data.ts` if you'd rather source the cards from there).

## Responsive
Prototype is fixed at 1180px. For real breakpoints: collapse the grid to 2 cols
then 1 col under ~900/620px; the Intro panel drops its `grid-row: span 2` and
becomes a normal full-width tile; hero H1 scales down (~48–56px on mobile).

## Assets
- `static/logo.png` — the origami "J" (nav mark). Already in repo.
- `static/jiajason.png` — portrait (not used in 2a; used in 2b only).

## Files in this bundle
- `README.md` (this file)
- `reference/Homepage Redesign.dc.html` — prototype (build **option 2a** only)
- `reference/AmethystCard.dc.html` — card behavior + tones
- `reference/2a-full.png` — hero screenshot
