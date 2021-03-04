import { DependenciesHeader } from './components/DependenciesHeader';
import { DependenciesTable } from './components/DependenciesTable';
import { useDependencies } from './hooks/useDependencies';

interface Props { projectPath: string }

export function Dependencies({ projectPath }: Props): JSX.Element {
  const {
    dependencies,
    dependenciesProcessing,
    onInstallAllDependencies,
    onInstallNewDependency,
    onDeleteDependency,
    onUpdateDependencies,
  } = useDependencies(projectPath);

  return (
    <>
      <DependenciesHeader
        isGlobal={projectPath === 'global'}
        onForceReInstall={(): void => { onInstallAllDependencies(true); }}
        onInstallAll={onInstallAllDependencies}
        onInstallNewDependency={onInstallNewDependency}
        onUpdateAllToInstalled={(): void => { onUpdateDependencies('installed'); }}
        onUpdateAllToLatest={(): void => { onUpdateDependencies('latest'); }}
        onUpdateAllToWanted={(): void => { onUpdateDependencies('wanted'); }}
      />

      <DependenciesTable
        dependencies={dependencies}
        dependenciesProcessing={dependenciesProcessing}
        isGlobal={projectPath === 'global'}
        onDeleteDependency={onDeleteDependency}
        onInstallDependencyVersion={(): void => {}}
      />
    </>
  );
}
