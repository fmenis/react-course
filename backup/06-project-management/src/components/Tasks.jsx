import NewTasks from "./NewTasks.jsx";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Title</h2>

      <NewTasks onAdd={onAdd} />

      {!tasks.length && (
        <p className="text-stone-800 my-4">
          This project does not have any task yet
        </p>
      )}

      {tasks.length && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span> (id: {task.id})
              <button
                onClick={() => onDelete(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Delete task
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
