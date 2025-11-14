import { useState } from "react";

import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

/**
 * provProjectsState values:
 * - undefined: no starting project state
 * - null: starting project state
 * - id value: current created project
 */

function App() {
  const [projectStates, setProjectStates] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  console.log(projectStates);

  function handleStartAddProject() {
    setProjectStates((provProjectsState) => {
      return {
        ...provProjectsState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectStates((provProjectsState) => {
      const newProject = {
        ...projectData,
        id: Math.random().toString(),
      };
      return {
        selectedProjectId: newProject.id,
        projects: [...provProjectsState.projects, newProject],
      };
    });
  }

  let content;

  if (projectStates.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} />;
  } else if (projectStates.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectStates.projects}
      />
      {content}
    </main>
  );
}

export default App;
