# ALSKwela A&E 2027 — JHS LS1 English Offline Reviewer

**Release:** v1.0-draft, 16 November 2026  
**Purpose:** practice reviewer, NOT a DepEd/BEA official examination or validated equivalent.

## Included files

- `index.html` — complete, self-contained mobile-friendly reviewer and all 120 questions, including professional Taglish explanations, answer feedback and offline PDF generation.
- `sw.js` — service worker that stores the reviewer in browser cache for offline launches after a successful first online visit.
- `manifest.webmanifest` — Home Screen app metadata.
- `icons/` — installable app icons.
- `data/question_bank_120.json` — optional editable master data snapshot; the app already embeds this data in `index.html`.
- `.nojekyll` — permits simple static deployment through GitHub Pages.

**Also supplied separately:** `ALSKwela_LS1_English_Offline_Standalone.html` for direct opening as a single HTML file where a phone browser permits it; the PWA is more dependable on mobile.

## How to publish with GitHub Pages

1. Create a GitHub repository (example name: `alskwela-ls1-english-reviewer`). If using a free personal GitHub account for GitHub Pages, use a public repository. The practice items and answer keys will therefore be publicly accessible; do not put student personal data in the repository.
2. **Extract the ZIP and upload its contents** to the repository root. Do not upload only the ZIP file. The file `index.html` must appear at the top level of the repository.
3. On the GitHub repository, go to **Settings → Pages → Build and deployment**. Set **Source: Deploy from a branch**, branch **main**, folder **/(root)**, and save.
4. Find the published HTTPS link shown under **Settings → Pages**. It typically looks like `https://USERNAME.github.io/alskwela-ls1-english-reviewer/`. Do not treat this example as a real hosted URL.
5. Open the actual HTTPS link in a phone browser while online and verify that the reviewer displays “Offline files saved in browser cache” on the home page. Then follow the install instructions below.

## Connect the reviewer from ALSKwela (Glide)

1. Add an **A&E 2027 → LS1 English** lesson/reviewer screen or card.
2. Put the published HTTPS PWA URL in a URL field or the button’s URL property.
3. Configure the button action to **Open Link**. Label it **Open LS1 English A&E Reviewer**.
4. Encourage students to open the link **in their normal browser** (Chrome on Android or Safari on iPhone), not only in an embedded Glide Web Embed/in-app frame. Home Screen installation and separate offline launch are more reliable from the regular browser.
5. After learners install the reviewer, they can launch it directly from the Home Screen **without launching Glide or using the internet**.

**Important:** The offline reviewer is independent of Glide. Results are stored on the learner's device and are **not** automatically synced to Glide or a teacher dashboard. Learners can download a PDF copy and share it with their teacher by their chosen channel.

## Learner instructions — Android

1. Connect to the internet and open the published reviewer URL in **Chrome**.
2. Wait for the message indicating offline files are cached.
3. From the browser menu choose **Install app** or **Add to Home screen** (exact wording varies).
4. Open the installed **ALSKwela English** icon at least once while online.
5. Test with airplane mode: launch the icon, start a 40-item trial, submit an answer, and confirm that the explanation works.

## Learner instructions — iPhone

1. Open the published reviewer URL **in Safari** while online.
2. Use the Share menu, choose **Add to Home Screen**, and keep **Open as Web App** enabled if offered.
3. Launch the new Home Screen icon once while online and check the offline status.
4. Test in airplane mode by reopening the Home Screen icon.

Some platforms may remove browser cache during storage cleanup; if offline launch fails, reconnect and open the hosted reviewer while online again. The initial PWA install requires HTTPS; opening a local HTML file does not install a service worker.

## How the reviewer works

- 120 original, draft questions: 40 in each of Sets A, B and C.
- Balanced Random mode selects 40 from the **entire 120-item pool**, with full curriculum LC coverage and the per-trial 12 Easy / 20 Moderate / 8 Challenging target.
- Learners can select fixed Set A, B or C instead; questions are still presented in a shuffled order.
- Options A–D are shuffled for each attempt while answer-key matching uses the actual correct text.
- After choosing and submitting, the correct/incorrect feedback and Taglish explanation are displayed. A learner may then proceed to the next question.
- The current session and responses are saved locally and can be resumed after closing/reopening the reviewer (subject to browser storage being available).
- At the end, the app displays the score, Literary/Informational/Transactional breakdown, item review, and a **Download PDF** button. The report includes question context, question, the learner’s selected answer, the correct answer, and optionally all Taglish explanations.
- For browsers that block direct file downloading, the **Print / Save as PDF** backup can be used.
- A **Clear saved practice data** option is available on the home page for shared devices.

## Limitations and QA requirements

1. The bank is **first draft**, aligned to the uploaded Revised ALS JHS English CG, and requires teacher content review, piloting, and item analysis. These are NOT actual, official or confidential 2027 A&E questions.
2. This browser app is an *open reviewer*, not a secure assessment. Questions and answer keys exist on the learner's device; it should not be used as a high-stakes or proctored certification exam.
3. There is **no automatic server-side grading, authentication, teacher analytics, cloud syncing, or remote progress tracking** in this version.
4. PDF generation runs entirely locally. Some iOS versions/browsers may direct a generated PDF to the downloads manager or file-sharing UI rather than automatically placing it in Files.
5. Before publishing updates, change the cache version string in `sw.js` and replace `index.html`, so installed devices can fetch the new question bank on an online visit.
6. To support learners with limited literacy or accessibility needs, conduct real-device testing on typical Android phones and an iPhone before large-scale deployment.
7. Student names are optional; teachers can instruct learners to use a **learner code** instead. Do not ask learners to enter government ID numbers or other sensitive identifiers in this offline practice app.

## Pilot verification checklist

- [ ] Published HTTPS link opens from ALSKwela.
- [ ] Android Home Screen install completed and loads in airplane mode.
- [ ] iPhone Home Screen install completed and loads in airplane mode.
- [ ] Random 40 draws without repeated question IDs within the same trial.
- [ ] Explanations remain correct when answer option letters are shuffled.
- [ ] Progress resumes after closing/reopening the installed app.
- [ ] Local PDF downloads and opens; selected answer, correct answer and explanation are accurate.
- [ ] Content reviewer approves bank before learners receive the link.
