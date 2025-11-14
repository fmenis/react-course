import { useState } from "react";

import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  const [newProject, setNewProject] = useState(false);

  function handleNewProject() {
    setNewProject(true);
  }

  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectSidebar handleNewProject={handleNewProject} />
      {!newProject && <NoProjectSelected />}
      {newProject && <NewProject />}
    </main>
  );
}

export default App;
