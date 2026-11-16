# ALSKwela LS1 English — Android Offline Installation Fix (v1.1)

## What caused the problem?

The public GitHub repository contained only five root files: `.nojekyll`, `README_DEPLOYMENT.md`, `index.html`, `manifest.webmanifest`, and `sw.js`. Its `icons/` and `data/` subfolders were missing. The manifest required 192x192 and 512x512 icons, while the original service worker attempted to precache missing files with `cache.addAll()`, causing offline installation to fail.

## The easy fix: upload 5 files together at the ROOT of your GitHub repository

This updated package is **flat** — no subfolders are required. The full 120-item bank is already embedded in `index.html`, so a separate data JSON file is not necessary for the app to run offline.

**Upload these five files:**

- `index.html` — replace the existing version (same question bank + Android installation guidance).
- `manifest.webmanifest` — replace the existing manifest (icons now reference the root).
- `sw.js` — replace the existing service worker (v2 cache, only existing files).
- `icon-192.png` — NEW, upload to root.
- `icon-512.png` — NEW, upload to root.

The `.nojekyll` file is optional to upload if already in your repository. The Markdown instructions can be ignored when uploading. **Do not upload the ZIP itself as the website. Extract it first.**

Your GitHub root should have these files:

```text
alskwela-ls1-english-reviewer-jhs/
  index.html
  manifest.webmanifest
  sw.js
  icon-192.png
  icon-512.png
  .nojekyll
```

### Upload using GitHub website

1. Open https://github.com/rantimbol-hue/alskwela-ls1-english-reviewer-jhs
2. Select **Add file → Upload files**.
3. Drag the FIVE files above from the extracted folder into the upload area. Approve replacing same-named files if prompted.
4. Commit the changes to `main`. If GitHub does not let you overwrite files through the uploader, open each existing file, choose Edit, and paste the updated content, then upload the two icons. Or use GitHub Desktop to commit all files.
5. Open **Actions** or **Settings → Pages** to confirm deployment. The same existing public URL stays unchanged.

### Install on a learner’s Android phone

1. Connect to the internet. **Open the public URL directly in Chrome**, not inside Glide's Web Embed or an in-app webview.
2. Reload, then wait for **“Offline files saved successfully.”** The reviewer may also show **Install ALSKwela English** if Chrome sends an install event.
3. From Chrome's three-dot menu, choose **Install and create shortcut → Install**, **Add to Home screen → Install**, or the equivalent menu for the device. A Chrome shortcut alone can still work offline if the service worker has cached the files.
4. Turn **airplane mode ON**, close Chrome, open the Home Screen icon, start a 40-item practice session and view an explanation. Then export a PDF to confirm offline functionality.
5. If Chrome keeps serving the old version, close tabs and reload while connected, or remove the old shortcut/app and install again. Avoid clearing all site data before downloading any saved learner response report.

### Important

- The PWA works independently of Glide when offline; Glide itself may still require connectivity to display its portal.
- Chrome on Android with Google Play services usually installs the site as an app. Some devices and other browsers may only offer a browser shortcut.
- Internet is required for the first download, updates, and any online sharing of PDF reports. Offline PDFs can be saved to the device.
- For large-scale learner rollout, test the revised site on at least two Android models before distributing the link.
- This is a practice reviewer, not the official A&E examination.
