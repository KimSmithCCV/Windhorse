# Session Notes

## 2026-08-21 — Hero video (Error 153)

- The story video embed on `index.html` (line ~52) uses `youtube-nocookie.com/embed/4Y2YD2R9Rh8`. The markup and CSS (`styles.css` `.story-video-frame`) are correct — nothing wrong with the code.
- Error 153 ("Video player configuration error") shows up when the page is opened directly as a local file (`file://...`). YouTube's embedded player rejects `file://` because it has no valid origin/referrer. This is NOT a bug in the site.
- To preview the video locally, the page must be served over `http://`, not opened directly.
- This machine has **no Node.js and no Python installed**, so `npx http-server` and `python -m http.server` both fail. Fallback used: a small PowerShell script using `System.Net.HttpListener` to serve static files.
  - Script location (scratchpad, session-specific, gets cleaned up): serves the project root on `http://localhost:8080/`.
  - If a local server is needed again, either install Node/Python, or ask Claude to regenerate the PowerShell static file server.
- Once deployed to real hosting (Netlify, GitHub Pages, etc.), the video will work normally — Error 153 is specific to local `file://` previews.

## Open items
- None outstanding from this session.
