# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Sgryts/ng-ag-grid-schematics/blob/main/LICENSE)
![GitHub Workflow Status](https://github.com/Sgryts/ng-ag-grid-schematics/actions/workflows/release.yml/badge.svg)
![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
