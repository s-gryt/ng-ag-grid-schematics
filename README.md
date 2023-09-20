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

- **Path:** Specify the path where you want to generate the component.

- **Project:** Choose the project in which you want to run the schematic.

## Styling and State Management

You will also be prompted to configure the styling and state management for your ag-Grid component:

- **Style:** Select the stylesheet format for your component. You can choose between "No stylesheet," "CSS," or "SCSS."

- **State Management:** Choose a state management option for preserving changes in your grid component. Options include "No State," "Component Store," and "Component Store with EntityAdapter."

## File Generation

After providing the necessary inputs and configuration, the schematic will generate the following files and perform the following actions:

- Generate ag-Grid component files based on your inputs (component, template, styles).

- Add ag-Grid styles to your project's root styles file (styles.css or styles.scss).

- Add ag-Grid dependencies to your project's `package.json` file.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Sgryts/ng-ag-grid-schematics/blob/main/LICENSE)
![GitHub Workflow Status](https://github.com/Sgryts/ng-ag-grid-schematics/actions/workflows/release.yml/badge.svg)
![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
