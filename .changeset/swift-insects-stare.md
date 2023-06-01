---
'web': patch
---

Fixed publications not rendering, this issue is happened because NextJs doesn't server static files that weren't present during the build phase, thus an api route was created to dynamically handle static file requests
