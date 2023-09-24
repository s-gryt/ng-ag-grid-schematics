import { Workspace } from './types';

export function getProject(project: string, workspace: Workspace) {
  return workspace.projects[project];
}
