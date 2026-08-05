# Year 10 Agriculture visual source-deck audit

Status: **complete — 74 manifest records PASS; generation queue empty; visual repetition gate PASS**.

## Render and index evidence

- 39 authorised teaching PowerPoint files downloaded from the complete Year 10/2026 Drive subtree.
- All 39 downloaded file sizes match the authoritative Drive inventory.
- 484 slide PNGs rendered; 39/39 decks have at least one render; 0 missing renders.
- A searchable slide index records deck Drive ID, source title, source URL, slide number, extracted slide text and local render path for all 484 slides.
- Contact sheets were visually inspected for all 39 decks. The two final Term 4 decks were inspected separately as well as in the full-deck sheet.

## Selection rule

A slide is selected only when its visible content supports the exact adjacent theory section without requiring an inferred label, current statistic, breed identification, diagnosis, procedure, local farm setting or technical value. A slide containing an authorised but time-sensitive or overly specific claim remains rejected unless the final theory explicitly supports and bounds it. `Open larger` suitability is mandatory for text-rich source previews.

## Current selected preview

| Theory section | Source | Slide | Decision | Reason |
|---|---|---:|---|---|
| `T1-M01-S02` — Goats, bees and pigs as diverse enterprises | `2.1 Interesting Industries.pptx`, Drive `11t9DIFsoIBTokrmn9iR98Pl4vJpcUS-O` | 9 | PASS | Clear topic heading and representative pig photograph; no data encoding; no breed or production-system inference; readable at 390 px; full render supports Open larger. |

## Explicit rejections and cautions

- `1.1 Agriculture in Australia.pptx` slide 4: REMOVE — visible acreage/statistical claim is not required by the theory and has not been current-verified.
- `2.1 Interesting Industries.pptx` slide 7: REMOVE — title claims a bee-colony hierarchy but the slide only contains an unlabelled single-bee photograph; the visual does not encode the stated hierarchy.
- `1.1 Introduction to Prime Lamb Breeding Systems.pptx` slide 11: REMOVE for the Task 3 pedigree guide — it supplies specific breed choices and is not the neutral, student-completable reading guide required by the controlling report scaffold.
- Livestock, dairy, deregulation and export graphs containing dated figures: hold/reject for teaching-current claims. They may only be used as explicitly dated graph-reading source evidence if a final theory section calls for that task.
- Prime-lamb calendar slides with named months, timing and local management procedures: hold/reject unless an authorised final theory section expressly preserves those source details and local procedures are confirmed.
- Reproductive, mammary and plant anatomy diagrams: candidates only. Every visible label must match the final theory and be described in the manifest before selection.
- Crop-symptom photographs: candidates only as observable signs. They must not be captioned as a diagnosis from appearance alone.

## Pending exact theory adjacency

The 18B handoff currently contains only `MODULE-01.json` (three named sections). Remaining source-preview selections are deliberately not assigned to invented section titles. As new 18B module files appear, each candidate will be checked against the final section text and source boundary before being copied into `assets/theory` and recorded in `VISUAL-MANIFEST.json`.

## Pedigree and plan boundary

The 2026 Task 3 report scaffold (Drive `1rh8Tedl_c2XQ3-aw0KqpOBCWfmmqef-w`) requires students to develop a prime-lamb breeding program and draw a pedigree. Its controlling relationship is: Merino ewe + a variable ram → first-cross ewe; first-cross ewe + a selected terminal sire → prime lambs. No source visual or template is embedded in the scaffold. A neutral guide was generated through the verified Steve Cowell Pro account, downloaded as the original 1672 × 941 PNG and passed full-size, desktop and 390 px review. Its connectors encode parent-to-offspring relationships only; it supplies no unsupported breed choice, value, procedure, farm layout or model answer.

Separately, no authoritative finished project plan or dimensioned drawing was supplied. No substitute plan, farm layout or dimensioned drawing has been created.

## Signed-in generation window — 6 August 2026

- `prime-lamb-pedigree-reading-guide`: PASS. Stable conversation, assistant-turn, generated-image and file identifiers are recorded in the manifest; original dimensions, byte size and SHA-256 were verified.
- `course-hero`: PASS. The text-free Australian cropping, prime-lamb and dairy context passed full-size, desktop and 390 px review without technical claims, unsafe procedure, local identity, plan facts or answer leakage.
- `folio-card-01`: REPLACE. The initial image was rejected for a recognisable vehicle badge and crossing connectors. One targeted correction completed, but the corrected original PNG failed stable browser asset export on two separate inventories. No local file, dimensions, byte size or hash were fabricated.
- `folio-card-02` and `folio-card-03`: not requested. The queue stopped immediately at the genuine card-01 provenance failure, as required.
- Fixed remaining genuinely new generation queue: 28 assets — 12 folio cards and 16 theory replacements. The hero and pedigree guide are complete.

## Signed-in folio retry window — 6 August 2026

- Steve Cowell Pro was verified before the fresh request.
- `folio-card-01`: a completely fresh ChatGPT conversation used the approved prompt with unbranded transport and non-crossing, unambiguous connectors required up front. The original exported successfully. The four labels and relationship layout were correct, but a recognisable utility-vehicle grille badge failed the brand prohibition.
- One targeted correction requested a completely plain grille while preserving all other content. Its original also exported successfully, but full-resolution inspection still found a circular grille emblem. The 1672 × 941 rejected image was quarantined outside the release repository; it is not an Open larger target and no PASS metadata is claimed.
- `folio-card-02`, `folio-card-03` and `folio-card-04`: not requested. The queue stopped immediately at the uncorrectable card-01 semantic defect.
- Remaining genuinely new generation queue remains 28 assets — 12 folio cards and 16 theory replacements.
- The separate `BLOCKED_NO_SOURCE` gate for a finished project plan or dimensioned drawing remains unchanged; no substitute was created.

## Vehicle-free folio-card-01 workaround — 6 August 2026

- A fresh Steve Cowell Pro conversation generated a redesigned educational system graphic with no vehicle, additional machine, enclosing logo-like circle, badge, grille, brand, farm layout, signage or realistic packaging.
- ChatGPT displayed two completed candidates. Image 1 was selected after visible comparison; only that candidate's original PNG was exported and retained. No targeted correction was required.
- The retained graphic contains exactly four generic pictograms: field and plant for `Farm production`; a standalone gear and unmarked box for `Processing`; an unsigned empty stall for `Retail`; and a diverse group for `Community needs`.
- The four labels are spelled exactly and no extra text appears. Exactly four thin lines connect neighbouring pictograms without crossing. They encode relationship only, not quantity, direction of value, causation, workflow, sequence, profit, hierarchy or ranking.
- Original 1672 × 941 PNG, 1,017,844 bytes, SHA-256 `8958e52209554bfb43d463f8982ff4765afd61f2a2819796ef52227221a0ffdc`; full-size, 960 × 540 desktop, 390 × 219, semantic and Open larger checks all PASS.
- `folio-card-01` is now PASS. This single-card window then stopped as instructed. The remaining genuinely new generation queue is 27 assets: 11 folio cards and 16 theory replacements.
- The independent `BLOCKED_NO_SOURCE` finished-plan gate remains unchanged; no plan, layout or dimensioned drawing was created.

## Folio cards 02–05 generation batch — 6 August 2026

- Four separate fresh Steve Cowell Pro conversations were used sequentially. Each final corrected original was exported once, saved at its manifest path and inspected full-size, at 960 × 540 desktop and 390 × 219.
- `folio-card-02`: PASS after one small correction removed an extra plant sprig and unexplained terracotta oval. The final three equal stages and exactly two arrows encode evidence-reasoning order only, with no values, price, brand, profit or causal claim.
- `folio-card-03`: PASS after one small correction removed four enclosing badge circles. The blank revision page has four equal concept cues and four identical association lines, with no questions, answers, marks, scores, outcome codes or model response.
- `folio-card-04`: PASS after one small correction replaced an inconsistent broad serrated leaf with a magnified narrow leaf feature matching the generic specimen. The single dotted connector remains tentative evidence, not diagnosis, identification or proof of performance.
- `folio-card-05`: PASS after one small correction removed decorative foliage outside the four required stages. The blank sensor carries no value, calibration, diagnosis, rate or capability claim; three arrows mean evidence can inform a decision only.
- All four Open larger targets resolve to the retained originals. Manifest validation passed after every asset. Final batch state: 50 PASS, 8 REPLACE, zero validation errors.
- Remaining genuinely new generation queue: 23 assets — folio cards 06–12 and 16 theory replacements. The finished-plan `BLOCKED_NO_SOURCE` gate is unchanged.

## Folio card 06 generation — 6 August 2026

- A fresh Steve Cowell Pro conversation generated the approved privacy-safe blank plant-evidence template. No correction was required.
- The retained original contains four equal, clearly distinct evidence fields and exactly three subordinate unlabelled plant-category placeholder tokens. It contains no text, personal data, location, supplied species answer, scientific name, completed response, brand, procedure or model answer.
- Original 1536 × 1024 PNG, 1,305,529 bytes, SHA-256 `f6e10932c183162d3b1bd6de88eefec5503881853c9bd6459e360bc2e00811fd`; full-size, 960 × 540 desktop, 390 × 219, semantic and Open larger checks all PASS.
- Manifest validation passed after integration. The remaining genuinely new generation queue is 22 assets: folio cards 07–12 and 16 theory replacements.
- A distinct PASS `theory_visual` record for M11-S02 now references the approved pedigree-guide original with its own adjacency metadata, alt, caption and semantic audit; no second pedigree image was generated.
- The independent `BLOCKED_NO_SOURCE` finished-plan gate remains unchanged.

## Folio card 07 generation — 6 August 2026

- A separate fresh Steve Cowell Pro conversation generated the four-input prime-lamb evidence graphic. One permitted targeted correction equalised the inward connectors and replaced an ambiguous ring-bound page with a plain blank record sheet.
- The corrected original shows a neutral sheep and blank breeding record, selection-evidence DNA symbol, unmarked feed sample and pasture observation around an empty decision record. Four matched inward arrows encode evidence informing a decision only, not equal weighting or a prescribed action.
- No breed answer, EBV or value, ration amount, weight, age, treatment, reproductive procedure, farm-specific quantity, model decision, text or brand appears.
- Corrected original 1536 × 1024 PNG, 1,278,476 bytes, SHA-256 `39137b0e44c355c01ddfcde74494e5553a0bf623b54b703389ce2e3354003299`; full-size, 960 × 540 desktop, 390 × 219, semantic and Open larger checks all PASS.
- Manifest validation passed after integration. The remaining genuinely new generation queue is 21 assets: folio cards 08–12 and 16 theory replacements. The `BLOCKED_NO_SOURCE` finished-plan gate is unchanged.

## Folio card 08 generation — 6 August 2026

- A separate fresh Steve Cowell Pro conversation generated the four-checkpoint management-evidence graphic. One permitted targeted correction removed four badge-like circles and all decorative crops and foliage.
- The corrected original retains exactly four neutral checkpoints: a blank calendar page, blank unbranded monitoring device, generic sheep welfare observation and blank risk-review clipboard. Three matched connector lines have no arrowheads and encode association only.
- No date, month, timing, reading, setting, dosage, rate, risk rating, handling, yard layout, local WHS control, procedure, treatment, approved calendar, text or brand appears.
- Corrected original 1536 × 1024 PNG, 1,154,709 bytes, SHA-256 `8d899229583db816ca07d66a24ac3afb400818b9a88fb1df16c686a5e54beff3`; full-size, 960 × 540 desktop, 390 × 219, semantic and Open larger checks all PASS.
- Manifest validation passed after integration. The remaining genuinely new generation queue is 20 assets: folio cards 09–12 and 16 theory replacements. The `BLOCKED_NO_SOURCE` finished-plan gate is unchanged.

## Folio card 09 generation — 6 August 2026

- A separate fresh Steve Cowell Pro conversation generated the two-panel assessment-evidence graphic. One permitted targeted correction removed an unintended horizontal line between the two lower sheep in the relationship token.
- The corrected left panel contains a blank portfolio, a three-sheep relationship token with exactly two non-directional parent-offspring lines, consumer-evidence token and blank market-report token. The right panel shows a teacher observing an anonymous student beside, but not touching, a generic sheep, with only a short contextual fence segment.
- The single vertical divider separates report or portfolio evidence from teacher-observed practical evidence. No cross-panel arrow, model pedigree, breed answer, market claim, price, handling instruction, yard plan, score, student identity, completed response, text or brand appears.
- Corrected original 1536 × 1024 PNG, 1,645,269 bytes, SHA-256 `7490555e73de81e8ddd87a0d32354e9a2dc7c8870f26a51c7ce59b83fbb30d8e`; full-size, 960 × 540 desktop, 390 × 219, semantic and Open larger checks all PASS.
- Manifest validation passed after integration. The remaining genuinely new generation queue is 19 assets: folio cards 10–12 and 16 theory replacements. The `BLOCKED_NO_SOURCE` finished-plan gate is unchanged.

## Folio card 10 generation — 6 August 2026

- A separate fresh Steve Cowell Pro conversation generated the dairy-system pathway. One permitted targeted correction removed four badge-like enclosing circles.
- The corrected original contains exactly four equal cues: two generic cattle, a blank cow-outline study card with magnifier, a sealed plain milk vessel and an unbranded plain package. Exactly three matched lines without arrowheads connect neighbouring cues.
- No breed identification, anatomy label, internal organ, diagnosis, milk yield, processing equipment or setting, operating instruction, price, grade, product ranking, brand, farm layout, text or decorative data appears.
- Corrected original 1536 × 1024 PNG, 1,274,948 bytes, SHA-256 `7d0ff46ad35cb7fc3a5be67d41aa6d146618e3e8a03a214ba3ce1fa4ef11c9fe`; full-size, 960 × 540 desktop, 390 × 219, semantic and Open larger checks all PASS.
- Manifest validation passed after integration. The remaining genuinely new generation queue is 18 assets: folio cards 11–12 and 16 theory replacements. The `BLOCKED_NO_SOURCE` finished-plan gate is unchanged.

## Folio card 11 generation — 6 August 2026

- A separate fresh Steve Cowell Pro conversation generated the evidence-linked dairy study and careers graphic. One permitted targeted correction replaced a human-like reproductive anatomy outline with a neutral reproduction-study textbook cue and removed four enclosing frames.
- The corrected original contains four equal groups around a blank notebook: cattle-and-cell reproduction study, unlabelled four-teat mammary study, a blank unbranded monitoring device and exactly three generic career silhouettes. Four matched lines without arrowheads encode evidence linkage only.
- No internal reproductive anatomy, anatomy label, hormone, timing, procedure, diagnosis, treatment, device reading, technology-benefit claim, employer, hierarchy, salary, qualification, current statistic, text or brand appears.
- Corrected original 1536 × 1024 PNG, 1,296,553 bytes, SHA-256 `8e39d34425eb8dc0e91b056d49d4896a1a3a8196767ad4ea7b00f5bb7485fd51`; full-size, 960 × 540 desktop, 390 × 219, semantic and Open larger checks all PASS.
- Manifest validation passed after integration. The remaining genuinely new generation queue is 17 assets: folio card 12 and 16 theory replacements. The `BLOCKED_NO_SOURCE` finished-plan gate is unchanged.

## Folio card 12 generation — 6 August 2026

- A separate fresh Steve Cowell Pro conversation generated the final course-synthesis graphic. One permitted targeted correction removed spiral binding and anchored the single improvement arrow directly to the blank notebook's right edge.
- The corrected original contains exactly four equal folders: systems evidence with three squares and two non-directional lines, a generic plant sprout, a generic prime-lamb sheep, and generic dairy cattle with a sealed plain vessel. A small magnifier marks limitation checking; exactly one arrow points from the notebook into empty space.
- No folder connectors, ranking, score, outcome code, forecast, model evaluation, finished farm plan, dimensioned drawing, map, yard layout, schedule, procedure, completed response, unsupported claim, text or brand appears.
- Corrected original 1536 × 1024 PNG, 1,681,873 bytes, SHA-256 `ef90c17fcdc6b9aeb57578a7dcdbbe79ef57d16c3094fcf7132b88811c5f4238`; full-size, 960 × 540 desktop, 390 × 219, semantic and Open larger checks all PASS.
- Manifest validation passed after integration. All 12 folio cards now PASS. The remaining genuinely new generation queue is exactly 16 theory replacements. The `BLOCKED_NO_SOURCE` finished-plan gate remains unchanged.

## Theory replacement T1-M01-S03 — 6 August 2026

- A fresh Steve Cowell Pro conversation generated the exact-title decision-evidence graphic for `Diversification, markets and sustainability decisions`; no correction was required.
- The retained original uses exactly the labels `enterprise choice`, `products and services`, `regional suitability`, `markets` and `sustainability trade-offs`. Four inward non-crossing arrows mean evidence may inform the choice; equal token size does not prescribe equal numerical weighting.
- No recommended enterprise, named region, map, brand, profit, price, score, ranking, guarantee, local example or completed answer appears.
- Original 1536 × 1024 PNG, 1,885,251 bytes, SHA-256 `95c51a91962edc6452a012d0259166b1ea4756d45ade04c58debd777df268849`; full-size, 960 × 540 desktop, 390 × 219, semantic and Open larger checks all PASS.
- Manifest validation passed after integration. The remaining queue is 15 theory replacements. The `BLOCKED_NO_SOURCE` finished-plan gate is unchanged.

## Theory replacement T1-M02-S02 — 6 August 2026

- A separate fresh Steve Cowell Pro conversation generated the exact-title six-category IPM guide. One permitted targeted correction removed ambiguous category pictograms and pseudo-text-like marks.
- The corrected original uses exactly the labels `Cultural`, `Physical`, `Biological`, `Chemical`, `Genetic` and `Regulatory` in six equal unnumbered segments around a neutral crop-and-livestock context.
- Segment colour identifies categories only. No product, rate, dose, PPE, treatment, application, machinery, procedure, local biosecurity rule, diagnosis, score, ranking, recommended control or best category appears.
- Corrected original 1536 × 1024 PNG, 1,404,287 bytes, SHA-256 `ec613ec1383343e95d06cff81a1927b2759fe7e342c9427a2f3e160908e4d293`; full-size, 960 × 540 desktop, 390 × 219, semantic and Open larger checks all PASS.
- Manifest validation passed after integration. The remaining queue is 14 theory replacements. The `BLOCKED_NO_SOURCE` finished-plan gate is unchanged.

## Theory replacement T1-M03-S02 — 6 August 2026

- A separate fresh Steve Cowell Pro conversation generated the exact-title three-column marketing-strategy comparison. One permitted targeted correction removed decorative foliage and a partial corner shape.
- The corrected original uses exactly the headings `Direct selling`, `Contracts` and `Online selling`. Every equal column repeats the same seven neutral icon rows for producer control, stability, reach, workload, requirements, logistics and trust.
- The repeated rows provide comparison dimensions only; they do not rate or distinguish strategy performance. No tick, cross, score, price, profit, brand, named platform, current claim, preferred strategy or completed answer appears.
- Corrected original 1536 × 1024 PNG, 1,277,710 bytes, SHA-256 `584c60e6ddc9e53e2ecb87358cd85c8a4d9866071f325f7b16f56cc2069e0445`; full-size, 960 × 540 desktop, 390 × 219, semantic and Open larger checks all PASS.
- Manifest validation passed after integration. The remaining queue is 13 theory replacements. The `BLOCKED_NO_SOURCE` finished-plan gate is unchanged.

## Theory replacement T1-M03-S03 — 6 August 2026

- A separate fresh Steve Cowell Pro conversation generated the exact-title four-stage evidence-reasoning flow. One permitted targeted correction removed every decorative plant mark while retaining the required structure.
- The corrected original uses exactly the labels `Describe the trend`, `Check context`, `Compare channels` and `State uncertainty`. Four equal cards are joined by exactly three identical right-facing arrows; only the first card contains a tiny unnumbered trend line without axes, values, dates, units or legend.
- The arrows encode reasoning order only. No price, named market, brand, named channel, current claim, causal claim, score, certainty rating, recommendation, predicted result, completed conclusion or model answer appears.
- Corrected original 1536 × 1024 PNG, 1,083,441 bytes, SHA-256 `9230d639436ea2ff6674b1ee096e68184025b969efcb878b0f24e9fe46d3c6b3`; full-size, 960 × 540 desktop, 390 × 219, semantic and Open larger checks all PASS.
- Manifest validation passed after integration. The remaining queue is 12 theory replacements. The `BLOCKED_NO_SOURCE` finished-plan gate is unchanged.

## Theory replacement T1-M04-S03 — 6 August 2026

- A separate fresh Steve Cowell Pro conversation generated the exact-title four-stage consumer-evidence pathway. One permitted targeted correction removed an endorsement-like heart and star badge.
- The corrected original uses exactly the labels `Survey evidence`, `Target audience`, `Selling points` and `Value-added form`. A source-check magnifier appears with the first stage; exactly three identical arrows connect four equal cards.
- The arrows encode reasoning order only. No collected result, percentage, named audience, brand, endorsement, slogan, price, profit, completed promotion, current claim, guaranteed demand or model answer appears.
- Corrected original 1536 × 1024 PNG, 1,191,589 bytes, SHA-256 `3683aabded51293be271d2d9d129e09dda38113a125e4cb85d03ba8a729c2076`; full-size, 960 × 540 desktop, 390 × 219, semantic and Open larger checks all PASS.
- Manifest validation passed after integration. The remaining queue is 11 theory replacements. The `BLOCKED_NO_SOURCE` finished-plan gate is unchanged.

## Theory replacement T2-M08-S01 — 6 August 2026

- A fresh Steve Cowell Pro conversation generated the source-bounded weeds-and-competition evidence strip. One permitted correction removed four stage numbers and enlarged the exact labels; ChatGPT returned two corrected candidates, and only the retained first candidate was exported.
- The retained original uses exactly `Observe distribution`, `Check competition`, `Explain possible effect` and `Identify further evidence`. Generic plants remain unlabelled; equal cues represent light, nutrients and water; a dotted connector marks only a possible effect; the final record is blank.
- No species identification, collected specimen, diagnosis, chemical, product, treatment, timing, rate, threshold, equipment, PPE, local action, management answer or completed Task 2 evidence appears.
- Corrected original 1536 × 1024 PNG, 1,542,405 bytes, SHA-256 `5532cc44cce3343d631da2171dbca558fbfc67f1c888f9622c46ff3901a0ad37`; full-size, 960 × 540 desktop, 390 × 219, semantic and Open larger checks all PASS.
- Manifest validation passed after integration. The remaining queue is 10 theory replacements. The `BLOCKED_NO_SOURCE` finished-plan gate is unchanged.

## Theory replacement T2-M08-S02 — 6 August 2026

- A fresh Steve Cowell Pro conversation generated the source-bounded pests-and-monitoring observation guide. One permitted correction removed small header pictograms, enlarged the exact labels and removed the arrowhead from the illustrative change line.
- The retained original uses exactly `Visible signs`, `Distribution`, `Change over time` and `Further evidence`. Generic chewed-edge and discoloured-leaf marks are repeated across an unnumbered plant group; two observation frames and the final record remain blank.
- No pest, disease, pathogen, cause, numerical threshold, diagnosis, chemical, product, treatment, timing, sampling method, equipment, PPE, local trigger or completed Task 2 evidence appears.
- Corrected original 1536 × 1024 PNG, 1,327,182 bytes, SHA-256 `cc182ba42769f388bcde394b246adc0569b273c9da9764034fb692ae472ecb09`; full-size, 960 × 540 desktop, 390 × 219, semantic and Open larger checks all PASS.
- Manifest validation passed after integration. The remaining queue is 9 theory replacements. The `BLOCKED_NO_SOURCE` finished-plan gate is unchanged.

## Theory replacement T2-M08-S03 — 6 August 2026

- A fresh Steve Cowell Pro conversation generated the source-bounded diseases-and-integrated-management evidence boundary. One permitted correction removed four stage numbers and enlarged the exact labels.
- The retained original uses exactly `Describe the pattern`, `Consider possible pathways`, `Seek further evidence` and `Compare broad categories`. One generic spotted leaf is separate from equal wind, moisture and crop-residue cues; the evidence record and four category cards remain blank.
- The pathway cues are possibilities to investigate, not confirmed spread or causes. No disease, pathogen, specimen, fungicide, resistant-variety claim, treatment, chemical choice, rate, timing, threshold, calibration, PPE, residue-handling procedure, local trigger, diagnosis or completed Task 2 evidence appears.
- Corrected original 1536 × 1024 PNG, 1,507,022 bytes, SHA-256 `c3c529fb9d51fe8ebd8bdd0b3229b1b7c22c4fa5ce6f056e816f41ba80c95683`; full-size, 960 × 540 desktop, 390 × 219, semantic and Open larger checks all PASS.
- Manifest validation passed after integration. The remaining queue is 8 theory replacements. The `BLOCKED_NO_SOURCE` finished-plan gate is unchanged.

## Theory replacement T2-M09-S03 — 6 August 2026

- One correction removed crop-sequence, soil, stubble, satellite, tractor, machinery and field-operation imagery. Exact headings and blank benefit fields plus one limitation magnifier repeat in every column.
- No local value, product, chemical, rate, timing, threshold, machinery, operation, preferred strategy or guaranteed benefit appears.
- Corrected original 1536 × 1024 PNG, 1,219,818 bytes, SHA-256 `8c585cd1aa38dca687b7c1777df7fc7c24ab1089a425cf028ca1f39ef0171a55`; full-size, desktop, 390 px and Open larger checks PASS.
- Seven theory replacements remain; `BLOCKED_NO_SOURCE` is unchanged.

## Theory replacement T2-M10-S02 — 6 August 2026

- A fresh Steve Cowell Pro conversation generated the four-criteria evidence map with no correction required.
- Exact central and criteria labels, four equal cards and four identical connectors appear without yields, prices, costs, gross margins, scores, diagnoses, current claims, risk levels, ranking, preferred system or completed recommendation.
- Original 1536 × 1024 PNG, 1,605,350 bytes, SHA-256 `930e4067c9c6b5730b65f9ca20c7c9577b71900d80e8701ae3a8bf2a36f17fe8`; full-size, desktop, 390 px and Open larger checks PASS.
- Six theory replacements remain; `BLOCKED_NO_SOURCE` is unchanged.

## Theory replacement 14.3 — 6 August 2026

- A fresh Steve Cowell Pro conversation produced two candidates; the more semantically suitable first candidate was selected. One permitted targeted correction then made all five labelled cards equal.
- The corrected original retained the exact five labels, central generic sheep, blank review clipboard and the observation-to-records arrow, but the three needs connectors merged into a shared line rather than remaining three identical direct connectors. Its labels were also not usefully readable at 390 px.
- Both exported candidates were quarantined. No asset or PASS manifest record was retained, and `14.3` remains in the generation queue.

## Theory replacement 15.2 — 6 August 2026

- A fresh Steve Cowell Pro conversation generated the blank five-stage risk-reasoning scaffold with no correction required.
- The retained original uses exactly `Task and context`, `Hazard`, `Possible consequence`, `Control category to confirm` and `Responsibility and review`, with five equal cards, identical right-facing arrows and the required blank or abstract pictograms.
- No real task, local hazard, risk level, risk matrix, score, approved control, PPE, equipment or chemical direction, animal-handling method, responsible person, signature, legal claim or completed assessment appears. Actual ratings, controls, responsibilities and approval remain Teacher to confirm.
- Original 1536 × 1024 PNG, 1,126,943 bytes, SHA-256 `03a2916f4003ea06cc88fc6e8268d248a1169ac50de2e3bb33d79e0cef1abd73`; full-size, desktop, 390 px and Open larger checks PASS.
- Five theory replacements remain: `14.3`, `15.3`, `T4-M16-S03`, `T4-M17-S01` and `T4-M20-S02`. The `BLOCKED_NO_SOURCE` finished-plan gate is unchanged.

## Final theory replacement 14.3 — 6 August 2026

- The parent-approved simplified replacement was generated in a fresh Steve Cowell Pro conversation. One targeted correction replaced equipment-like pictograms with abstract neutral symbols.
- The retained original has exactly five equal cards and the exact labels `Food and water`, `Shelter`, `Health care`, `Objective observation` and `Repeated records`, with no connectors, arrows, numbers or extra words.
- Original 1536 × 1024 PNG, 1,305,868 bytes, SHA-256 `a95a05ddb7418b9bf60c94d2d813a1a0da719ab43cefda438596aedeede2b8f3`; full-size, desktop, 390 px and Open larger checks PASS.
- Four theory replacements remain: `15.3`, `T4-M16-S03`, `T4-M17-S01` and `T4-M20-S02`. The `BLOCKED_NO_SOURCE` finished-plan gate is unchanged.

## Final theory replacement 15.3 — 6 August 2026

- A fresh Steve Cowell Pro conversation generated the two-panel business-evidence guide. One targeted correction removed currency, calculator, crop and mathematical symbols so the relationship appears in words only.
- The retained original states exactly `Income minus Variable costs equals Gross margin` and `not whole-farm profit`, beside a blank equal four-cell SWOT frame with the exact four headings.
- Original 1536 × 1024 PNG, 1,406,930 bytes, SHA-256 `33d0a65ae38601bb4b346eeab38e1d50355ff5e87cb5b4f29a480b472ccf99fc`; full-size, desktop, 390 px and Open larger checks PASS.
- Three theory replacements remain: `T4-M16-S03`, `T4-M17-S01` and `T4-M20-S02`. The `BLOCKED_NO_SOURCE` finished-plan gate is unchanged.

## Final theory replacement T4-M16-S03 — 6 August 2026

- A fresh Steve Cowell Pro conversation returned two candidates; the candidate with visually indistinguishable cattle silhouettes was selected without correction.
- Five equal stages and identical arrows preserve reasoning order from enterprise goal through breed tendencies and individual anatomy evidence to benefits, limitations and uncertainty. No breed trait, diagnosis, anatomy label, performance figure, animal selection or handling direction appears.
- Original 1536 × 1024 PNG, 1,205,850 bytes, SHA-256 `6b6a0d0f9da1db89d862b94cffdb28cf01911b40057fb796fd38c3ab6f394233`; full-size, desktop, 390 px and Open larger checks PASS.
- Two theory replacements remain: `T4-M17-S01` and `T4-M20-S02`. The `BLOCKED_NO_SOURCE` finished-plan gate is unchanged.

## Final theory replacement T4-M17-S01 — 6 August 2026

- A fresh Steve Cowell Pro conversation generated the three-card concept comparison. One targeted correction removed containers and every arrowhead, leaving abstract icons only.
- Exact headings and subtitles distinguish separation, pasteurisation and homogenisation without temperature, time, pressure, equipment, operating steps, hygiene instructions, brand, quality claim or practical procedure.
- Original 1536 × 1024 PNG, 1,268,100 bytes, SHA-256 `924f60b63763b9352c17cac1c3fbc8f9be46f7cf8d6f6aad1b4efcde539aff06`; full-size, desktop, 390 px and Open larger checks PASS.
- One theory replacement remains: `T4-M20-S02`. The `BLOCKED_NO_SOURCE` finished-plan gate is unchanged.

## Final theory replacement T4-M20-S02 — 6 August 2026

- A fresh Steve Cowell Pro conversation generated the technology-choice evidence map. One targeted correction removed ambiguous evidence-card pictograms and made all five surrounding cards equal.
- The retained original uses exactly `Technology choice`, `Intended function`, `Possible benefit`, `Limitation`, `Data quality` and `Farm context`, five identical thin inward connectors, and one unbranded generic sensor-and-record icon.
- No brand, named product, procedure, equipment setting, cost, performance value, diagnosis, treatment, recommendation, current availability claim, preferred technology or farm plan appears.
- Original 1536 × 1024 PNG, 1,117,258 bytes, SHA-256 `f66847a9b9e06469756484795d2f45c1deeceb07e1634c899dc5de2dea457ebd`; full-size, desktop, 390 px and Open larger checks PASS.
- The visual generation queue is empty. Final visual integration coverage is 74 records: 1 hero, 12 folio cards, 60 theory visuals and 1 pedigree guide. The separate `BLOCKED_NO_SOURCE` finished-plan gate remains unchanged.

## M13-S02 visual repetition correction

- The former M13-S02 source-slide copy was byte-identical to M13-S01 and was therefore removed from in-use theory placement but retained safely in quarantine; no source asset was deleted.
- The existing M13-S02 manifest record now references the approved fresh Steve Cowell Pro original at `assets/theory/m13-s02-production-cycle-links-source-slide.png`: 1536 x 1024, 1,527,203 bytes, SHA-256 `4f99649dd49a7db7d15f6c9f660f01c83a2a735d999307c9f457065ac97cb379`.
- Full-size, desktop, 390 px, Open larger, provenance, path, byte and hash checks pass. The final validator reports 74/74 PASS, with 60 distinct theory paths and 60 distinct theory SHA-256 hashes.
