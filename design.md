# Design: Razin Tooling Services

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Genre: editorial
- Shape of the first page: Bento Grid (from draw e28557)
- Theme: Formwork (cast pour, deal 1/3, seed industrial-press-tool-installation-6770·25050412·2026-11-16·r0)
- Axes: mid/display-condensed/warm · posture: restrained

## Tokens
`tokens.css` is the source of truth. The roles:
```css
:root {
  --color-paper: oklch(74% 0.008 80);  --color-paper-2: oklch(69% 0.009 80);  --color-paper-3: oklch(64% 0.01 80);
  --color-plate: oklch(82% 0.007 80);  --color-plate-ink: oklch(95% 0.006 80);
  --color-ink: oklch(18% 0.005 270);  --color-ink-2: oklch(28% 0.006 80);  --color-muted: oklch(31.5% 0.008 80);  --color-rule: oklch(64% 0.01 80);
  --color-accent: oklch(66% 0.21 38);  --color-accent-ink: oklch(18% 0.005 270);  --color-focus: oklch(42% 0.15 38);
  --font-display: "Oswald", ui-sans-serif, sans-serif;  --font-body: "Archivo", ui-sans-serif, sans-serif;  --font-outlier: "Archivo Narrow", ui-sans-serif, sans-serif;
  --radius-card: 0;  --radius-pill: 0;  --rule-hair: 1px;  --rule-bar: 3px;  --shadow-card: 6px 6px 0 var(--color-ink);
}
```
The spacing scale, the type scale, the easings and the durations are the scaffold's and live in `tokens.css`.

## Controls
- Primary: `--color-accent` fill with `0 3px 0 var(--color-accent-deep)` hard shadow · radius 0 · 48px height
- Secondary: `--color-paper-2` with `2px solid var(--color-ink)` and inset shadow · radius 0 · 48px height

## Motion
- Character: still; controls press down 3px over `--dur-micro` on `--ease-out`; under reduced motion everything ends at once.

## Exports
`tokens.css` in this project. Tailwind, DTCG or shadcn blocks are added here on request, per `export-formats.md`.
