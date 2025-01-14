# Leoni Lubbinge's React library
## Change Log

### Table of Contents
- [Version 3.2.0](#version-320---_2025-01-14_)
- [Version 3.2.1](#version-321---_2025-01-15_)

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
- Standardized the `vite.config.ts` file.

#### Dependencies
- Added `index.ts` files to the components.
- Added `index.ts` files to the layout components.

#### Changes by
@tahoni
