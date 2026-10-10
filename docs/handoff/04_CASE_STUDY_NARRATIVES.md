# 04 — CASE STUDY NARRATIVES & WIREFRAME ARCHITECTURE

> **Purpose:** Full structured text, wireframe specs, and interactive component specs for all 3 projects.
> **Status:** DEFINED — awaiting Phase 3 approval.
> **Last Updated:** 2026-10-08T16:10 IST

---

## INFORMATION ARCHITECTURE — SITE MAP

```
shubhamkumar.design/
├── / (Home — Blueprint mode)
│   ├── Hero: Name + Role + One-line positioning
│   ├── Project Index: 3 case study cards
│   ├── Craft Section: Prism-Metric teaser
│   └── About + Contact
│
├── /retainos (Case Study 1 — Studio mode)
│   ├── Hero: Project title + discipline + impact metrics
│   ├── Section 1: The Problem (Post-mortem analytics are graveyards)
│   ├── Section 2: My Approach (Annotated decision points, NOT process timeline)
│   ├── Section 3: The Solution — Explainable Risk Telemetry
│   │   └── [LIVE PROTOTYPE: Risk Row + Side-Panel Inspector]
│   ├── Section 4: The Solution — Intervention Simulator
│   │   └── [LIVE PROTOTYPE: What-If Sandbox]
│   ├── Section 5: Privacy & Ethics Guardrails
│   ├── Section 6: Rejected Approaches (3D graph, killed with rationale)
│   ├── Section 7: Design System Decisions (8pt table, data density)
│   └── Section 8: Impact & Reflection
│
├── /uber-fare-lock (Case Study 2 — Studio mode)
│   ├── Hero: Project title + discipline + data foundation
│   ├── Section 1: The Problem (Fare shock + Fulfillment uncertainty)
│   ├── Section 2: Data Foundation (Ride demand analysis → design insights)
│   ├── Section 3: The Solution — Zero-Surprise Fare Pill
│   │   └── [LIVE PROTOTYPE: Expandable Fare Breakdown]
│   ├── Section 4: The Solution — Fulfillment Confidence Selector
│   │   └── [LIVE PROTOTYPE: Standard vs. Guaranteed Toggle]
│   ├── Section 5: The Solution — Live Radar Queue
│   │   └── [LIVE PROTOTYPE: Step-Tracker Animation]
│   ├── Section 6: Rejected Approaches (InDrive bid slider, killed with rationale)
│   ├── Section 7: Iteration Snapshots (Annotated wireframe progression)
│   └── Section 8: Projected Impact & Reflection
│
├── /prism-metric (Craft Project — Studio mode)
│   ├── Hero: Component library title + purpose
│   ├── Section 1: Philosophy (Design Systems ↔ Engineering Handoff)
│   ├── Section 2: Status Badge System
│   │   └── [LIVE PLAYGROUND: State/Density/Theme toggles]
│   ├── Section 3: Metric Scrubber Component
│   │   └── [LIVE PLAYGROUND: Inline scrubber with value preview]
│   ├── Section 4: Dev Mode Overlay
│   │   └── [LIVE PLAYGROUND: Token inspector, 8pt grid, CSS vars]
│   └── Section 5: Token Architecture Reference
│       └── Color/Type/Spacing/Radius token tables with live swatches
│
└── (Global)
    ├── Site Nav (persistent, minimal)
    ├── ⌘K Command Palette (optional — carried from analyst site)
    └── Footer
```

---

## PROJECT 1: RETAINOS — Enterprise Workforce Retention Console

### Hero Section
- **Mode:** Studio (dark canvas `#0E0E0D`)
- **Layout:** Full-width, centered text stack
- **Content:**
  - Monospace annotation: `CASE STUDY 01 — B2B ENTERPRISE`
  - Display headline (Inter 600, 56px): `RetainOS`
  - Subhead (Inter 400, 18px): `Transforming HR attrition analytics from post-mortem reporting into proactive, explainable intervention design.`
  - Metric strip (JetBrains Mono 400, 14px): Three data points in a horizontal row, each in a hairline-bordered chip:
    - `ROLE: Product Designer (Concept)`
    - `TIMELINE: 6 Weeks`
    - `DOMAIN: HR Tech / People Analytics`
  - Below: A large, annotated screenshot/wireframe of the RetainOS dashboard (the "hero artifact")

### Section 1: The Problem
- **Layout:** Single-column editorial, max-width 720px centered
- **Content headline:** `The Post-Mortem Problem`
- **Body:** 2–3 paragraphs explaining why traditional HR analytics fail. Key phrases pulled from Shubham's verbatim answer:
  - "Post-mortem graveyards — they show historical turnover charts after employees have already resigned"
  - "Black-box ML 'Flight Risk %' that managers ignore because they don't trust the math or know what to do next"
- **Supporting artifact:** A muted, annotated wireframe of a "typical HR dashboard" (generic chart-heavy layout) with red annotation callouts pointing to the problems:
  1. "Historical only — no predictive action" (pointing at a bar chart)
  2. "Opaque score — no explainability" (pointing at a risk percentage)
  3. "No intervention path — what does the manager DO?" (pointing at empty space where an action should be)

### Section 2: My Approach
- **Layout:** Annotated decision-point cards (NOT a Double Diamond timeline)
- **Format:** 3–4 vertical cards, each containing:
  - A monospace label: `DECISION POINT 01`, `02`, etc.
  - A title: the decision being made
  - A body: the trade-off and why this path was chosen
- **Decision points:**
  1. `Table-first vs. Dashboard-first layout` → Chose table-first because managers need to scan 200+ employees, not 6 charts. Data tables with inline sparklines beat dashboard tiles for triage workflows.
  2. `Individual scores vs. Cohort aggregation` → Defaulted to cohort-level aggregation for privacy. Individual drill-down requires justification.
  3. `Passive risk display vs. Interactive intervention` → Built the What-If Simulator because showing risk without actionable intervention is just anxiety-inducing.
  4. `Black-box score vs. Explainable drivers` → Decomposed every score into 3 weighted, human-readable factors because trust = adoption.

### Section 3: Explainable Risk Telemetry (Anti-Black-Box UI)
- **Layout:** Two-panel wireframe — left shows the sortable risk table, right shows the slide-over inspector
- **Interactive prototype embedded:** `retainos-risk-row` component
  - A 4-row data table with columns: `Employee/Cohort`, `Department`, `Risk Score` (with status color), `Top Driver`, `Trend` (inline sparkline)
  - Clicking a row slides open a side panel showing:
    - Risk score gauge (0–100 with color zones)
    - 3 weighted driver cards: each shows a human-readable sentence, a percentage weight, and a small bar visualization
    - Example drivers from Shubham's answer:
      - `+34% Risk: Overtime exceeded 15hrs/wk for 3 consecutive months`
      - `+28% Risk: Time in current role > 32 months without band progression`
      - `+18% Risk: Commute distance vs hybrid policy mismatch`
  - **Annotation rail:** Monospace callouts on the right edge pointing to key UI elements:
    - `→ Weighted drivers replace opaque scores`
    - `→ Human-readable sentences, not ML jargon`
    - `→ Temporal context ("3 consecutive months") builds trust`

### Section 4: Intervention Simulator (What-If Sandbox)
- **Layout:** Single interactive prototype filling full content width
- **Interactive prototype embedded:** `retainos-intervention-simulator`
  - Below the risk drivers panel, a "What-If Sandbox" section:
    - Toggle cards for interventions:
      - `+12% Market Comp Adjustment` (toggle on/off)
      - `Shift to Flexible Remote Tier` (toggle on/off)
      - `Accelerate Band Progression Review` (toggle on/off)
      - `Assign Mentor from Leadership Pool` (toggle on/off)
    - As toggles are activated, a **6-month attrition probability gauge** updates in real-time:
      - Before: `72% Flight Risk` (red zone)
      - After toggling "Comp Adjustment" + "Remote Tier": `41% Flight Risk` (amber zone)
    - A "Submit for HR Approval" button (disabled by default, enabled when at least one intervention is selected)
  - **Annotation:** `→ Managers simulate outcomes before committing resources — decision confidence replaces gut feeling`

### Section 5: Privacy & Ethics Guardrails
- **Layout:** Narrow editorial column with a callout card
- **Content:** Explanation of the cohort-masking default and role-based justification drill-down
- **Callout card:** A wireframe showing the executive view (department cohorts only) vs. the manager view (individual rows with justification required), with a "Request Individual Access" flow

### Section 6: Rejected Approaches
- **Layout:** `rejected-option` component — a card with muted styling, strikethrough title, and rationale
- **Rejected option 1:** `3D Network Graph of Department Relationships`
  - Visual: Small thumbnail of what the 3D graph would have looked like (can be a simple sketch)
  - Rationale: "Unreadable visual fluff. Impressive in a pitch deck, useless for a manager triaging 200 employees at 9 AM. Replaced with a high-density, sortable 8pt data table + slide-over inspector."
- **Rejected option 2:** `Individual Risk Scores Visible to All Managers`
  - Rationale: "Creepy surveillance. Defaulted to cohort aggregation with role-gated drill-down."

### Section 7: Design System Decisions
- **Layout:** Token reference table + component spec
- **Content:** Explanation of the 8pt grid, data-table density, sparkline rendering, status color system

### Section 8: Impact & Reflection
- **Layout:** Metric callouts + editorial
- **Metric callouts (monospace, large):**
  - `34% ↓` — Projected reduction in 6-month attrition probability when 2+ interventions are simulated
  - `3 → 1` — Steps to verify a risk signal reduced from 3 tools to 1 panel
  - `0 → real-time` — Intervention impact preview latency (from post-mortem to live simulation)
- **Reflection:** What Shubham learned, what he'd do differently, what's next

---

## PROJECT 2: UBER PEAK-DEMAND — "Fare Lock & Match Guarantee"

### Hero Section
- **Mode:** Studio (dark canvas)
- **Content:**
  - Monospace: `CASE STUDY 02 — B2C MOBILE UX`
  - Display headline: `Fare Lock & Match Guarantee`
  - Subhead: `Redesigning the Uber surge-pricing checkout to eliminate fare shock and fulfillment anxiety.`
  - Metric strip:
    - `ROLE: UX Designer (Concept)`
    - `TIMELINE: 4 Weeks`
    - `DOMAIN: Ride-Hailing / Marketplace UX`
  - Hero artifact: An annotated mobile screen showing the redesigned checkout

### Section 1: The Problem
- **Layout:** Single-column editorial
- **Content headline:** `Two Friction Points, One Checkout Screen`
- **Body:** Two parallel friction analyses:
  - **Friction 1: Fare Shock** — "The final price inflates mysteriously from the initial estimate due to buried surge/toll/platform fees." Show a wireframe of the current opaque price tag with a red callout: `₹380 shown, but ₹290 + ₹60 surge + ₹30 toll aren't broken out`
  - **Friction 2: Fulfillment Uncertainty** — "Staring at a spinning 'Finding your ride...' radar for 10 minutes with zero guarantee of whether a cab will actually accept or cancel." Show a wireframe of the current spinner with callout: `No driver count, no probability, no SLA`

### Section 2: Data Foundation
- **Layout:** Editorial + data artifact
- **Content:** How Shubham's Uber Ride Demand Analysis informed the design:
  - Peak demand patterns (time-of-day, day-of-week)
  - Surge multiplier distribution
  - Hex-zone driver density correlation
  - The data insight that led to the "Fulfillment Confidence" concept: driver density per hex zone can predict match probability

### Section 3: Zero-Surprise Fare Breakdown Pill
- **Interactive prototype embedded:** `uber-fare-pill`
  - A mobile-width card showing the ride option with the fare pill:
    - Collapsed: `₹380 Total Locked` (with a subtle chevron)
    - Expanded (on click): Inline breakdown slides open:
      - `₹290 Base Fare`
      - `₹60 High-Demand Boost` (with a small "?" tooltip: "Applied during peak hours based on real-time demand")
      - `₹30 MCD Toll`
    - Design principle annotation: `→ "Locked" language eliminates post-ride variance anxiety`
    - Second annotation: `→ Inline expand — no modal, no separate screen, no friction`

### Section 4: Fulfillment Confidence Selector
- **Interactive prototype embedded:** `uber-confidence-selector`
  - A mobile-width card showing the 2-tier toggle:
    - **Tab A: Standard Wait (₹380)**
      - Live telemetry: `~65% chance of match within 6 mins`
      - Driver indicator: `3 drivers nearby` (with small dot indicators)
    - **Tab B: Guaranteed Lock (₹420)**
      - SLA badge: `98% Match Guarantee in 90 seconds`
      - Fallback: `or automatic free upgrade to Uber Premier`
  - Toggle is interactive — visitors can switch between tabs
  - Annotation: `→ Binary choice replaces blind "Confirm" — certainty has a price, and the rider chooses`

### Section 5: Live Radar Queue
- **Interactive prototype embedded:** `uber-radar-queue`
  - A mobile-width step tracker showing the post-booking flow:
    - Step 1: `Pinging 4 drivers within 800m` (animated dots)
    - Step 2: `Driver #2 reviewing fare` (pulse animation)
    - Step 3: `Driver locked — arriving in 4 min` (success state)
  - Auto-plays through the steps on a timer
  - Annotation: `→ Transparent progress replaces fake spinning animation — every step is honest`

### Section 6: Rejected Approaches
- **Rejected option:** `"Bid Your Own Price" Slider (InDrive model)`
  - Wireframe: Small sketch of what a price slider would look like
  - Rationale: "Bidding creates decision fatigue when a commuter is rushing to catch a flight or reach office. The marketplace needs a clear price, not a negotiation. Replaced with a binary Standard vs. Guaranteed toggle."

### Section 7: Iteration Snapshots
- **Layout:** Scrollable annotation sequence (NOT side-by-side before/after)
- **Format:** 3–4 wireframe iterations, each with annotation explaining what changed and why:
  1. `V1: Single fare number + Confirm button` → Problem: no transparency
  2. `V2: Fare breakdown in a modal` → Problem: modal interrupts flow, adds a tap
  3. `V3: Inline expandable pill + Confidence toggle` → Winner: zero friction, full transparency
  4. `V4 (polish): Added live driver count + step tracker` → Refinement: post-booking trust

### Section 8: Projected Impact
- **Metric callouts:**
  - `~18% ↓` — Estimated reduction in checkout abandonment during surge (modeled from fare transparency research)
  - `0 → 3` — Data points visible during driver matching (driver count, probability, step progress)
  - `2-tier` — Certainty vs. cost trade-off made explicit for rider autonomy

---

## PROJECT 3: PRISM-METRIC — Interactive Component Library

### Hero Section
- **Mode:** Studio (dark canvas)
- **Content:**
  - Monospace: `CRAFT PROJECT — DESIGN SYSTEMS`
  - Display headline: `Prism-Metric`
  - Subhead: `A live component library bridging Design Systems and Engineering Handoff — with a built-in Dev Mode inspector.`

### Section 1: Philosophy
- **Content:** Why design systems need to be demonstrated with live code, not static Figma frames. The gap between designer intent and developer interpretation. How Prism-Metric solves it by exposing tokens directly on the component.

### Section 2: Status Badge System — Live Playground
- **Interactive playground:**
  - A panel showing 4 status badges: `Nominal`, `Warning`, `Critical`, `Info`
  - **Control bar:**
    - State switcher: `Default` | `Hover` | `Loading Skeleton` | `Critical Alert`
    - Density toggle: `Compact` | `Comfortable`
    - Theme toggle: `Blueprint` | `Studio`
  - As controls change, the badges update in real-time
  - Each badge shows its label, icon, and a small metric value

### Section 3: Metric Scrubber — Live Playground
- **Interactive playground:**
  - An inline horizontal scrubber showing a metric range (e.g., "Risk Score: 0–100")
  - Dragging the scrubber updates a live value display
  - Includes state variants (default, active, disabled)

### Section 4: Dev Mode Overlay — Live Playground
- **Interactive playground:**
  - A "Dev Mode" toggle button at the top of any component
  - When activated:
    - 8pt grid overlay appears on the component
    - Spacing annotations appear (e.g., `padding: 12px`, `gap: 8px`)
    - Color token labels appear on fills (e.g., `var(--status-critical)`)
    - A side panel shows the full CSS/token spec for the component
  - This is the showcase piece — it demonstrates Shubham's ability to think in handoff-ready systems

### Section 5: Token Architecture Reference
- **Layout:** Structured token tables (not prose)
- **Tables:**
  - Color tokens: swatch + name + hex + CSS variable
  - Typography tokens: sample + size + weight + line-height + CSS variable
  - Spacing tokens: visual bar + value + CSS variable
  - Radius tokens: visual shape + value + CSS variable

---

## WIREFRAME LAYOUT PATTERNS (Shared)

### Case Study Page Structure
Every case study follows this vertical rhythm:

```
[Hero — full width, Studio mode]
    ↓ 80px
[Problem Section — 720px editorial column]
    ↓ 64px
[Approach Section — Decision point cards, full content width]
    ↓ 64px
[Solution Section 1 — Live prototype, full content width]
    ↓ annotation rail alongside
    ↓ 48px
[Solution Section 2 — Live prototype, full content width]
    ↓ 48px
[Rejected Approaches — Muted cards, 720px column]
    ↓ 64px
[Iteration/System Decisions — Annotation sequence or token tables]
    ↓ 64px
[Impact & Reflection — Metric callouts + editorial, 720px column]
    ↓ 80px
[Footer]
```

### Home Page Structure

```
[Nav — persistent, Blueprint mode]
    ↓
[Hero — centered text stack, 1120px max]
    Name: "Shubham Kumar"
    Role: "Product Designer — bridging Mechanical Engineering, Data Analytics, and Systems-Level UX"
    One line: "I design enterprise tools that explain their own intelligence and consumer flows that respect human attention."
    ↓ 48px
[Project Index — 3 cards in a row]
    Card 1: RetainOS thumbnail + title + "B2B Enterprise · HR Tech"
    Card 2: Fare Lock thumbnail + title + "B2C Mobile · Ride-Hailing"
    Card 3: Prism-Metric thumbnail + title + "Design Systems · Craft"
    ↓ 64px
[Craft Teaser — Prism-Metric status badge playground (small inline version)]
    ↓ 48px
[About — Bio block with photo + background summary + discipline matrix]
    ↓ 48px
[Footer]
```

---

## NEXT STEPS

1. Shubham reviews this full architecture document (Phase 3 gate)
2. Upon approval, begin Phase 4 execution:
   - Set up project structure (Vite or static HTML)
   - Implement design system CSS (tokens from `03_DESIGN_SYSTEM_SPEC.md`)
   - Build shell pages (home, nav, footer) in Blueprint mode
   - Build case study pages in Studio mode
   - Build interactive prototypes (RetainOS simulator, Uber toggle, Prism-Metric playground)
   - Polish, test, deploy
