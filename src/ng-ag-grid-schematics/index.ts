import { normalize, strings } from '@angular-devkit/core';
import { ProjectDefinition } from '@angular-devkit/core/src/workspace';
import {
  apply,
  chain,
  MergeStrategy,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  SchematicsException,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';

import { Schema } from './schema';

type Workspace = { projects: { [key: string]: ProjectDefinition } };

export function ngAgGridSchematics(_options: Schema): Rule {
  const { name, path, project, state, style } = _options;
  return (tree: Tree, _context: SchematicContext) => {
    const workspace = getWorkspace(tree);
    const p = getProject(project, workspace);
    const { root, sourceRoot, prefix } = p;
    const appRoot = `${root}/${sourceRoot}/${prefix}/`;
    const folderPath = normalize(
      strings.dasherize(`${appRoot}${path}/${name}`)
    );

    const files = url(`./files/${state}/${style}`);
    const newTree = apply(files, [
      move(folderPath),
      template({
        ...strings,
        ..._options
      })
    ]);

    const templateRule = mergeWith(newTree, MergeStrategy.Default);
    const chainedRule = chain([
      templateRule,
      addAgGridDependencies(),
      addImportsToStyles(style, sourceRoot)
    ]);
    return chainedRule(tree, _context);
  };
}

function getWorkspace(tree: Tree): Workspace {
  const workspace = tree.read('./angular.json');
  if (!workspace) throw new SchematicsException('angular.json file not found!');
  return JSON.parse(workspace.toString()) as Workspace;
}

function getProject(project: string, workspace: Workspace) {
  return workspace.projects[project];
}

export function addAgGridDependencies(): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const packageJson = JSON.parse(tree.read('package.json')!.toString()) as {
      dependencies: Record<string, string>;
    };

    if (!packageJson.dependencies['ag-grid-angular'])
      packageJson.dependencies['ag-grid-angular'] = '*';

    if (!packageJson.dependencies['ag-grid-community'])
      packageJson.dependencies['ag-grid-community'] = '*';

    if (!packageJson.dependencies['ag-grid-enterprise'])
      packageJson.dependencies['ag-grid-enterprise'] = '*';

    tree.overwrite('package.json', JSON.stringify(packageJson, null, 2));
    _context.logger.info('Ag-Grid dependencies added to package.json');

    return tree;
  };
}

function addImportsToStyles(
  style: string,
  sourceRoot: string | undefined
): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const stylesPath = `${sourceRoot}/styles.${style}`;
    const stylesFile = tree.read(stylesPath);

    if (stylesFile) {
      const content = stylesFile.toString('utf-8');

      if (
        content.includes('~ag-grid-community/styles/ag-grid.css') &&
        content.includes('ag-grid-community/styles/ag-theme-alpine.css')
      ) {
        _context.logger.info('Imports already exist in styles.scss. Skipping.');
      } else {
        const updatedContent = `@import '~ag-grid-community/styles/ag-grid.css';\n@import '~ag-grid-community/styles/ag-theme-alpine.css';\n${content}`;
        tree.overwrite(stylesPath, updatedContent);
      }
    } else {
      _context.logger.error(
        'styles.scss file not found. Make sure the path is correct.'
      );
    }

    return tree;
  };
}
