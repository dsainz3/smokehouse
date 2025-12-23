# Smokehouse

[![CI](https://github.com/dsainz3/smokehouse/actions/workflows/ci.yml/badge.svg)](https://github.com/dsainz3/smokehouse/actions/workflows/ci.yml)

Personal smoking and grilling knowledge base.

All temperatures, timings, and techniques in this repository are based on cooking with a **Pit Boss Austin XL pellet smoker**.

---

## Smoker Context

- **Smoker:** Pit Boss Austin XL (pellet)
- **Heat behavior:** Right side runs hotter than left

### Placement Guidance

- Thicker cuts → **right side**
- Thinner cuts → **left side**

This helps balance doneness without constant rotation.

> When in doubt: **cook to temperature, not time**.

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Getting Started](#getting-started)
- [Recipes](#recipes)
- [Holidays](#holidays)
- [Marinades](#marinades)
- [Techniques](#techniques)
- [Equipment](#equipment)
- [Cook Logs](#cook-logs)
- [Templates](#templates)
- [Feedback & Ratings](#feedback--ratings)
- [Updating the Table of Contents](#updating-the-table-of-contents)
- [Philosophy](#philosophy)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---

## Getting Started

1. Browse recipes or holiday cooks
2. Review relevant techniques
3. Cook
4. Log results
5. Improve the recipe if needed

This repo favors **practical repeatability** over perfection.

---

## Recipes

Recipes are organized by protein.

- [Poultry](proteins/poultry/)
- [Pork](proteins/pork/)
- [Beef](proteins/beef/)
- [Fish](proteins/fish/)
- [Vegetables](proteins/vegetables/)

---

## Holidays

Holiday-specific cooks live here.

- [Holiday Overview](holidays/)
- [Thanksgiving](holidays/thanksgiving/)
  - [Smoked Mac & Cheese with Bacon](holidays/thanksgiving/smoked_mac_and_cheese_bacon.md)
  - [Smoked Green Bean Casserole](holidays/thanksgiving/smoked_green_bean_casserole.md)
  - [Smoked Sweet Potatoes](holidays/thanksgiving/smoked_sweet_potatoes.md)
- [Christmas](holidays/christmas/)
  - [Spatchcock Smoked Cornish Game Hens](holidays/christmas/spatchcock_cornish_game_hen.md)

---

## Marinades

- [Whiskey River Marinade](marinades/whiskey_river.md)

---

## Techniques

- [Spatchcocking Poultry](techniques/spatchcocking.md)
- [Butter Under the Skin](techniques/butter_under_skin.md)
- [Hot Finish (High-Heat Crisping)](techniques/hot_finish.md)
- [Resting Meat](techniques/resting_meat.md)

---

## Equipment

- [Pit Boss Austin XL Notes](equipment/pit_boss_austin_xl.md)

---

## Cook Logs

Cook logs document what actually happened during a cook.

- [Cook Logs](cooks/)
- Start from `TEMPLATE_COOK_LOG.md`

---

## Templates

To keep recipes consistent, use the provided template:

- **[Recipe Template](TEMPLATE_RECIPE.md)**
  - Include the cook/author (name or initials) so collaborators know who wrote the guide.

Copy the template when adding a new recipe and fill it out as needed.
Not all sections are required for every cook.

---

## Feedback & Ratings

Recipes improve over time.

Each recipe may include:

- A simple 1–5 star rating
- Notes on what worked or didn’t
- Suggestions or variations worth repeating
- Notes from others who ate it (optional)

The goal is improvement, not perfection.

---

## Updating the Table of Contents

After adding or changing major headings, run:

```bash
npm run toc
```

To validate in CI or before committing:

```bash
npm run toc:check
```

PowerShell option:

```powershell
./scripts/update_toc.ps1
```

---

## Philosophy

If it was good enough to repeat, it gets written down.

Recipes describe the **ideal approach**.  
Cook logs capture **real-world results**.

This separation keeps recipes clean while preserving context.
