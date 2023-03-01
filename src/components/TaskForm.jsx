import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  function submit(e) {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={submit} className="bg-cyan-400 p-5 mb-5">
        <h1 className="text-2xl font-bold mb-2"> Crear Tarea</h1>
        <input
          className="bg-slate-300 w-full p-3 mb-2"
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <input
          className="bg-slate-300 w-full p-3 mb-2"
          type="textarea"
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        />
        <button
        className="bg-indigo-300 p-2 max-w-sm mx-auto rounded-md"
        > Guardar Tarea </button>
      </form>
    </div>
  );
}

export default TaskForm;
