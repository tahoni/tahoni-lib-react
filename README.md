# Leoni Lubbinge's React library

## Table of contents
- [Description](#description)
- [Summary](#summary)
- [Repository](#repository)
- [Structure](#structure)
- [Technology](#technology)
- [Instructions](#instructions)
- [License](#license)
- [Attributions](#attributions)
- [Author](#author)
- [Support](#support)

## Description
This project contains the source code for my React component library.

## Summary
This project contains the source code for a npm package library
with reusable React components.\
It contains common components to be used in multiple React projects.\
It is a React project bootstrapped using Vite with the TypeScript React template.
It is written in TypeScript and uses Bootstrap and React Bootstrap
as the UI framework.

## Repository
The repository for this project is located at 
[GitHub](https://github.com/tahoni/tahoni-react-lib).

Feature requests, suggestions for improvements and bugs can be 
logged using the project's [Issues](https://github.com/tahoni/tahoni-react-lib/issues) page.

## Structure
A high-level structure of the project.
```text
├───dist
│   ├───components
│   ├───layout
│   └───model
├───documentation
│   └───manual
├───lib
│   ├───components
│   ├───layout
│   └───model
├───public
└───src
    ├───assets
    │   └───stylesheets
    └───components
```

The lib directory contains the library itself and the src directory contains 
the sample application to test the library while developing.

## Technology
A list of the technology used to develop and/or run the project.

**_Languages:_**
- TypeScript 5

  [![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

- HTML 5

  [![HTML Badge](https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white)](https://www.w3.org/)

- CSS 3

  [![CSS Badge](https://img.shields.io/badge/CSS-1572B6?logo=css3)](https://www.w3.org/)

**_Build Tools:_**
- npm

  [![npm Badge](https://img.shields.io/badge/npm-CB3837?logo=npm)](https://www.npmjs.com/)

**_Frameworks:_**
- Vite 4

  [![Vite Badge](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

- React 18

  [![React Badge](https://img.shields.io/badge/React-CB3837?logo=react)](https://react.dev/)

**_Libraries:_**
- Bootstrap 5

  [![Bootstrap Badge](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

- React Bootstrap 2

  [![React Bootstrap Badge](https://img.shields.io/badge/React_Bootstrap-7952B3?logo=bootstrap&logoColor=white)](https://react-bootstrap.github.io/)

## Instructions
In the project directory, you can run:

#### `npm run dev`
Runs the sample app in the development mode.\
The page will reload if you make edits.

#### `npm run build`
Builds the library for production to the `dist` folder.\
Your library is ready to be published!

#### `npm link`
Installs the library in the `dist` folder locally.\
This is handy for installing your own stuff, so that you can work on it 
and test iteratively without having to continually rebuild.

#### `npm publish`
Published the library in the `dist` folder to npm.\
Publishes a package to the registry so that it can be installed by name.\
The `npm prepublishOnly` script ensures that the package is always built 
before it is published.

#### `npm pack`
Packages the library in the `dist` folder to a tarball.\
Indicates that you don't want npm to make any changes and that it 
should only report what it would have done.

## License
This project is licensed under the terms of the _MIT license_.

## Attributions
My thanks go to Natwar Singh for the inspiration for the Breakpoints component:
- Solution by Natwar Singh in reply to the following question on Stack Overflow:\
  "Display Bootstrap breakpoint name when resizing the screen"\
  https://stackoverflow.com/questions/65319012/display-bootstrap-breakpoint-name-when-resizing-the-screen\
  https://stackoverflow.com/users/1579939/natwar-singh

## Author
**Leoni Lubbinge**
- [![Website Badge](https://img.shields.io/badge/https%3A%2F%2Ftahoni.info-blue?color=%230077b6ff)](https://www.tahoni.info)
- [![Email Badge](https://img.shields.io/badge/leonil%40tahoni.info-blue?color=%230077b6ff)](mailto:leonil@tahoni.info)
- [![Outlook Email Badge](https://img.shields.io/badge/tahoni%40outlook.com-blue?color=%230077b6ff)](mailto:tahoni@outlook.com)
- [![Gmail Email Badge](https://img.shields.io/badge/tahoni%40gmail.com-blue?logo=gmail&labelColor=%23023e8aff&color=%230077b6ff)](mailto:tahoni@gmail.com)
- [![GitHub Badge](https://img.shields.io/badge/Leoni_Lubbinge-blue?logo=github&labelColor=%23023e8aff&color=%230077b6ff)](https://github.com/tahoni)
- [![LinkedIn Badge](https://img.shields.io/badge/Leoni_Lubbinge-blue?logo=linkedin&labelColor=%23023e8aff&color=%230077b6ff)](https://www.linkedin.com/in/leoni-lubbinge-06066b16/)

## Support
Contributions, suggestions, bug reports and feature requests are welcome!

Give a ⭐️ if you like this project!
