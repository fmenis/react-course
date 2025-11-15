import { useState } from "react";

import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

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

  function handleStartAddProject() {
    setProjectStates((provProjectsState) => {
      return {
        ...provProjectsState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectStates((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random().toString(),
      };
      return {
        selectedProjectId: newProject.id,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleSelectProject(selectedProjectId) {
    setProjectStates((prevState) => {
      return {
        ...prevState,
        selectedProjectId: selectedProjectId,
      };
    });
  }

  function handleCancelProject() {
    setProjectStates((prevState) => {
      const lastProjectId = prevState.projects.length
        ? prevState.projects[prevState.projects.length - 1].id
        : undefined;

      return {
        ...prevState,
        selectedProjectId: lastProjectId,
      };
    });
  }

  function handleDeleteProject(selectedProjectId) {
    setProjectStates((prevState) => {
      const filteredProjects = prevState.projects.filter(
        (project) => project.id !== selectedProjectId
      );

      const lastProjectId = filteredProjects.length
        ? filteredProjects[filteredProjects.length - 1].id
        : undefined;

      return {
        selectedProjectId: lastProjectId,
        projects: filteredProjects,
      };
    });
  }

  const selectedProject = projectStates.projects.find(
    (project) => project.id === projectStates.selectedProjectId
  );
  let content = (
    <SelectedProject
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
    />
  );

  if (projectStates.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancelProject={handleCancelProject}
      />
    );
  } else if (projectStates.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        projects={projectStates.projects}
      />
      {content}
    </main>
  );
}

export default App;
