# Description

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2. It takes a random 50 users from the Random User API (https://randomuser.me/api/?results=50) and displays them in a list and grid view.

## Things I would improve about this project

Now that it's been about a year since I initially created this project, some things I would improve in the future include:
- Create a small service for the API call to Random Users
- Lazy load components + the images
- Re-implement the tests that existed before I restructured the repo
- Clean up styling and UI 

## Development server

- Run `ng serve` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
- Run `npm install` to install included packages. 

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

## Screenshots of my local repo
- Grid View

  ![image](https://user-images.githubusercontent.com/44125751/153538053-1c2d9bac-9243-45c9-a3d8-f66f4381d001.png)
  
- Grid Search

  ![image](https://user-images.githubusercontent.com/44125751/153538077-e13e5865-e1b7-4d06-b1a6-03194c5d80ff.png)
  
- Grid Sort

  ![image](https://user-images.githubusercontent.com/44125751/153538391-34d1d488-cb8e-4bcd-b93b-c0f990b75862.png)
  
  ![image](https://user-images.githubusercontent.com/44125751/153538406-74876b9b-dc56-4621-abe6-6fef6a678826.png)
  
- List View

  ![image](https://user-images.githubusercontent.com/44125751/153538096-8c5532da-9d63-40c4-8720-4431cd819f42.png)

- List Search

  ![image](https://user-images.githubusercontent.com/44125751/153538324-e78e30cf-c896-4595-b274-b6234c97c353.png)
  
- List Sort 

  ![image](https://user-images.githubusercontent.com/44125751/153538249-f7383395-27c5-40fd-aed6-f59c56d1624d.png)
  
  ![image](https://user-images.githubusercontent.com/44125751/153538276-fba973d2-a1c1-46fa-a735-475c2b0e5034.png)

