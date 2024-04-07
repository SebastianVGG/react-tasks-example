import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  //El parametro lo recibe en cualquier componente que necesite crear una tarea y aquí se crea y se guarda en el contexto para que se pueda acceder en todo el proyecto
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  //El parametro del id de la tarea lo implementa el componente que tenga la posibilidad de tener el id (TaskCard) de cada objeto para saber cual es exactamente el id a eliminar y aqui en el contexto se modifica globalmente para que sea utilizado en todo el proyecto
  function deleteTask(taskId) {
    let newArrayTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newArrayTasks);
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  //Se coloca en la propiedad de la etiqueta "valor" todas las variables y funciones que quiero que se puedan utilizar en todo el proyecto
  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
