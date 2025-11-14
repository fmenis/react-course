import Button from "./Button.jsx";

export default function ProjectSidebar({ onStartAddProject, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        TOUR PROJECTS
      </h2>
      <div>
        <Button onClick={onStartAddProject}>Create new Project</Button>
      </div>

      <ul className="mt-8">
        {projects.map((project, index) => (
          <li key={index}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:bg-stone-700 hover:text-stone-100">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
