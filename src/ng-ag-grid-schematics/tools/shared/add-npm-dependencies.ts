import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function addNpmDependencies(state: string): Rule {
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

    if (
      state === 'component-store' ||
      state === 'component-store-with-entity-adapter'
    ) {
      if (!packageJson.dependencies['@ngrx/component-store'])
        packageJson.dependencies['@ngrx/component-store'] = '*';
    }

    if (state === 'component-store-with-entity-adapter') {
      if (!packageJson.dependencies['@ngrx/entity'])
        packageJson.dependencies['@ngrx/entity'] = '*';
    }

    tree.overwrite('package.json', JSON.stringify(packageJson, null, 2));
    _context.logger.info('Ag-Grid dependencies added to package.json');

    return tree;
  };
}
