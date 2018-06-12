# RedditApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# Components 

## list.component 
Displays a list of articles, [infinity-scroll](https://www.npmjs.com/package/ngx-infinite-scroll) is used for paging.

## article.component 
Displays chosen article and all comments. I take comments recursively. New comments i storу in localStorage. 

# Services 

## Communication.service
Used for communication with API. All api endpoints stored in App.config.

## Comment.service 
Just for managing user comments (write/get to localStorage)

Also in project used Bootstrap 4
