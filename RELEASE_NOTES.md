# Leoni Lubbinge's React library

## Release Notes

### Version 3.3.1 - _2026-04-01_

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
