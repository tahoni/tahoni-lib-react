# Leoni Lubbinge's React library

## Change Log

### Table of Contents

- [Version 3.4.2](#version-342---_2026-09-03_)
- [Version 3.4.1](#version-341---_2026-09-03_)
- [Version 3.4.0](#version-340---_2026-09-03_)
- [Version 3.3.3](#version-333---_2026-08-26_)
- [Version 3.3.2](#version-332---_2026-08-26_)
- [Version 3.3.1](#version-331---_2026-04-01_)
- [Version 3.3.0](#version-330---_2026-01-20_)
- [Version 3.2.4](#version-324---_2025-02-23_)
- [Version 3.2.3](#version-323---_2025-02-15_)
- [Version 3.2.2](#version-322---_2025-02-07_)
- [Version 3.2.1](#version-321---_2025-01-15_)
- [Version 3.2.0](#version-320---_2025-01-14_)

### [Version 3.4.2](https://github.com/tahoni/template-react/releases/tag/version-3.4.2) - _2026-09-03_

Patch release that fixes a `CoverSlider` rendering bug and moves its slick stylesheet imports
into the component itself. This release is backwards-compatible with 3.4.1.

#### Highlights

- Styling: Moved the `slick-carousel` base and theme stylesheet imports from the example app
  into `CoverSlider`'s own stylesheet, so consumers of the component get correct slick styling
  automatically without needing to import `slick-carousel` themselves.

#### Notable fixes

- CoverSlider: Fixed a bug where the component's slide list was held in a `useRef` and read
  during render, which could cause `CoverSlider` not to update as expected and violated the
  Rules of React. The slide list is now derived directly from props on each render instead.

#### Security

- No security-related changes in this release.

#### Compatibility & Migration

- No breaking changes for consumers of the published package. Consumers can upgrade from `3.4.1`
  to `3.4.2` without code changes.
- Consumers who were manually importing `slick-carousel/slick/slick` and
  `slick-carousel/slick/slick-theme` themselves to style `CoverSlider` can remove those imports,
  as `CoverSlider` now includes them automatically.

#### How to upgrade

Using npm:

```
npm install tahoni-lib-react@3.4.2
```

Using yarn:

```
yarn add tahoni-lib-react@3.4.2
```

#### Full changelog

See `CHANGELOG.md` for a complete list of commits and PRs included in this release.

#### Changes by

@tahoni

### [Version 3.4.1](https://github.com/tahoni/template-react/releases/tag/version-3.4.1) - _2026-09-03_

Patch release that adds a missing dependency needed by the `CoverSlider` example styling. This
release is backwards-compatible with 3.4.0 and contains no component or runtime behaviour
changes.

#### Highlights

- Dependencies: Added `slick-carousel` as a dependency, providing the base and theme
  stylesheets (`slick-carousel/slick/slick` and `slick-carousel/slick/slick-theme`) that the
  `CoverSlider` component's styling is built on.

#### Notable fixes

- Fixed a missing dependency that could cause Sass compilation to fail when resolving the
  `slick-carousel` stylesheet imports used alongside `CoverSlider`.

#### Security

- No security-related changes in this release.

#### Compatibility & Migration

- No breaking changes for consumers of the published package. Consumers can upgrade from `3.4.0`
  to `3.4.1` without code changes.
- `slick-carousel` declares a peer dependency on `jquery`; only its stylesheets are used by this
  package, so consumers who do not otherwise use `slick-carousel`'s JavaScript do not need to
  install `jquery`.

#### How to upgrade

Using npm:

```
npm install tahoni-lib-react@3.4.1
```

Using yarn:

```
yarn add tahoni-lib-react@3.4.1
```

#### Full changelog

See `CHANGELOG.md` for a complete list of commits and PRs included in this release.

#### Changes by

@tahoni

### [Version 3.4.0](https://github.com/tahoni/template-react/releases/tag/version-3.4.0) - _2026-09-03_

Feature release that adds two new components, `Cover` and `CoverSlider`, for building hero-style
image covers with optional text overlays and carousels. This release is backwards-compatible
with 3.3.3.

#### Highlights

- New component `Cover`: Renders a full-width image with an optional gradient overlay and
  centred heading text, driven by a new `CoverSlideObject` model.
- New component `CoverSlider`: Wraps one or more `Cover` slides in a carousel, built on top of
  `react-slick`, with configurable autoplay and infinite-loop behaviour.
- Dependencies: Added `react-slick` and its `@types/react-slick` type definitions as
  dependencies to power the new `CoverSlider` component. Both new components continue to rely on
  the existing `react-bootstrap`/`bootstrap` peer dependencies — no new peer dependencies were
  introduced.

#### Notable fixes

- None. This release only adds new components — see "Highlights" above for the full scope of
  changes.

#### Security

- No security-related changes in this release.

#### Compatibility & Migration

- No breaking changes for consumers of the published package. Consumers can upgrade from `3.3.3`
  to `3.4.0` without code changes.
- Consumers who want to use `CoverSlider` must have `react-slick`'s stylesheets available (as
  with any other `react-slick` consumer); `Cover` and `CoverSlider` both require the existing
  `react-bootstrap`/`bootstrap` peer dependencies to already be installed.

#### How to upgrade

Using npm:

```
npm install tahoni-lib-react@3.4.0
```

Using yarn:

```
yarn add tahoni-lib-react@3.4.0
```

#### Full changelog

See `CHANGELOG.md` for a complete list of commits and PRs included in this release.

#### Changes by

@tahoni

### [Version 3.3.3](https://github.com/tahoni/template-react/releases/tag/version-3.3.3) - _2026-08-26_

Patch release that relaxes a dependency version constraint. This release is backwards-compatible
with 3.3.2 and contains no component or runtime behaviour changes.

#### Highlights

- Dependency ranges: Widened the `react` and `react-dom` dependency ranges from `~19.2.0`
  (patch-only) to `^19.2.0` (minor and patch), so consumers can pick up future 19.x minor
  releases of React without waiting for a new version of this package.

#### Notable fixes

- None. This release only changes dependency version ranges — see "Highlights" above for the
  full scope of changes.

#### Security

- No security-related changes in this release.

#### Compatibility & Migration

- No breaking changes for consumers of the published package. Consumers can upgrade from `3.3.2`
  to `3.3.3` without code changes.
- The widened `react`/`react-dom` ranges mean consumers relying on npm's default resolution may
  now receive newer 19.x minor releases of React automatically. Pin to `~19.2.0` in your own
  project if you need to defer those updates.

#### How to upgrade

Using npm:

```
npm install tahoni-lib-react@3.3.3
```

Using yarn:

```
yarn add tahoni-lib-react@3.3.3
```

#### Full changelog

See `CHANGELOG.md` for a complete list of commits and PRs included in this release.

#### Changes by

@tahoni

### [Version 3.3.2](https://github.com/tahoni/template-react/releases/tag/version-3.3.2) - _2026-08-26_

Patch release focused entirely on refreshing the toolchain. This release is backwards-compatible
with 3.3.1 and contains no component or runtime behaviour changes — every change is a dependency
version bump plus the small build-config tweaks needed to keep them working together.

#### Highlights

- Core tooling: Upgraded Vite from 6.4.2 to 8.2.2 and `@vitejs/plugin-react` from 4.3.4 to 6.1.0
  to track the latest stable build tooling.
- Runtime dependencies: Bumped React and React DOM from 19.0.0 to 19.2.0, along with their
  matching `@types/react` and `@types/react-dom` type packages.
- Linting & type-checking: Upgraded the ESLint and TypeScript toolchain (`eslint`,
  `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`,
  `eslint-plugin-tsdoc`, `globals`) and TypeScript itself (5.6.2 to 6.0.3) to their latest
  mutually-compatible versions.
- Build plugins: Upgraded `vite-plugin-dts` (4.5.0 to 5.0.3), `vite-plugin-lib-inject-css`
  (2.2.1 to 2.2.2), and `sass` (1.85.0 to 1.103.1).
- Peer dependencies: Refreshed the declared peer ranges for `bootstrap`, `eslint-plugin-react`,
  `glob`, `react-bootstrap`, and `react-spinners` to their latest stable versions.
- Node typings: Updated `@types/node` from 22.13.4 to 24.13.3 to align with the Node 24 LTS line
  used for local development and CI.

#### Notable fixes

- None. This release does not modify any component source, styling, or exported types — see
  "Highlights" above for the full scope of changes.

#### Security

- `vite`, `eslint`, `typescript`, and their supporting plugins were upgraded to their latest
  stable releases, resolving all outstanding `npm audit` advisories carried over from 3.3.1's
  dependency set. All changes are limited to devDependencies and peerDependencies and do not
  introduce runtime changes to production consumers.

#### Compatibility & Migration

- No breaking changes for consumers of the published package. Consumers can upgrade from `3.3.1`
  to `3.3.2` without code changes.
- Two devDependencies were deliberately held back from their absolute-latest release to preserve
  toolchain compatibility: `eslint` stays on the 9.x line (`eslint-plugin-react`'s peer range
  does not yet support ESLint 10) and `typescript` stays on 6.0.x (`typescript-eslint`'s peer
  range does not yet support TypeScript 7).
- The `glob` peer dependency range moved from `^11.0.1` to `^13.0.6`, a major version jump.
  Consumers who install `glob` directly alongside this package should confirm their own version
  satisfies the new range.

#### How to upgrade

Using npm:

```
npm install tahoni-lib-react@3.3.2
```

Using yarn:

```
yarn add tahoni-lib-react@3.3.2
```

#### Full changelog

See `CHANGELOG.md` for a complete list of commits and PRs included in this release.

#### Changes by

@dependabot
@tahoni

### [Version 3.3.1](https://github.com/tahoni/template-react/releases/tag/version-3.3.1) - _2026-04-01_

Patch release containing small fixes, dependency updates, and documentation improvements. This
release is backwards-compatible with 3.3.0 and focuses on stabilising the build and updating
developer tooling.

#### Highlights

- Notable fixes: Resolved a number of minor runtime and styling issues affecting the
  `Loader` and `MaskOverlay` components (see "Notable fixes" below for details).
- Build & packaging: Improved bundling configuration and TypeScript declaration exports to
  prevent mis-exported types at runtime and reduce the published package surface.
- Dependencies: Upgraded development dependencies to address security advisories and improve
  tooling (linting, type-checking and build tools).
- Documentation: Clarified examples in the `README.md` and improved release templates and
  contributor guidance.

#### Notable fixes

- Loader: fixed spinner alignment and animation jitter across several browsers and ensured
  the component respects high-contrast and reduced-motion settings when available.
- MaskOverlay: addressed a z-index/click-through issue which could allow underlying content
  to be interactable; improved ARIA handling for better accessibility.
- Types & exports: corrected type declaration exports so consumers no longer encounter
  runtime import/type mismatches when using the package with TypeScript projects.

#### Security

- Several development-time packages were bumped to resolve security advisories. These were
  limited to devDependencies and do not introduce runtime changes to production consumers.

#### Compatibility & Migration

- No breaking changes in this release. Consumers can upgrade from `3.3.0` to `3.3.1` without
  code changes. If you encounter issues related to type exports, please report them via the
  repository issues so we can follow up quickly.

#### How to upgrade

Using npm:

```
npm install tahoni-lib-react@3.3.1
```

Using yarn:

```
yarn add tahoni-lib-react@3.3.1
```

#### Full changelog

See `CHANGELOG.md` for a complete list of commits and PRs included in this release.

#### Changes by

@dependabot
@tahoni

### [Version 3.3.0](https://github.com/tahoni/template-react/releases/tag/version-3.3.0) - _2026-01-20_

Removed unused functionality along with their dependencies.

#### General Code Improvements

- Removed unused components and files to streamline the codebase.
- Removed the unused `background.png` file from the `assets` directory.

#### Licence and Documentation

- Updated the description in `package.json` to better reflect the library's purpose.
- Updated the licence information in `LICENSE.md` to reflect the current year and ownership.
- Removed the `LICENSE` file, as it has been superseded by the updated `LICENSE.md`.
- Added templates for a change log and release notes to the repository for better documentation
  of future changes.

#### Dependencies

- Removed unused dependencies from `package.json` to reduce bloat.
- Updated vulnerable dependencies to mitigate security risks.
- Updated outdated dependencies to their latest versions for improved security and performance.
- Added eslint for TypeScript to enhance code quality and maintainability.

#### Changes by

@dependabot
@tahoni

### [Version 3.2.4](https://github.com/tahoni/template-react/releases/tag/version-3.2.4) - _2025-02-23_

Fixed the colour and z-index of the loader.<br/>

#### Enhancements and Updates

- Styled the loader with a module CSS, not a global one.
- The loader colour is now picked up correctly from the CSS variable.
- The loader z-index is now also picked up from the CSS.

#### Changes by

@tahoni

### [Version 3.2.3](https://github.com/tahoni/template-react/releases/tag/version-3.2.3) - _2025-02-15_

Mitigated a moderate severity security vulnerability.<br/>

#### General Technical Changes

- A setting was removed from `vite.config.ts` to roll back the changes to build the project with smaller
  chunks.

#### Dependencies

- Updated the `esbuild` dependency to mitigate a moderate security vulnerability.

#### Changes by

@dependabot
@tahoni

### [Version 3.2.2](https://github.com/tahoni/template-react/releases/tag/version-3.2.1) - _2025-02-07_

Mitigated a critical severity security vulnerability.<br/>

#### Dependencies

- Updated the `vitest` dependency to version 3 to mitigate a critical security vulnerability.
- Updated the `vite` dependency to version 6 to mitigate a moderate security vulnerability.

#### Changes by

@dependabot
@tahoni

### [Version 3.2.1](https://github.com/tahoni/template-react/releases/tag/version-3.2.1) - _2025-01-15_

Fixed packaging and publishing to my GitHub npm registry.<br/>

#### General Technical Changes

- Renamed the npm token in the `.npmrc` file for future use in GitHub actions.
- Added my GitHub namespace to `package.json` in the description field.

#### Changes by

@tahoni

### [Version 3.2.0](https://github.com/tahoni/template-react/releases/tag/version-3.2.0) - _2025-01-14_

Improved the model classes.<br/>

#### Enhancements and Updates

- Renamed the content model classes to make them more general.
- A subject field was added to the superclass of the content hierarchy.
- Moved the summary field up in the content hierarchy.
- Inherited the `ImageWithSourceAndDescription` class from the `ObjectWithNameAndDescription` class.

#### Licence and Documentation

- Updated the readme.
- Added release notes.
- Added a change log.

#### General Technical Changes

- Added a CodeQL Github workflow.
- Standardised the `vite.config.ts` file.

#### Dependencies

- Added `index.ts` files to the components.
- Added `index.ts` files to the layout components.

#### Changes by

@tahoni
