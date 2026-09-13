# Leoni Lubbinge's React library

## Release Notes

### Version 3.4.3 - _2026-09-13_

Patch release that bumps the transitive `js-yaml` dependency to `4.3.2` to pick up a security
fix. This release is backwards-compatible with 3.4.2.

#### Highlights

- Dependencies: Bumped `js-yaml` from `4.3.1` to `4.3.2`.

#### Notable fixes

- No functional fixes in this release.

#### Security

- Dependencies: Updated the transitive `js-yaml` dependency to `4.3.2`, which counts empty
  mappings in merge sequences toward `maxTotalMergeKeys` and hard-limits merge sequence size to
  100, limiting excessive CPU usage from crafted YAML input.

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
