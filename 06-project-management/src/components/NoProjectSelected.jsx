import noProjectImg from "../assets/no-projects.png";

export default function NoProjectSelected() {
  return (
    <div className="mt-2 text-center w-2/3">
      <img
        className="x-16 h-16 object-contain mx-auto"
        src={noProjectImg}
        alt="En empty task list"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or start with a new one
      </p>
      <p className="mt-8">
        <button className="px-4 py-2 text-xs md:text-base rounded-md gb:stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
          Create new project
        </button>
      </p>
    </div>
  );
}
