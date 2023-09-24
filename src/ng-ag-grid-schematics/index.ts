import { normalize, strings } from '@angular-devkit/core';
import {
  apply,
  chain,
  MergeStrategy,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';

import { Schema } from './schema';
import { addAgGridDependencies } from './tools/no-state';
import { addImportsToStyles } from './tools/shared/add-import-to-styles';
import { getProject } from './tools/shared/get-project';
import { getWorkspace } from './tools/shared/get-workspace';

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

    const paths = [`./files/state/${state}`, `./files/style/${style}`];

    const rules = paths.map(path => {
      const files = url(path);
      const newTree = apply(files, [
        move(folderPath),
        template({
          ...strings,
          ..._options
        })
      ]);
      return mergeWith(newTree, MergeStrategy.Default);
    });

    const chainedRule = chain([
      ...rules,
      addAgGridDependencies(),
      addImportsToStyles(style, sourceRoot)
    ]);

    return chainedRule(tree, _context);
  };
}
