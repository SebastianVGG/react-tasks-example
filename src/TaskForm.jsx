import { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => {
            setDescripcion(e.target.value);
          }}
        ></textarea>
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
