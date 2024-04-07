import TaskCard from "./TaskCard";
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskList() {

  //Solo se necesita el arreglo para que se cree x TaskCard con la info de cada objeto
const {tasks} = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1>Aún no hay tareas.</h1>;
  }

  return (
    <div>
      {tasks.map((task) => {
        //Se crea TaskCard por cada objeto del arreglo y se le pasan valores únicos para que cree un TaskCard por cada objeto
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
}

export default TaskList;
