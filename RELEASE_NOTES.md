# Leoni Lubbinge's React library

## Release Notes

### Version 3.4.0 - _2026-09-03_

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
