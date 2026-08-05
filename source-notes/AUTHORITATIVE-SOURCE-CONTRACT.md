# TASK 18A — Year 10 Agriculture 2026 source contract

Status: **source audit complete; integration blocked pending listed confirmations**  
Scope: Google Drive root `1lOzIMbZwxfvkFmqR4I6UWH8K4lSq-wan`, restricted to its `/2026` subtree.  
Repository/site: **none supplied or inspected; no repository edits, Git actions or publication performed.**

## Contract record

| Field | Required record |
|---|---|
| Course and year | Wagga Wagga High School Year 10 Stage 5 Agriculture, 2026. Four term modules: Agricultural Systems & Management; Pastures & Cropping; Prime Lamb Production; Dairy Farming. |
| Authoritative sources | First: supplied 2026 Drive scope/sequence, assessment schedule, formal notifications/tasks and four programmes. Second: applicable NESA Agricultural Technology 7–10 Syllabus (2019). The published Agriculture Technology 7–10 Syllabus (2024) is planning-only for this contract unless the school confirms early implementation. |
| Outcomes | 2019 `AG5-1` to `AG5-14`; exact wording and programme/task map in `OUTCOME-MAP.md`. |
| Assessment authority | Supplied Year 10 Assessment Schedule 2026 plus task notifications and task/rubric files. Conflicts are unresolved rather than averaged or guessed. A separate school-wide 2026 schedule was not needed because the current course-specific schedule was supplied. |
| Formal tasks | Task 1 Topic Test, T1W10, 25%; Task 2 Plant Collection + Research Task, T2W9, 35%; Task 3 Prime Lamb Production Report + Handling Skills, T3W9, 40%. Exact issue weeks, marks, outcomes, evidence and conflicts in `ASSESSMENT-METADATA.md`. |
| Additional class tests | No additional formal or informal class test was identified outside Task 1. **Teacher to confirm** whether programme-listed formative tests (for example tractor theory/driving safety) are used in 2026 and whether they are unweighted. |
| Evidence | Supplied lesson activities include written responses, diagrams, tables, plant photographs/collection data, research, graphs, market survey, marketing/value-adding products, pasture/soil/crop analysis, sheep/dairy anatomy and production work, risk assessment prompts and practical participation. Formal evidence is defined in the assessment table. |
| Project constraints | Practical experiences and live plant/animal work must use current school WHS, risk-management, animal-welfare, supervision, equipment and adjustment procedures. The Drive programmes identify intended activities but are not sufficient local procedure authority. |
| Sister-site standard | No sister site was in scope. Any later guided-course integration should use sister sites only for interaction/design patterns, never to fill Agriculture content or local procedure gaps. |
| Exclusions | Do not import Year 9, 2025, 2024 or 2023 material without a new source decision. Do not replace 2026 `AG5-*` codes with `AGT5-*` codes without confirmed early implementation. Do not invent dates, Classroom links, videos, practical procedures, equipment settings, farm layouts or animal-handling rules. |
| Release checks | Before any build/release: resolve programme/resource mismatches; resolve task-title/outcome conflicts; provide Classroom routes; confirm hour model and practical authority; validate current external links/data; visually QA source-dependent figures/rubrics; test student evidence persistence/print/export/mobile if a site is later built. |

## Source inventory result

- 114 unique Drive IDs: 11 folders and 103 files.
- 103/103 file contents inspected: 53 DOCX, 41 PPTX, 6 Google Docs and 3 Google Forms.
- The three Forms required read-only browser inspection because the Drive connector could only list them. All are published receipt forms with first name, last name and a Yes/No question asking whether the student received the task on Google Classroom.
- Complete path/ID/MIME/size/modified-time inventory: `YEAR-10-2026-DRIVE-INVENTORY.csv`.
- Exact 40-week programme/resource reconciliation: `MODULE-LESSON-MAP.md`.

## Exact module contract

| Module | Term | Programme duration | Programme-header outcomes | Source lesson package |
|---|---|---|---|---|
| Agricultural Systems & Management | Term 1 | 8–10 weeks | AG5-1, AG5-2, AG5-3, AG5-4, AG5-5, AG5-11, AG5-13, AG5-14 | Programme defines 10 weeks; numbered theory/activity packages exist for lessons 1–9 only, plus a topic-test summary. |
| Pastures & Cropping | Term 2 | 8–10 weeks | AG5-6, AG5-8, AG5-9, AG5-12, AG5-13, AG5-14 | Ten numbered theory/activity packages; answer copy for lesson 1. Programme titles diverge from numbered resources at lessons 8–10. |
| Prime Lamb Production | Term 3 | 8–10 weeks | AG5-1, AG5-2, AG5-3, AG5-4, AG5-13, AG5-14 | Ten numbered theory/activity packages; answer copy for lesson 4. Programme/resource sequence diverges at lessons 3–4. |
| Dairy Farming | Term 4 | 8–10 weeks | AG5-1, AG5-3, AG5-4, AG5-5, AG5-7, AG5-14 | Ten numbered theory/activity packages. Several programme/resource titles differ but generally describe the same scope; verify before renaming. |

## Source gaps and decisions required

### Release blockers

1. **Agricultural Systems lesson sequence:** programme Week 3 is Integrated Pest Management, Week 4 Australian Livestock Data, Week 5 Careers, Week 10 WHS; numbered resources are Week 3 microorganisms/invertebrates, Week 4 IPM, Week 5 Livestock & Data Trends, and no Week 10 pair. **Teacher to confirm the controlling sequence and supply/authorise missing Careers and WHS lesson resources.**
2. **Pastures & Cropping sequence:** programme Week 8–10 titles (Propagation Techniques; WHS & Hazard Identification; Short vs Long-Term Effects on Sustainability) do not match numbered lesson 8–10 resources (Weed/Pest/Disease; Sustainability & Environmental Management; Evaluation & Careers). **Teacher to confirm.**
3. **Prime Lamb sequence:** programme Week 3–4 titles (EBVs/intro nutrition; sheep nutrition/feed requirements) do not match numbered lesson 3–4 titles (Sheep Nutrition; Pasture Sampling/Feed Availability). **Teacher to confirm.**
4. **Assessment conflicts:** Task 2 is named “Plant Density Trial + Report” in the scope/sequence but “Plant Collection + Research Task” elsewhere; AG5-14 is missing from the Task 2 schedule row; AG5-3 is missing from the Task 3 schedule row; Task 3 misquotes AG5-14 as plant rather than plant and/or animal management.
5. **Practical authority:** no current local risk assessments, stock-handling procedure, cattle procedure, chemical inventory/SDS register, equipment instructions, supervision/adjustment plan or animal-welfare protocol was supplied. These are required before converting programme prompts into student instructions.
6. **Submission access:** all task and notification documents still contain `INSERT CODE` for Google Classroom. Exact private routes and ownership are **Teacher to confirm**.
7. **Course model:** whether this is the second year of a 100-hour or 200-hour Stage 5 course is not established within the Year 10/2026 subtree. Year 9 was intentionally not inspected. Confirm the hour model and cumulative enterprise/outcome coverage before claiming syllabus compliance.

### Upgrade required before student-facing use

- Several activities depend on unnamed or unlinked media: “Bee video 1/2/3”, “ProWay video”, generic reproductive-anatomy/bull-handling videos and other “watch the video” prompts. Supply exact validated URLs or remove the dependency.
- Historical datasets are legitimate only when labelled as historical: Dairy Australia/NSW DPI 2018–2019 data, ABS September 2023 data and the Topic Test’s September 2021–September 2023 graph. Do not present them as current 2026 facts; verify links and preserve the assessed dataset where the task depends on it.
- CareerHarvest, Genstock, NSW DPI and ABS links require live validation before release. Content extracted from a slide/activity is teaching intent, not independent factual authority.
- The Topic Test includes a graph image/data dependency and the practical tasks include image/rubric layouts. Visually inspect the original files before rebuilding those components; text extraction alone must not be used to recreate unseen figures.
- Programme text contains template duplication and some title/header inconsistencies. Preserve meaning, but do not reproduce duplicate headings or silently rewrite programme authority.

## Evidence boundaries for a later guided course

- A viewed slide, tick box or quiz score alone is not sufficient evidence.
- Each lesson should capture the actual source task: labelled diagrams, completed tables, calculations/graphs, source records, comparisons, explanations, justified choices, practical logs or reflections as applicable.
- Browser-local autosave is device-local practice, not submission. Formal submission remains the teacher-confirmed private Classroom route.
- Practical evidence must allow safe alternatives/adjustments and cannot require live animal handling without teacher-controlled supervision and procedures.
- Task 1 answers and marking guidance must remain protected from public student routes.

## Change record

| Date | Source | Reason | Affected outcome/evidence | Test/result |
|---|---|---|---|---|
| 2026-08-05 | Supplied Drive `/2026` subtree | Establish source contract without repository changes | All modules, lessons and formal tasks | 114 unique IDs listed; all 103 file contents inspected; Forms verified read-only in browser |
| 2026-08-05 | NESA official syllabus pages | Confirm 2026 applicable syllabus | Outcome framework | 2019 syllabus retained; 2024 syllabus recorded as 2027 implementation/planning-only unless early adoption is confirmed |

