# Description

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2. It takes a random 50 users from the Random User API (https://randomuser.me/api/?results=50) and displays them in a list and grid view according to provided Figma designs. 

## Development server

- Run `ng serve` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
- Run `npm install` to install included packages. 
  -  NOTE: If the browser doesn't load the icon svg's, please restart the program and refresh the browser. (This happened to me once, adding note just in case).

## Build

- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

- Run `ng test` or `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- Unit tests cover methods in the Search Pipe, Team Member Component, and App Component

## Features Included

- Call API to make team member cards
  - Includes name, city, image, contact info for each person
  - Email and phone number buttons with write/call functionality
- Enabled switch between grid and list view
- Added sorting by name (ascending and descending) functionality
- Added search by name functionality
