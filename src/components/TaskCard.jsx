import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'


//A pesar de que puedo obtener tasks desde el contexto aquí no se usaría por lógica de la aplicación ya que cada TaskCard es creado por TaskList y TaskList le esta pasando el argumento por cada TaskCard unico y depende de TaskList las veces que se vaya a crear este componente con la info que necesita cada uno
function TaskCard({task}) {

  const {deleteTask} = useContext(TaskContext)

  return (
    <div className='bg-gray-800 text-white p-2 rounded-r-md'>
      <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
      <p className='text-gray-500 text-sm'>{task.description}</p>
      <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-300' onClick={()=>{deleteTask(task.id)}}>Eliminar tarea!</button>
    </div>
  );
}

export default TaskCard;
