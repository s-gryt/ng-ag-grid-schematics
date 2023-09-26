import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath = path.join(__dirname, '../../collection.json');
import * as angularJsonStub from './stubs/angular.json';
import * as packageJsonStub from './stubs/package.json';

describe('ng-ag-grid-schematics', () => {
  let testTree: Tree;
  beforeEach(() => {
    testTree = Tree.empty();
    testTree.create('./angular.json', JSON.stringify(angularJsonStub));
    testTree.create('./package.json', JSON.stringify(packageJsonStub));
  });

  describe('no-state', () => {
    it('should generate the expected files and configuration for a grid component', async () => {
      const runner = new SchematicTestRunner('schematics', collectionPath);
      const tree = await runner.runSchematic(
        'ng-ag-grid-schematics',
        {
          name: 'grid',
          path: '',
          project: 'test-project',
          style: 'css',
          state: 'no-state'
        },
        testTree
      );
      expect(tree.files).toEqual([
        '/angular.json',
        '/package.json',
        '/src/app/grid/grid.component.html',
        '/src/app/grid/grid.component.ts',
        '/src/app/grid/grid.component.css'
      ]);
    });
  });

  describe('component-store', () => {
    it('should generate the expected files and configuration for a grid component', async () => {
      const runner = new SchematicTestRunner('schematics', collectionPath);
      const tree = await runner.runSchematic(
        'ng-ag-grid-schematics',
        {
          name: 'grid',
          path: '',
          project: 'test-project',
          style: 'css',
          state: 'component-store'
        },
        testTree
      );

      expect(tree.files).toEqual([
        '/angular.json',
        '/package.json',
        '/src/app/grid/mock.ts',
        '/src/app/grid/grid.component.html',
        '/src/app/grid/grid.component.ts',
        '/src/app/grid/grid.model.ts',
        '/src/app/grid/grid.service.ts',
        '/src/app/grid/grid.store.ts',
        '/src/app/grid/grid.component.css'
      ]);
    });
  });

  describe('component-store-with-entity-adapter', () => {
    it('should generate the expected files and configuration for a grid component', async () => {
      const runner = new SchematicTestRunner('schematics', collectionPath);
      const tree = await runner.runSchematic(
        'ng-ag-grid-schematics',
        {
          name: 'grid',
          path: '',
          project: 'test-project',
          style: 'scss',
          state: 'component-store-with-entity-adapter'
        },
        testTree
      );

      expect(tree.files).toEqual([
        '/angular.json',
        '/package.json',
        '/src/app/grid/mock.ts',
        '/src/app/grid/grid.component.html',
        '/src/app/grid/grid.component.ts',
        '/src/app/grid/grid.model.ts',
        '/src/app/grid/grid.service.ts',
        '/src/app/grid/grid.store.ts',
        '/src/app/grid/grid.component.scss'
      ]);
    });
  });
});
