# Leoni Lubbinge's React library

## Release Notes

### Version 3.4.1 - _2026-09-03_

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
