# Launch Order Platform

_Started 2026-05-27 08:40 UTC_

---

## User

Design a web for order a launce

## Assistant

_[tool: list_files]_

_[tool: list_files]_

_[tool: questions_v2]_

Before I dive in, a few quick questions to make sure I build the right thing for you.

## User

Questions answered:
- context: Office team lunch (group ordering)
- platform: Mobile-first (phone)
- scope: Landing / restaurant browse, Item detail with customizations, Menu / category page, Cart / checkout, Order confirmation / tracking, Past orders / reorder
- aesthetic: Clean, minimal, modern
- variations: Single polished design with Tweaks (colors/layout toggles)
- interactivity: Clickable navigation between screens
- cuisine: Mixed / variety
- novelty: Conventional — follows familiar food-app patterns
- imagery: Use stock food photos from the web
- tweaks: Font pairing, Color theme

## Assistant

_[tool: update_todos]_

_[tool: copy_starter_component]_

_[tool: copy_starter_component]_

Got it. Building a mobile-first team-lunch ordering prototype — single iOS frame with clickable navigation across 6 screens, plus a Tweaks panel for font pairings and color themes. I'll use stock food imagery from Unsplash.

_[tool: read_file]_

_[tool: read_file]_

## Assistant

_[tool: read_file]_

_[tool: write_file]_

Now I have what I need. Let me build the app. I'll create one app.jsx with all 6 screens and a small shared components/utils approach.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: show_html]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Built **Stack** — a mobile-first team-lunch ordering prototype.

**6 clickable screens:**
1. **Browse** — greeting, live group-order banner, search, category chips, restaurant cards
2. **Restaurant menu** — hero, info card, sectioned menu, sticky group-order bar
3. **Item detail** — customizations (size, protein, add-ons, dressing), live price
4. **Group cart** — per-teammate items, totals, split-per-person, nudge non-orderers
5. **Order tracking** — big ETA, map, courier card, timeline, what's coming
6. **Past orders** — weekly summary, list with reorder buttons
   (plus a small **Me** screen for the 4th tab)

**Tweaks** (toolbar toggle, bottom-right): 4 color palettes (Sage, Terracotta, Slate, Cobalt), 3 font pairings (Geist, Jakarta, Editorial), plus a **Jump to screen** grid for navigating without retracing the flow.

Tap any restaurant → menu → item → "Add to group order" → cart → "Place order" → tracking. Bottom tabs (Browse / Orders / Group / Me) jump between roots.

