/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * The following rule "@typescript-eslint/no-unused-vars" has been temporarily disabled for this initial commit.
 * The code in this file is still a work in progress and will be updated to
 * address the rule violation as development progresses.
 */
import '@total-typescript/ts-reset';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function ngAgGridSchematics(_options: unknown): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return tree;
  };
}
