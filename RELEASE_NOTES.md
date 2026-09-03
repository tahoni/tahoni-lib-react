# Leoni Lubbinge's React library

## Release Notes

### Version 3.4.2 - _2026-09-03_

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
