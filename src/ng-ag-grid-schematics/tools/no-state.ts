import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function componentStore() {}

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
