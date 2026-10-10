# 03 — DESIGN SYSTEM SPEC

> **Purpose:** Exact CSS variables, color tokens, typography scale, grid rules, and component architecture.
> **Status:** DEFINED — awaiting Shubham's Phase 3 approval before execution.
> **Last Updated:** 2026-10-08T16:10 IST

---

## 1. Visual Identity: "Precision Blueprint × Dark Studio Hybrid"

The portfolio operates in two contextual modes:

| Context | Mode | Canvas | Use |
|---|---|---|---|
| Shell (nav, index, about, contact) | **Blueprint** | Warm stone light (`--canvas`) | Navigation, project index, bio, contact |
| Case study deep-dives | **Studio** | Deep carbon dark (`--canvas-studio`) | Immersive reading, interactive prototypes, annotated wireframes |

The mode switch is **contextual** (entering a case study triggers Studio), not a user-facing light/dark toggle. This mirrors how a physical portfolio book works — the outer binding is clean paper, the project plates are mounted on dark matte board.

---

## 2. Color Tokens

### Blueprint Mode (Light Shell)

```css
:root {
  /* Canvas & Surface */
  --canvas:              #FAFAF7;   /* Warm stone — NOT pure white */
  --surface-elevated:    #FFFFFF;   /* Cards, panels on stone */
  --surface-recessed:    #F2F1ED;   /* Subtle depth behind content */
  --surface-code:        #F5F4F0;   /* Code blocks, token panels */
  
  /* Ink & Text */
  --ink-primary:         #1A1A18;   /* Headlines, primary body */
  --ink-secondary:       #5C5C56;   /* Secondary text, descriptions */
  --ink-tertiary:        #8A8A82;   /* Captions, timestamps, metadata */
  --ink-ghost:           #B8B8B0;   /* Placeholders, disabled states */
  
  /* Structural */
  --hairline:            #E2E1DC;   /* 1px borders, grid lines */
  --hairline-strong:     #C8C7C2;   /* Active borders, dividers */
  --grid-line:           #ECEBE6;   /* Exposed structural grid */
  
  /* Accent — Single, muted, warm */
  --accent:              #2D2D2B;   /* Primary CTA fill (near-black) */
  --accent-text:         #FAFAF7;   /* Text on accent */
  --accent-subtle:       #B87333;   /* Copper — used sparingly: active nav, inline annotations, status indicators */
  --accent-subtle-muted: rgba(184, 115, 51, 0.12); /* Copper tint for backgrounds */
  
  /* Semantic */
  --status-nominal:      #3D8C5C;   /* Green — normal/healthy */
  --status-warning:      #C4841D;   /* Amber — attention needed */
  --status-critical:     #C43D3D;   /* Red — critical/high-risk */
  --status-info:         #4A7FB5;   /* Blue — informational */
  --status-nominal-bg:   rgba(61, 140, 92, 0.08);
  --status-warning-bg:   rgba(196, 132, 29, 0.08);
  --status-critical-bg:  rgba(196, 61, 61, 0.08);
  --status-info-bg:      rgba(74, 127, 181, 0.08);
}
```

### Studio Mode (Dark Case Studies)

```css
[data-mode="studio"] {
  /* Canvas & Surface */
  --canvas:              #0E0E0D;   /* Deep carbon — NOT pure black */
  --surface-elevated:    #1A1A18;   /* Cards, panels */
  --surface-recessed:    #141413;   /* Depth layers */
  --surface-code:        #1E1E1C;   /* Code blocks */
  
  /* Ink & Text */
  --ink-primary:         #E8E4DF;   /* Warm off-white — NOT pure white */
  --ink-secondary:       #9C9890;   /* Secondary text */
  --ink-tertiary:        #6B675F;   /* Captions, metadata */
  --ink-ghost:           #4A4740;   /* Disabled */
  
  /* Structural */
  --hairline:            #2A2A27;   /* 1px borders */
  --hairline-strong:     #3A3A36;   /* Active borders */
  --grid-line:           #1E1E1C;   /* Exposed grid */
  
  /* Accent — same copper, adjusted for dark */
  --accent:              #E8E4DF;   /* Primary CTA on dark (warm white) */
  --accent-text:         #0E0E0D;   /* Text on accent */
  --accent-subtle:       #C4873D;   /* Copper — slightly brighter on dark */
  --accent-subtle-muted: rgba(196, 135, 61, 0.15);
  
  /* Semantic — same hues, increased luminance for dark */
  --status-nominal:      #4CAF6A;
  --status-warning:      #D4943D;
  --status-critical:     #D45050;
  --status-info:         #5A8FC5;
  --status-nominal-bg:   rgba(76, 175, 106, 0.12);
  --status-warning-bg:   rgba(212, 148, 61, 0.12);
  --status-critical-bg:  rgba(212, 80, 80, 0.12);
  --status-info-bg:      rgba(90, 143, 197, 0.12);
}
```

---

## 3. Typography

### Font Stack

| Role | Family | Fallback | Weight Range | Use |
|---|---|---|---|---|
| Display & Body | **Inter** | system-ui, -apple-system, sans-serif | 400, 500, 600 | Headlines, body text, buttons, navigation |
| Metrics & Code | **JetBrains Mono** | ui-monospace, "Cascadia Mono", monospace | 400, 500 | Token annotations, data values, coordinates, code, Dev Mode overlay |

> **Decision:** Inter over Plus Jakarta Sans. Inter has better numerics for data-heavy UI and is already used in Shubham's reference benchmarks (Cal.com, Vercel). Plus Jakarta Sans's geometric softness conflicts with the "precision blueprint" DNA.

### Type Scale (8pt-aligned)

```css
:root {
  /* Display */
  --type-display-xl:   3.5rem;    /* 56px — Hero headlines only */
  --type-display-lg:   2.5rem;    /* 40px — Section headers */
  --type-display-md:   2rem;      /* 32px — Case study titles */
  --type-display-sm:   1.5rem;    /* 24px — Card titles, sub-sections */
  
  /* Body */
  --type-body-lg:      1.125rem;  /* 18px — Lead paragraphs */
  --type-body-md:      1rem;      /* 16px — Default body */
  --type-body-sm:      0.875rem;  /* 14px — Secondary text, captions */
  
  /* Utility */
  --type-caption:      0.8125rem; /* 13px — Metadata, timestamps */
  --type-micro:        0.6875rem; /* 11px — Token labels, annotations */
  --type-mono-data:    0.875rem;  /* 14px — JetBrains Mono data values */
  --type-mono-label:   0.6875rem; /* 11px — JetBrains Mono annotations */
  
  /* Weight */
  --weight-normal:     400;
  --weight-medium:     500;
  --weight-semibold:   600;
  
  /* Line Height */
  --leading-tight:     1.15;   /* Display */
  --leading-snug:      1.35;   /* Titles */
  --leading-normal:    1.6;    /* Body */
  --leading-relaxed:   1.75;   /* Lead paragraphs */
  
  /* Letter Spacing */
  --tracking-tight:    -0.02em;  /* Display sizes */
  --tracking-normal:   -0.01em;  /* Body */
  --tracking-mono:     -0.03em;  /* JetBrains Mono tightened */
}
```

### Typography Principles
1. **Display headlines:** Inter 600, `--tracking-tight` (-0.02em), `--leading-tight` (1.15). Never Inter 700 — 600 is the ceiling.
2. **Body copy:** Inter 400 at 16px, `--leading-normal` (1.6). Lead paragraphs at 18px/400.
3. **Monospace metadata:** JetBrains Mono 400 at 11–14px. Used for token values, grid coordinates, data metrics, annotation callouts. This is the "engineering precision" voice.
4. **Weight ladder:** 400 → 500 → 600. No 300, no 700. The middle register keeps everything feeling professional without shouting.

---

## 4. Spacing & Grid

### 8pt Spatial System

```css
:root {
  --space-1:   0.25rem;   /* 4px — hairline gaps, inline padding */
  --space-2:   0.5rem;    /* 8px — base unit */
  --space-3:   0.75rem;   /* 12px — compact padding */
  --space-4:   1rem;      /* 16px — standard gap */
  --space-5:   1.5rem;    /* 24px — section inner padding */
  --space-6:   2rem;      /* 32px — card padding */
  --space-8:   3rem;      /* 48px — section gap */
  --space-10:  4rem;      /* 64px — major section break */
  --space-12:  5rem;      /* 80px — page section padding */
  --space-16:  6rem;      /* 96px — hero padding */
}
```

### Grid

| Property | Value |
|---|---|
| Max content width | 1120px |
| Columns | 12 |
| Column gap | 24px (`--space-5`) |
| Row gap | 24px (`--space-5`) |
| Page margin (desktop) | `max(24px, calc((100vw - 1120px) / 2))` |
| Page margin (mobile) | 20px |

### Exposed Structural Grid
A 1px `--grid-line` overlay visible at low opacity (0.4 in Blueprint mode, 0.2 in Studio mode) to reinforce the "precision engineering" aesthetic. The grid is decorative — content aligns to the 12-column system, the visible grid provides texture.

---

## 5. Border Radius Scale

```css
:root {
  --radius-xs:    3px;     /* Inline badges, tiny chips */
  --radius-sm:    6px;     /* Buttons, inputs, small cards */
  --radius-md:    8px;     /* Content cards, panels */
  --radius-lg:    12px;    /* Feature cards, modals */
  --radius-xl:    16px;    /* Hero containers, image frames */
  --radius-full:  9999px;  /* Pills, avatar circles */
}
```

**Principle:** Radii are conservative. No `24px+` consumer-app rounding. The blueprint aesthetic demands sharp, structural corners. `--radius-md` (8px) is the workhorse.

---

## 6. Elevation & Depth

| Level | Token | Treatment | Use |
|---|---|---|---|
| 0 | `--shadow-none` | No shadow | Flat content areas, section bands |
| 1 | `--shadow-xs` | `0 1px 2px rgba(0,0,0,0.04)` | Subtle card lift, nav bar |
| 2 | `--shadow-sm` | `0 2px 8px rgba(0,0,0,0.06)` | Elevated cards, dropdowns |
| 3 | `--shadow-md` | `0 4px 16px rgba(0,0,0,0.08)` | Slide-over panels, modals |
| 4 | `--shadow-lg` | `0 8px 32px rgba(0,0,0,0.12)` | Command palette, floating elements |

**Principle:** Hairline borders (`1px solid var(--hairline)`) are the primary hierarchy signal, not shadows. Shadows are structural, not decorative.

---

## 7. Motion & Transitions

```css
:root {
  --ease-out:       cubic-bezier(0.16, 1, 0.3, 1);    /* Primary — snappy out */
  --ease-in-out:    cubic-bezier(0.45, 0, 0.55, 1);    /* Symmetric transitions */
  --ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1);  /* Micro-bounce for toggles */
  
  --duration-fast:    120ms;   /* Hover states, color transitions */
  --duration-normal:  200ms;   /* Panel transitions, tab switches */
  --duration-slow:    350ms;   /* Slide-overs, mode transitions */
  --duration-glacial: 600ms;   /* Page-level canvas mode switch */
}
```

**Principle:** No frivolous animation. Every motion serves a spatial purpose (panel sliding in, mode transitioning). Micro-interactions use `--ease-spring` sparingly (toggle switches, status badge transitions).

---

## 8. Component Architecture

### Shell Components (Blueprint mode)
- `site-nav` — Minimal top bar: wordmark left, section links center, theme/contact right
- `project-index-card` — Case study entry card with title, discipline tag, one-line summary, thumbnail
- `section-header` — Display headline + monospace section number annotation
- `bio-block` — About section with photo, background summary, skill matrix
- `footer` — Minimal: links, copyright, built-with attribution

### Case Study Components (Studio mode)
- `study-hero` — Full-width dark hero with project title, discipline, timeline, and result metrics
- `decision-point` — Annotated wireframe section: wireframe image + numbered callout annotations explaining WHY
- `rejected-option` — Strikethrough/muted card showing what was considered and killed (with rationale)
- `live-prototype-embed` — Sandboxed interactive component visitors can manipulate
- `metric-callout` — Large monospace data point with context label (e.g., "34% → reduction in 6-month attrition probability")
- `annotation-rail` — Side-rail of monospace callouts pointing to specific UI elements in a wireframe

### Interactive Prototype Components
- `retainos-risk-row` — Expandable table row with risk score, sparkline, weighted drivers
- `retainos-intervention-simulator` — What-If sandbox with toggle interventions and live probability gauge
- `uber-fare-pill` — Expandable "All-In Locked Price" component
- `uber-confidence-selector` — Standard vs. Guaranteed toggle with live telemetry
- `uber-radar-queue` — Step-tracker showing driver ping progress

### Prism-Metric Playground Components
- `status-badge` — Multi-state badge (nominal, warning, critical, info) with density toggle
- `metric-scrubber` — Inline data scrubber with live value preview
- `dev-mode-overlay` — Token inspector showing spacing, colors, CSS variables on any component
- `density-toggle` — Compact ↔ Comfortable switch
- `state-switcher` — State control panel (Default, Hover, Loading, Critical)
