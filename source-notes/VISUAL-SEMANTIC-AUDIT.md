# Year 10 Agriculture final visual semantic audit

Date: 6 August 2026  
Status: **PASS — release-grade visual package complete**

## Final package count

| Canonical role | Required | Present | Semantic result |
|---|---:|---:|---|
| `hero` | 1 | 1 | PASS |
| `folio_card` | 12 | 12 | PASS |
| `theory_visual` | 60 | 60 | PASS |
| `pedigree_guide` | 1 | 1 | PASS |
| **Total** | **74** | **74** | **PASS** |

Every manifest record has:

- a canonical role and unique asset ID;
- a site-relative `relative_path` and matching Open larger target;
- alt text and caption;
- pixel dimensions, byte count and SHA-256;
- detailed provenance;
- a semantic interpretation covering encoded meaning, colour, shape, position, scale, connector meaning and limits;
- a top-level semantic status beginning with `PASS`;
- rendered usefulness, mobile 390 px and Open larger QA.

## Theory matrix result

All 60 module-section cells have exactly one `theory_visual` record using numeric module values 1–20 and numeric section values 1–3. Module 11 section 2 intentionally points to the separately approved pedigree-reading guide asset while retaining its own theory-adjacency record.

## Final five generated theory visuals

| Section | Asset | Dimensions | Bytes | SHA-256 | Semantic result |
|---|---|---:|---:|---|---|
| 14.3 | `assets/theory/m14-s03-welfare-evidence-five-cards.png` | 1536 × 1024 | 1,305,868 | `a95a05ddb7418b9bf60c94d2d813a1a0da719ab43cefda438596aedeede2b8f3` | PASS |
| 15.3 | `assets/theory/m15-s03-gross-margin-swot-framework.png` | 1536 × 1024 | 1,406,930 | `33d0a65ae38601bb4b346eeab38e1d50355ff5e87cb5b4f29a480b472ccf99fc` | PASS |
| T4-M16-S03 | `assets/theory/m16-s03-breed-anatomy-evidence-reasoning-flow.png` | 1536 × 1024 | 1,205,850 | `6b6a0d0f9da1db89d862b94cffdb28cf01911b40057fb796fd38c3ab6f394233` | PASS |
| T4-M17-S01 | `assets/theory/m17-s01-dairy-processing-purpose-comparison.png` | 1536 × 1024 | 1,268,100 | `924f60b63763b9352c17cac1c3fbc8f9be46f7cf8d6f6aad1b4efcde539aff06` | PASS |
| T4-M20-S02 | `assets/theory/m20-s02-technology-choice-evidence-map.png` | 1536 × 1024 | 1,117,258 | `f66847a9b9e06469756484795d2f45c1deeceb07e1634c899dc5de2dea457ebd` | PASS |

## Semantic release findings

- The hero depicts the three course enterprise contexts without ranking, farm-plan inference, unsafe handling or unsupported local detail.
- The 12 folio cards form a coherent visual deck with neutral connector meanings and no completed assessment answer.
- Source-derived theory visuals retain their authorised slide provenance and are bounded from unsafe procedures, local rates, diagnosis, current claims and answer leakage.
- Generated theory visuals use only the exact approved concepts and labels, with explicit limits against values, procedures, diagnoses, brands, model answers and unsupported settings.
- The pedigree guide preserves the two source-controlled parent-to-offspring relationships without an unsupported ram breed, trait value, husbandry procedure or completed student choice.
- No substitute project plan, farm layout or dimensioned drawing has been created. The separate finished-plan source gate remains `BLOCKED_NO_SOURCE`.

## Visual repetition gate

Status: **PASS**.

- All 20 modules contain three purposeful `theory_visual` records, so every module exceeds the minimum of one purposeful theory visual.
- The 60 `theory_visual` records use **60 distinct in-use paths** and **60 distinct SHA-256 hashes**.
- Duplicate theory-path groups: **0**. Duplicate theory-hash groups: **0**. No contextual image is repeated beside multiple theory sections.
- M13-S01 remains unchanged at `assets/theory/m13-s01-management-calendar-planning-source-slide.png`, SHA-256 `4e78d7883a29954175b09c0dd738edad06fd484ef42aeada08049932dccaf99f`.
- The byte-identical former M13-S02 source-slide copy was removed from in-use assets and replaced in the existing M13-S02 manifest record by the signed-in ChatGPT original at `assets/theory/m13-s02-production-cycle-links-source-slide.png`, SHA-256 `4f99649dd49a7db7d15f6c9f660f01c83a2a735d999307c9f457065ac97cb379` (1536 x 1024, 1,527,203 bytes). The accepted visual uses seven equal neutral nodes, exact approved labels, two-way relationship connectors and the legend `relationship, not fixed schedule`; it adds no dates, husbandry action, treatment, local instruction, farm value or guaranteed consequence.

The only intentional cross-role reuse is `assets/theory/m11-s02-prime-lamb-pedigree-reading-guide.png`, SHA-256 `9adf2b8fb4531f8e010366246255168cab39cabdeb57c451b56080213a3aae33`:

1. `theory_visual` record `theory-m11-s02-prime-lamb-pedigree-reading-guide` places it beside T3-M11-S02, `Reading and constructing a prime-lamb pedigree`, at `module.html?module=11#theory-11-2`.
2. `pedigree_guide` record `prime-lamb-pedigree-reading-guide` supports the separate plan-reading destination at `plans/index.html`; the image and its visible Open larger link are on line 20.

This reuse is pedagogically deliberate: both locations teach the same source-controlled parent-to-offspring structure while preserving neutral sire choices. Reusing the approved guide avoids a contradictory second pedigree diagram. The second manifest role supports the separate plans/index destination and does **not** create another theory-section image. No other manifest path is reused.

## QA conclusion

The complete visual package is internally consistent and ready for course-builder integration. The manifest, matrix, source-deck audit and completed prompt record agree on **74 total records, 60 theory visuals and an empty generation queue**.
