# Leoni Lubbinge's React library

## Release Notes

### Version 3.4.3 - _2026-09-03_

Patch release that fixes `CoverSlider` failing to render entirely under Vite's dependency
pre-bundler. This release is backwards-compatible with 3.4.2.

#### Highlights

- CoverSlider: The component now resolves its `react-slick` import defensively at runtime,
  independent of how a given bundler's CommonJS interop happens to shape the default export.

#### Notable fixes

- CoverSlider: Fixed a bug where `react-slick`'s default export could be left wrapped as
  `{ default: Slider }` instead of unwrapped to the `Slider` component itself, depending on the
  bundler's CommonJS interop behaviour (observed with Vite 8's dependency pre-bundler). This
  caused React to throw "Element type is invalid" and `CoverSlider` to fail to render at all.

#### Security

- No security-related changes in this release.

#### Compatibility & Migration

- No breaking changes for consumers of the published package. Consumers can upgrade from `3.4.2`
  to `3.4.3` without code changes.

#### How to upgrade

Using npm:

```
npm install tahoni-lib-react@3.4.3
```

Using yarn:

```
yarn add tahoni-lib-react@3.4.3
```

#### Full changelog

See `CHANGELOG.md` for a complete list of commits and PRs included in this release.

#### Changes by

@tahoni
