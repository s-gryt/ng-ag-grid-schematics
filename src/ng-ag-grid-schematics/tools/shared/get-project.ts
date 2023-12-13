import { SchematicsException } from '@angular-devkit/schematics';

import { Workspace } from './types';

export function getProject(project: string, workspace: Workspace) {
  const selectedProject = workspace.projects[project];

  if (!selectedProject)
    throw new SchematicsException(
      `Project "${project}" not found in the workspace.`
    );

  return selectedProject;
}
