export type Schema = {
  name: 'grid' | string;
  path: string;
  project: string;
  state: 'no-state' | 'component-store' | 'component-store-with-entity-adapter';
  style: '' | 'css' | 'scss';
};
