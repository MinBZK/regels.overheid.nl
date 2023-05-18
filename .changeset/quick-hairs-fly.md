---
'web': patch
---

Hoisting has been disabled throughout the entire repo now, in order work with this the Dockerfile has been updated

Following dependency maintenance has been done, this has been done to facilitate for the migration to the NextJs approuter

- Removed the following dependencies: @next/font
- Installed the following dependencies: tailwindcss, postcss, autoprefixer
- Upgraded the following dependencies: next, @types/react, @types/react-dom
