# web

## 3.29.0

### Minor Changes

- 9ed12ea: Added event report page

## 3.28.0

### Minor Changes

- cea94ff: Updated method navigation on `methoden` page

## 3.27.0

### Minor Changes

- fbe2199: Added `waardelijsten` page

## 3.26.1

### Patch Changes

- 678cb68: Fixed dangling indicator-triangle in navbar after navigating (Firefox)

## 3.26.0

### Minor Changes

- a365852: Pill component now supports startIcon
- f7deb37: Added demo register and register detail page
- c7093f9: Restyled links to make them more noticeable

## 3.25.2

### Patch Changes

- 34881de: Typo and re-ordering cards

## 3.25.1

### Patch Changes

- 840b599: specified Turbo version in Dockerfile

## 3.25.0

### Minor Changes

- e9f4011: Added levensgebeurtenissen CIVI AFS publication

## 3.24.1

### Patch Changes

- f056754: fixed chromium related issue on publication pdf pages

## 3.24.0

### Minor Changes

- 7ca7dbb: Added pdf routes for publications

## 3.23.0

### Minor Changes

- b3d3c88: Open navbar items set as `openInNewTab` in a new tab

## 3.22.0

### Minor Changes

- 0df87b8: Added Algoritmes Publicatiestandaard in ReSpec format

## 3.21.0

### Minor Changes

- 160a6fa: Added JAS Annotatie Tool to the Lab

## 3.20.3

### Patch Changes

- 277eb8b: Correct wrong tagged publications

## 3.20.2

### Patch Changes

- ebe700b: Fixed submenus not showing when there is a cover image on the page
- 15ee557: Fixed breadcrumbs not rendering properly when parent of node isn't present

## 3.20.1

### Patch Changes

- 4bf1c6b: Remove `console.log` statements
- ce3c394: Added missing cache revalidation option

## 3.20.0

### Minor Changes

- 76667e6: Added submenu navigation
- f1a2cde: Refactored breadcrumb component to comply with new navigation structure

## 3.19.4

### Patch Changes

- 1643c0e: Fix publication link
- 61f6ad8: Refactor disclaimer in footer

## 3.19.3

### Patch Changes

- f45a8a4: Fixed navigation bugs on both mobile and desktop platforms and enhanced accessibility.

## 3.19.2

### Patch Changes

- 570c0d3: Fixed fetching media resulting in wrong results for blog and agenda images

## 3.19.1

### Patch Changes

- f6bb8ae: Fix url Wetsanalyse publicatie

## 3.19.0

### Minor Changes

- fb5cc3f: Added publication juridisch analyse schema

## 3.18.0

### Minor Changes

- dc14b07: Added agenda pages

## 3.17.0

### Minor Changes

- 2779539: Implemented `MethodNavigation` on `LabItemCard`

### Patch Changes

- 3950aee: Added security headers

## 3.16.0

### Minor Changes

- 98823b2: Added tree navigation for easier navigiation between method <-> docs <-> lab

## 3.15.1

### Patch Changes

- 9db552f: Fixed not being able to share blog articles
- 64b5087: Fixed social image not showing on blog article page
- 26a5b0a: Fixed blog article page reporting missing page

## 3.15.0

### Minor Changes

- 529cfb2: Added beta to navbar

## 3.14.0

### Minor Changes

- 2a454c5: Added lab item Legal Annotation Tool

### Patch Changes

- 2a454c5: Added docs for lab items Legal Annotation Tool

## 3.13.1

### Patch Changes

- c2a4adc: Downgrade remark-gfm to v3.x.x, v4.x.x was causing an issue on the blog article page where articles containing tables would crash the page.
- 898109e: Use startsWith instead of includes when resolving active navbar item

## 3.13.0

### Minor Changes

- 6403bb5: External tab navigation for publications

## 3.12.2

### Patch Changes

- 7c51204: Fix all publications showing a 404 page

## 3.12.1

### Patch Changes

- 2439276: Increase font size for paragraph components

## 3.12.0

### Minor Changes

- c75942b: Reworked the following components to integrate [cva](https://beta.cva.style/):

  - typography
  - container
  - pill
  - notification
  - chip
  - button

- c75942b: Added stories for the following components:

  - typography
  - pill
  - notification
  - chip
  - button

### Patch Changes

- 681c44f: Update Apache Jena Fuseki demo URL in lab page

## 3.11.0

### Minor Changes

- 6dbe1e2: Updated colofon info

## 3.10.0

### Minor Changes

- 3a3c381: Enable Apache Jena Fuseki demo in lab page

## 3.9.1

### Patch Changes

- 8b2e6e6: Introduced user check items & updated roadmap 2024 accordingly

## 3.9.0

### Minor Changes

- b6ca28a: Added lab page

### Patch Changes

- e1b1cdb: Fixed broken Dockerfile
- 21dbcc9: Refactored OverrideAbleComponentFunctionComponent into a type augment

## 3.8.0

### Minor Changes

- d1b7528: Added Avola specification page
- 515d04a: Added feature to hide pages from the navbar

### Patch Changes

- e80254b: Fixed incorrect drizzle config

## 3.7.2

### Patch Changes

- ec6e39f: Updated legitimaat url with new publication (moved from open-regels.nl)

## 3.7.1

### Patch Changes

- 88814fb: 404 page not showing when navigating to a publication that doesn't exist

## 3.7.0

### Minor Changes

- 900c63f: Published dcat-ap-ronl ReSpec on regels.overheid.nl

### Patch Changes

- ab1f5e5: Remove empty links from footer

## 3.6.0

### Minor Changes

- 4008318: Facilitate backend for Open Catalogi via applicable github actions

## 3.5.0

### Minor Changes

- 965a68a: Updated rescheduled roadmap items for '23 & '24

## 3.4.0

### Minor Changes

- c270ea4: Added WetsTaal Handreiking

### Patch Changes

- c08a3be: Fixed TLS/SSL connectivity issues when connecting to the database

## 3.3.1

### Patch Changes

- 68b6e63: Set rejectUnauthorized to false in production

## 3.3.0

### Minor Changes

- cc1cdcd: Swap Prisma for Drizzle

### Patch Changes

- cf1540f: Fix method card text overflow on methods page

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
