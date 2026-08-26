# Leoni Lubbinge's React library

## Release Notes

### Version 3.3.3 - _2026-08-26_

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
