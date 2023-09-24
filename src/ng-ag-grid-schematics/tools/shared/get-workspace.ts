import { SchematicsException, Tree } from '@angular-devkit/schematics';

import { Workspace } from './types';

export function getWorkspace(tree: Tree): Workspace {
  const workspace = tree.read('./angular.json');
  if (!workspace) throw new SchematicsException('angular.json file not found!');
  return JSON.parse(workspace.toString()) as Workspace;
}
