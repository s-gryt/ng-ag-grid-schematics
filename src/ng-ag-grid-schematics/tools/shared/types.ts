import { ProjectDefinition } from '@angular-devkit/core/src/workspace';

export type Workspace = { projects: { [key: string]: ProjectDefinition } };
