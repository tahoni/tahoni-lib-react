# Leoni Lubbinge's React library

## Release Notes

### Version 3.3.2 - _2026-08-26_

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
