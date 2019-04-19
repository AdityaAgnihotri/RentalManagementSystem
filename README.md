# CodeChallengeCrownStack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Description

The Code is proper component based as I have devided the screen into component as it comes.

We could also implement lazy loading in that but I did not find the proper place to implement as the size of application is not that big and neither the compnents differ in their functionality.

Routing is implemented in the routing module and it is been imported into app module .

Header component imports the data(The json is hosted on the AWS live server.) and it is been binded to the dropdown.

After selecting the the branches(in the branched dropdown) we go to the category page. The category is get with the help of the queryparams.

You can then navigate to the subcategory page by clicking on the arrow(->).





