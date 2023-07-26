# web

## 3.2.3

### Patch Changes

- 35a6c0e: 40072c6: Add missing build args to deploy-web workflow

## 3.2.2

### Patch Changes

- 40072c6: Add missing env vars to Dockerfile

## 3.2.1

### Patch Changes

- a60acb3: Fixed wrong global property being used for Prisma

## 3.2.0

### Minor Changes

- ce3e7f3: Created web api endpoint to copy images from cms to web also implemented the functionality to dynamically resize images using url search params
- 96d3d29: Align card component styles with new designs
- 35e59d1: Update publication card items style and allow "Work in progress" items to link to their reflected document
- 763d5e9: Added the appropiate meta tags for blog articles
- 10b6fec: Added the possibility to share a blog article

### Patch Changes

- 75e10c2: Add margin between blog items and blog page text
- 77a8daf: Fix incorrect margins for article card cover image
- bba195d: Change article card layout in order to better wrap the date
- 55e7f27: Remove gap between navigation link items
- 7d06619: Increase container size on xl viewport
- ecdb46e: Fix cms images not resolving correctly
- 4f39acc: Increase method card size
- 66f14cd: Fix ordered and unordered lists not rendering correctly
- d7dde32: Decrease size of pill component
- 01531f7: Add margin between methods and method page text
- 856a0cb: Fix links in footer opening link in current tab rather than opening a new tab
- 3837ec7: Remove max-width from roadmap page and add margin between text and roadmap

## 3.1.0

### Minor Changes

- f798811: Allow all pages to have content managed trough the cms

### Patch Changes

- bdd3092: Lowered cache time for all pages to 5 minutes
- 5b7a602: Lowered cache time for all pages
- 4dac6ec: Fixed typography components always rendering as a p tag
- 6a7965b: Fixed links inside remote mdx pages not having the right styles applied

## 3.0.0

### Major Changes

- 74ff73d: Complete refactor of the web app

### Minor Changes

- b0b8fe6: Added the ability to display multiple years on the roadmap
- bffc4be: Created link component
- f473134: Added blog pages
- dff1877: Created CommonOverrideAbleComponent
- e84365a: Created work in progress variant for publications and refactored the disabled variant to the unavailable variant

### Patch Changes

- 81c749b: Lowered cache times for pages that rely on content from the cms
- e801c59: Removed disabled prop from Card component
- 72a0127: Fixed typography on roadmap page

## 2.1.0

### Minor Changes

- 861dc9c: Created breadcrumbs component
- cce700c: Created Chip component
- 8e66436: Added the possibility to filter by tag on methods page

### Patch Changes

- 16b5e11: Implemented correct container sizes and breakpoints
- adda394: Upgraded NextJs 13.4.3 > 14.4.5

## 2.0.4

### Patch Changes

- b615eb2: Disabled standalone build

## 2.0.3

### Patch Changes

- 653b4e3: Fixed content from cms containing tables not rendering properly

## 2.0.2

### Patch Changes

- 540a973: Fixed dynamic data being cached. Caching caused cms changes not to be reflected on the website unless a fresh build was deployed
- 4cdd9b7: Fixed dynamic data being cached on the methods page.

## 2.0.1

### Patch Changes

- ecc0e53: Fixed publications not rendering, this issue is happened because NextJs doesn't server static files that weren't present during the build phase, thus an api route was created to dynamically handle static file requests

## 2.0.0

### Major Changes

- 083f85f: Upgraded the project to use the NextJs app router
  Removed ui library MUI

## 1.24.0

### Minor Changes

- da4e699: Refactored the roadmap page from Mui to Tailwind

## 1.23.0

### Minor Changes

- a3c7f2b: Created Tailwind navbar component
- f2a06c7: Added tag property to `methode` content-type
  Sorted methods on method page by title
  Created Tailwind typography component
  Created Tailwind chip component
  Created Tailwind button component
  Refactored methoden page from MUI to Tailwind

## 1.22.0

### Minor Changes

- 9dd254a: Created Tailwind footer component
- a4feb7a: Created Tailwind notification component

## 1.21.1

### Patch Changes

- 89fd7c6: Fixed typography not displaying properly on cms pages

## 1.21.0

### Minor Changes

- 002220a: - Created publication page
  - Created publication card component
  - Created Tailwind card component
  - Installed dependencies: clsx, @storybook/addon-styling

## 1.20.1

### Patch Changes

- c637e82: Hoisting has been disabled throughout the entire repo now, in order work with this the Dockerfile has been updated

  Following dependency maintenance has been done, this has been done to facilitate for the migration to the NextJs approuter

  - Removed the following dependencies: @next/font
  - Installed the following dependencies: tailwindcss, postcss, autoprefixer
  - Upgraded the following dependencies: next, @types/react, @types/react-dom, typescript, eslint-config-next, eslint, @types/node

## 1.20.0

### Minor Changes

- cf4c948: Removed all [Mui SvgIcons](https://mui.com/material-ui/api/svg-icon/) in favor of [Tabler](https://tabler-icons.io/) icons
