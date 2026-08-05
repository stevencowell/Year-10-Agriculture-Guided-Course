# TASK 18D — destination and benchmark handoff

Validation date: **2026-08-05 (Australia/Sydney)**  
Change state: **discovery and planning only; no repository edits, commits, pushes or publication**

## Recommendation

| Workstream | Owner | Canonical destination |
|---|---|---|
| Year 10 Agriculture course | New repository already recorded by the parent preflight: `stevencowell/Year-10-Agriculture-Guided-Course` | `https://stevencowell.github.io/Year-10-Agriculture-Guided-Course/` |
| Year 10 Agriculture YouTube learning | The new Year 10 Agriculture course repository | `youtube-library/video-library.html`; eventual live route `https://stevencowell.github.io/Year-10-Agriculture-Guided-Course/youtube-library/video-library.html` |
| Year 10 Agriculture Busy Work | Existing shared repository `stevencowell/busy-worksheets` | Hub `index.html?library=agriculture-year-10`; activity `activity.html?library=agriculture-year-10&id=<activity-id>`; evidence `evidence.html?library=agriculture-year-10` |
| Downstream discovery link | `stevencowell/Main-Page`, Agriculture section, link-only after the target is live | `https://stevencowell.github.io/busy-worksheets/?library=agriculture-year-10` and the new Year 10 course card |

The Busy Work owner is not the new course repository. Current GitHub discovery found the active dedicated `stevencowell/busy-worksheets` repository, and current Main Page navigation links Timber, Metal, Engineering, Construction and Manufacturing directly into that shared filtered hub. The new course should link out to the shared Year 10 library and the shared library should link back to the Year 10 course home.

The `agriculture-year-10` key is deliberate. A separate local-only Year 8 Agriculture proposal under `task-15-agriculture-busy-worksheets` already reserves `library=agriculture`, storage key `busy-worksheets:agriculture:v2` and a Year 8 course-home link. Reusing `agriculture` for Year 10 would collide with its storage, navigation and evidence identity. Recommended Year 10 storage key: `busy-worksheets:agriculture-year-10:v1`.

## Current repository evidence

| Repository | Inspected HEAD | Relevant evidence | Working tree touched by TASK 18D? |
|---|---|---|---|
| `stevencowell/busy-worksheets` | `30feb931122890cb646451991076a9c1aeadcf6f` | Dedicated multi-library implementation and canonical route grammar | No |
| `stevencowell/Main-Page` | `2a22513586ffc09ce3aca90771898c67d8bab480` | Global Busy Worksheets link plus filtered subject links; Agriculture section presently contains only Year 8 Agriculture | No |
| `stevencowell/Year-8-Agriculture-Guided-Course` | `d70cc72c1bd1eab674e7462b90efc32a21a0b9e9` | Subject-family benchmark; no Year 10 destination | No |

GitHub active-repository discovery (`user:stevencowell archived:false`) found no current `Year-10-Agriculture-Guided-Course` repository. The exact live course and YouTube URLs above are therefore approved design destinations from the parent preflight, not current pages.

## Authorised subject boundary used

The supplied Year 10 Drive root resolved to `2026` → `Teaching and Learning Programs` → four folders:

| Folder | Direct files | Taught sequence recovered from filenames |
|---|---:|---|
| Agricultural Systems & Management | 22 | Agriculture in Australia; Interesting Industries; beneficial/harmful microorganisms and invertebrates; Integrated Pest Management; livestock/data trends; marketing strategies; marketing survey; value-adding; alternative production systems |
| Pastures & Cropping | 22 | Plant anatomy/performance; agricultural plant identification; soil health; agricultural technology; pasture deterioration; finance; crop monitoring; weed/pest/disease management; sustainability/environmental management; evaluation/careers |
| Prime Lamb Production | 22 | Breeding systems; reproductive technologies; nutrition; pasture sampling/feed availability; management calendar; technology; genetic engineering/ethics; welfare/husbandry; WHS/risk; business/profitability |
| Dairy Farming | 21 | Breeds; cow anatomy; milk processing/marketing; Australian industry/deregulation; female reproduction; hormones/oestrous cycle; male reproduction; mammary system; production cycle/emerging technologies; careers |

Total: **87 direct files**. Topic names, not unsupported facts within the files, control this TASK 18D plan. Any exact datasets, animal procedures, financial assumptions, reproductive procedures, welfare requirements or risk controls remain source-extraction dependencies for implementation.

## Busy Worksheets benchmark inventory

The current shared site has five active 18-activity libraries. Timber remains unchanged and is the original interaction benchmark. The current renderer supports:

- choice, short answer, number and guided written response;
- matching and ordered matching;
- comparison matrices and image-supported identification;
- crossword and word find;
- card sorting, capacity/layout optimisation and diagram labelling;
- ordered flow builders and branching decision routes;
- graph and table interpretation/calculation;
- evidence selection; and
- multi-part activities combining an auto-checked mechanic with written evidence.

Shared evidence behaviour: unique browser-local storage keys, immediate feedback, completion state, progress/reward display, per-activity print, combined evidence view, Back/Next/hub navigation and a course-home link. Browser storage is device-local practice, not cloud submission.

Timber itself contains 18 activities and uses ten question types across safety, tools/processes, timber knowledge and design/reflection. The four newer subject libraries extend this with authentic route, sort, label, flow, graph, table, layout and evidence-selection mechanics. The implementation plan must reuse the framework and interaction quality only—never Timber content or a repeated generic quiz shell.

## Integration gates and blockers

1. **Repository absent:** the Year 10 course/YouTube owner does not yet exist on GitHub. Build locally in the parent workspace until repository creation is completed under the parent’s authority.
2. **Library-key collision:** Year 8 has an unpublished `agriculture` Busy Work proposal. Keep Year 10 as `agriculture-year-10`; do not overwrite the Year 8 plan or storage key.
3. **Activity count:** this handoff recommends 24 activities because four substantial ten-topic sequences need balanced coverage. The count is not inherited from the 18-item benchmark and should be recorded in the build contract before implementation.
4. **Source extraction:** filenames prove the taught topics, not detailed content. Implementation must trace each prompt, answer and feedback statement to the authorised file content or mark it `Teacher to confirm`.
5. **Release order:** publish/verify the Busy Work target before adding the Main Page filtered link; publish/verify the course YouTube route before exposing it in Main Page or course navigation.

