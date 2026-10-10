# 02 — USER DECISIONS LOG

> **Purpose:** Verbatim record of Shubham's answers to design/UX questions. Never overwrite — only append.
> **Last Updated:** 2026-10-08T16:07 IST
> **Status:** Phase 1 COMPLETE — all 5 core decisions captured.

---

## Phase 1: Socratic Extraction — Complete

### Q1: B2B Enterprise Flagship Selection
**Question Asked:** Which project do you want as your B2B flagship — Industrial Asset Telemetry or Workforce Attrition Risk Console? When the operator/manager sees a critical alert, what's the first data point to verify it's not a false alarm, and what's the 1-click action?

**Shubham's Answer (verbatim):**

> **Flagship B2B Product: RetainOS (Enterprise Workforce Retention & Intervention Console)**
>
> - **Foundation:** Built directly on top of my HR Employee Attrition predictive modeling project from `nothing0g.github.io/analyst/`.
> - **The UX Problem:** Traditional HR analytics tools are "post-mortem" graveyards—they show historical turnover charts after employees have already resigned, or they output a black-box ML "Flight Risk %" that managers ignore because they don't trust the math or know what to do next.
> - **My UX Solution:**
>   1. **Explainable Risk Telemetry (Anti-Black-Box UI):** When a manager clicks a flagged employee/cohort row, open a side-panel inspector that breaks the risk score into 3 human-readable, weighted drivers (e.g., "+34% Risk: Overtime exceeded 15hrs/wk for 3 consecutive months", "+28% Risk: Time in current role > 32 months without band progression", "+18% Risk: Commute distance vs hybrid policy mismatch").
>   2. **Interactive Intervention Simulator:** Instead of passive charts, give managers an interactive "What-If Action Sandbox" right in the drawer—allowing them to toggle interventions (e.g., "+12% Market Comp Adjustment" or "Shift to Flexible Remote Tier") and watch the predicted 6-month attrition probability drop in real time before submitting an HR approval workflow.
>   3. **Privacy & Ethics Guardrail UX:** To prevent creepy surveillance, individual risk scores are masked by default at the executive level (grouped by department/team cohorts) and require role-based justification to drill down.

**Key Design Decisions Extracted:**
- B2B product is RetainOS (HR Attrition), NOT Industrial Telemetry
- Anti-black-box: risk scores must be decomposed into human-readable weighted drivers
- Intervention simulator with real-time probability preview (What-If Sandbox)
- Privacy-first: cohort-level masking by default, role-based drill-down with justification
- Side-panel inspector pattern (slide-over drawer, not modal)

---

### Q2: Uber Peak-Demand Friction Point
**Question Asked:** During a 2.4x surge, what's the #1 reason the rider abandons, and how would you redesign that moment?

**Shubham's Answer (verbatim):**

> **Deep-Dive UX Case Study: Uber Peak-Demand "Fare Lock & Match Guarantee" Flow**
>
> - **Foundation:** Evolving my Uber Ride Demand data analysis into a high-impact B2C mobile checkout redesign.
> - **The UX Problem (My Core Insight):** During peak demand surges, users suffer from two massive psychological friction points: **Hidden Charges / Fare Shock** (the final price inflating mysteriously from the initial estimate due to buried surge/toll/platform fees) and **Fulfillment Uncertainty** (staring at a spinning "Finding your ride..." radar for 10 minutes with zero guarantee of whether a cab will actually accept or cancel).
> - **My UX Solution:**
>   1. **Zero-Surprise Upfront Fare Breakdown Pill:** Replace the opaque price tag on the ride selection screen with an interactive, expandable "All-In Locked Price" tag (`₹380 Total Locked` -> expands inline to show `₹290 Base + ₹60 High-Demand Boost + ₹30 MCD Toll`). No hidden post-ride variance.
>   2. **The "Fulfillment Confidence" Selector (Certainty vs. Cost Trade-off):** Replace the blind "Confirm Ride" button during surge hours with a 2-tier certainty toggle:
>      - **Option A: Standard Wait (₹380)** — Displays live, honest fulfillment telemetry based on driver density in that hex zone (e.g., *"~65% chance of match within 6 mins • 3 drivers nearby"*).
>      - **Option B: Guaranteed Lock (+₹40 Priority Commit)** — Triggers an instant high-priority ping to nearby drivers with a hard countdown SLA (*"98% Match Guarantee in 90 seconds, or automatic free upgrade to Uber Premier"*).
>   3. **Post-Booking Live Radar Queue:** Instead of a fake spinning animation on the map, show a transparent step-tracker: *"Pinging 4 drivers within 800m -> Driver #2 reviewing fare -> Locked."*

**Key Design Decisions Extracted:**
- TWO friction points, not one: Fare Shock + Fulfillment Uncertainty
- Expandable "All-In Locked Price" pill component (inline expand, not separate screen)
- Binary Standard vs. Guaranteed toggle (NOT a bid slider)
- Live fulfillment telemetry with probability + driver count
- Transparent post-booking step tracker (anti-fake-spinner)
- Indian market context (₹ currency, MCD tolls)

---

### Q3: Rejected Wireframe Trade-off
**Question Asked:** Which common layout pattern should we reject, and what replaces it?

**Shubham's Answer (verbatim):**

> **Rejected the Double Diamond / 5-step process timeline — replace with annotated decision points.**
>
> Additionally: "In early wireframes for the Uber flow, I considered a 'Bid Your Own Price' slider (like InDrive), and for the HR dashboard, a complex 3D network graph of company departments."
>
> "Why I killed them: Bidding creates decision fatigue when a commuter is rushing to catch a flight or reach office, and 3D graphs are unreadable visual fluff. We pivoted to a binary 'Standard vs. Guaranteed' toggle for Uber and a high-density, sortable 8pt data table + slide-over inspector for RetainOS."

**Key Design Decisions Extracted:**
- NO Double Diamond / Design Thinking process timeline in case studies
- NO "Bid Your Own Price" slider (killed for decision fatigue)
- NO 3D network graphs (killed as visual fluff)
- Case studies use annotated decision points instead of process timelines
- Portfolio should show WHAT was rejected and WHY — demonstrates senior iteration maturity

---

### Q4: Live Playground Component
**Question Asked:** Which interactive component should we build as a live playground?

**Shubham's Answer (verbatim):**

> **"Prism-Metric" Interactive Component Library**
>
> Build a live, interactive component showcase on the portfolio demonstrating how I bridge Design Systems and Engineering Handoff (Dev Mode):
> - An interactive **Confidence & Status Badge System** + **Inline Fare/Metric Scrubber** with live toggles for States (`Default`, `Hover`, `Loading Skeleton`, `Critical Alert`), Density (`Compact` vs `Comfortable`), and a toggleable **"Inspect Tokens / Dev Mode"** overlay that exposes the exact 8pt spacing, Auto Layout flex rules, and CSS/Figma variables right on the screen.

**Key Design Decisions Extracted:**
- Named "Prism-Metric" — it's a component library showcase, not a single component
- Bridges Design Systems AND Engineering Handoff (Dev Mode)
- Two component families: Status Badge System + Fare/Metric Scrubber
- State toggles: Default, Hover, Loading Skeleton, Critical Alert
- Density toggles: Compact vs Comfortable
- "Inspect Tokens / Dev Mode" overlay (8pt grid, spacing annotations, CSS variables)
- Must be interactive and manipulable by visitors

---

### Q5: Visual Identity Direction
**Question Asked:** What should the portfolio's visual identity feel like?

**Shubham's Answer (verbatim):**

> **Precision Engineering Blueprint meets High-Craft Product Studio:** Use an architectural, ultra-crisp aesthetic (inspired by Linear, Vercel Geist, and technical CAD schematics). Exposed 1px hairline structural grids, monospace metadata (`JetBrains Mono`) for metrics/coordinates/tokens, clean sans-serif (`Inter` or `Plus Jakarta Sans`) for UI, zero AI neon gradients, and real interactive coded components embedded inside the case studies so recruiters can actually click and test my Uber Guarantee toggle and HR Risk Simulator live on the site.

**Key Design Decisions Extracted:**
- HYBRID direction: Blueprint shell + Dark Studio for case study immersion
- Typography: Inter or Plus Jakarta Sans (display/body) + JetBrains Mono (metrics/tokens/metadata)
- 1px hairline structural grids, exposed
- Zero neon gradients (non-negotiable)
- Inspiration: Linear, Vercel Geist, CAD schematics
- Interactive coded prototypes EMBEDDED in case studies (not linked out)
- Recruiters must be able to click and test the Uber toggle and HR Risk Simulator live

---

## Summary of Locked Decisions

| Decision | Value | Locked? |
|---|---|---|
| B2B Project | RetainOS (HR Attrition Console) | ✅ |
| B2C Project | Uber "Fare Lock & Match Guarantee" | ✅ |
| Craft Project | Prism-Metric Component Library | ✅ |
| Visual Identity | Hybrid Blueprint + Dark Studio | ✅ |
| Case Study Layout | Annotated decision points, no process timelines | ✅ |
| Typography | Inter/Plus Jakarta Sans + JetBrains Mono | ✅ |
| Interactivity | Live coded prototypes embedded in case studies | ✅ |
| Rejected Patterns | Bid slider, 3D graphs, Double Diamond, neon gradients | ✅ |
