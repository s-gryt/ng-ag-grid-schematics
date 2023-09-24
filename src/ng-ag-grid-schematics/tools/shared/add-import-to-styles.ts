import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function addImportsToStyles(
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
        content.includes('~ag-grid-community/styles/ag-theme-alpine.css')
      ) {
        _context.logger.info(
          `Imports already exist in styles.${style}. Skipping.`
        );
      } else {
        const updatedContent = `@import '~ag-grid-community/styles/ag-grid.css';\n@import '~ag-grid-community/styles/ag-theme-alpine.css';\n${content}`;
        tree.overwrite(stylesPath, updatedContent);
      }
    } else {
      _context.logger.error(
        `styles.${style} file not found. Make sure the path is correct.`
      );
    }

    return tree;
  };
}
