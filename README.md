# ng-ag-grid-schematics

**ng-ag-grid-schematics** is a set of Angular schematics that simplify the integration of the ag-Grid data grid library into your Angular applications. With these schematics, you can quickly generate Angular components, templates, and stylesheets tailored for use with ag-Grid, while also managing ag-Grid dependencies and styles effortlessly.

Follow this guide to get started with **ng-ag-grid-schematics** in your Angular projects.

## Installation

Install `ng-ag-grid-schematics` from npm to your Angular project:

```bash
ng add ng-ag-grid-schematics
```

This command will add `ng-ag-grid-schematics` to your project and configure it for use.

## Running the Schematic

Generate ag-Grid components and configure your project by running the following command:

```bash
ng generate ng-ag-grid-schematics:nags
```

This command will launch a series of prompts to help you configure and generate ag-Grid components.

## Input Configuration

You will be prompted to provide the following inputs:

- **Name:** Enter a name for your ag-Grid component.

```bash
...
? What name would you like to use for the component? my-grid
...
```

- **Project:** Specify the project to run the schematic in. Note: Since Angular 14, the `defaultProject` property has been deprecated, and the default project must be explicitly specified.

```bash
...
? Enter project name: my-angular-app
...
```

- **Path:** Specify the path where you want to generate the component. The path parameter specifies the location where the component will be generated. This path is relative to the project root `src/app/${path}`.

```bash
...
? Enter the path for the component: shared/components/ag-grid
...
```

## Styling and State Management

You will also be prompted to configure the styling and state management for your ag-Grid component:

- **Style:** Select the stylesheet format for your component. You can choose between "No stylesheet," "CSS," or "SCSS.". Note that your selection should correspond to the `inlineStyleLanguage` configuration in your `angular.json` file.

- **State Management:** Choose a state management option for preserving changes in your grid component. Options include "No State," "Component Store," and "Component Store with EntityAdapter."

## File Generation

After providing the necessary inputs and configuration, the schematic will generate the following files and perform the following actions:

- Generate ag-Grid component files based on your inputs (component, template, styles).

- Add ag-Grid styles to your project's root styles file (styles.css or styles.scss).

- Add ag-Grid dependencies to your project's `package.json` file.

## Example

```bash
? What name would you like to use for the component? my-grid
? Enter project name: ng-ag-grid-sa
? Enter the path for the component: shared/component/ag-grid
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss ]
? Which state management option would you like to use? Component Store                      [ https://ngrx.io/guide/component-store   ]
    Ag-Grid dependencies added to package.json
    Imports already exist in styles.scss. Skipping.
CREATE src/app/shared/component/ag-grid/my-grid/mock.ts (2550 bytes)
CREATE src/app/shared/component/ag-grid/my-grid/my-grid.component.html (364 bytes)
CREATE src/app/shared/component/ag-grid/my-grid/my-grid.component.ts (1295 bytes)
CREATE src/app/shared/component/ag-grid/my-grid/my-grid.model.ts (277 bytes)
CREATE src/app/shared/component/ag-grid/my-grid/my-grid.service.ts (1122 bytes)
CREATE src/app/shared/component/ag-grid/my-grid/my-grid.store.ts (3453 bytes)
CREATE src/app/shared/component/ag-grid/my-grid/my-grid.component.scss (0 bytes)
UPDATE package.json (1650 bytes)
```

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Sgryts/ng-ag-grid-schematics/blob/main/LICENSE)
![GitHub Workflow Status](https://github.com/Sgryts/ng-ag-grid-schematics/actions/workflows/release.yml/badge.svg)
![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
