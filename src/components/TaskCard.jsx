import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'


//A pesar de que puedo obtener tasks desde el contexto aquí no se usaría por lógica de la aplicación ya que cada TaskCard es creado por TaskList y TaskList le esta pasando el argumento por cada TaskCard unico y depende de TaskList las veces que se vaya a crear este componente con la info que necesita cada uno
function TaskCard({task}) {

  const {deleteTask} = useContext(TaskContext)

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={()=>{deleteTask(task.id)}}>Eliminar tarea!</button>
    </div>
  );
}

export default TaskCard;
