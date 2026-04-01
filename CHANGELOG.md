# Leoni Lubbinge's React library

## Change Log

### Table of Contents

- [Version 3.3.1](#version-331---_2026-04-01_)
- [Version 3.3.0](#version-330---_2026-01-20_)
- [Version 3.2.4](#version-324---_2025-02-23_)
- [Version 3.2.3](#version-323---_2025-02-15_)
- [Version 3.2.2](#version-322---_2025-02-07_)
- [Version 3.2.1](#version-321---_2025-01-15_)
- [Version 3.2.0](#version-320---_2025-01-14_)

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
