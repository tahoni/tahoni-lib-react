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

## Description
This project contains the source code for my React component library.

## Summary
The repository is a React component library 
primarily written in TypeScript. 
It also includes SCSS, HTML, and JavaScript. 
This library is designed to provide reusable React components.

## Repository
The repository for this project is located at 
[GitHub](https://github.com/tahoni/tahoni-react-lib).

Feature requests, suggestions for improvements and bugs can be 
logged using the project's [Issues](https://github.com/tahoni/tahoni-react-lib/issues) page.

An overview of the project can be found at 
[https://tahoni.info/projects/tahoni-lib-react](https://www.tahoni.info/projects/tahoni-lib-react).

## Structure
A high-level structure of the project.

The lib directory contains the library itself, and the src directory contains 
a sample application to test the library during development.

```text
├───.github
│   └───workflows
├───documentation
├───lib
│   ├───components
│   │   ├───Cover
│   │   ├───CoverSlider
│   │   ├───Loader
│   │   └───MaskOverlay
│   ├───constants
│   ├───layout
│   │   └───Breakpoints
│   └───model
│       ├───content
│       └───topic
├───public
│   └───assets
│       └───images
└───src
    ├───assets
    │   └───stylesheets
    └───components
        └───ExampleSlider
```

## Technology

### Overview

This is a React project bootstrapped using Vite with the TypeScript React template.

It is written in TypeScript and uses JSX components.

Bootstrap and React Bootstrap are used for the UI/UX.<br/>
Styling is done by SCSS stylesheets.

### Technology Stack

#### Languages:

- TypeScript 5

  [![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

- HTML 5

  [![HTML Badge](https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white)](https://www.w3.org/)

- CSS 3

  [![CSS Badge](https://img.shields.io/badge/CSS-1572B6?logo=css3)](https://www.w3.org/)

#### Build Tools:

- npm 10

  [![npm Badge](https://img.shields.io/badge/npm-CB3837?logo=npm)](https://www.npmjs.com/)

#### Frameworks:

- Vite 5

  [![Vite Badge](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

- React 19

  [![React Badge](https://img.shields.io/badge/React-CB3837?logo=react)](https://react.dev/)

#### Libraries:

- Bootstrap 5

  [![Bootstrap Badge](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

- React Bootstrap 2

  [![React Bootstrap Badge](https://img.shields.io/badge/React_Bootstrap-7952B3?logo=bootstrap&logoColor=white)](https://react-bootstrap.github.io/)

## Instructions
The following commands are available in this project 
to set up the development environment 
and build the production environment.

#### `npm install`
This installs the dependencies.

#### `npm run dev`
This runs the app in development mode.<br/>
The page will reload if you make edits.

#### `npm run build`
This builds the app for production to the `dist` folder.<br/>
Your app is ready to be deployed!

#### `npm run preview`
This previews the app locally in the `dist` folder.<br/>
Use this to check if the production build looks OK in your local environment.

#### `npm link`
Installs the library locally in the `dist` folder.<br/>
This is handy for installing the library while working on it,
allowing you to test iteratively without continually rebuilding.

#### `npm publish`
Published the library in the `dist` folder to npm.<br/>
Publishes a package to the registry so that it can be installed by name.<br/>
The `npm prepublishOnly` script ensures that it is built 
before publishing.

## License
This project is licensed under the terms of the _MIT licence_.

## Attributions
My thanks go to Natwar Singh for the inspiration for the Breakpoints component:
- Solution by Natwar Singh in reply to the following question on Stack Overflow:<br/>
  "Display Bootstrap breakpoint name when resizing the screen"<br/>
  https://stackoverflow.com/questions/65319012/display-bootstrap-breakpoint-name-when-resizing-the-screen<br/>
  https://stackoverflow.com/users/1579939/natwar-singh

## Author
**Leoni Lubbinge**

- [![Website Badge](https://custom-icon-badges.demolab.com/badge/https%3A%2F%2Ftahoni.info-blue?logo=file-code)](https://www.tahoni.info)
- [![Email Badge](https://custom-icon-badges.demolab.com/badge/leonil%40tahoni.info-blue?logo=mail)](mailto:leonil@tahoni.info)


- [![Outlook Email Badge](https://custom-icon-badges.demolab.com/badge/tahoni%40outlook.com-blue.svg?logo=mail)](mailto:tahoni@outlook.com)
- [![Gmail Email Badge](https://img.shields.io/badge/tahoni%40gmail.com-blue?logo=gmail)](mailto:tahoni@gmail.com)
- [![GitHub Badge](https://img.shields.io/badge/Leoni_Lubbinge-blue?logo=github)](https://github.com/tahoni)
- [![LinkedIn Badge](https://custom-icon-badges.demolab.com/badge/Leoni_Lubbinge-blue.svg?logoSource=feather&logo=linkedin)](https://www.linkedin.com/in/leoni-lubbinge-06066b16/)
