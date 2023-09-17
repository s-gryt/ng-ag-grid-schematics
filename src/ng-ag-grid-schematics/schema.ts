export type Schema = {
  name: 'grid' | string;
  path: string;
  sourceDir: 'src';
  state: '' | 'component-store' | 'component-store-with-entity-adapter';
  style: '' | 'css' | 'scss';
};
