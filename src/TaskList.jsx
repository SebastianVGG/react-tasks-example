import TaskCard from './TaskCard'

function TaskList({tasks}) {


  if (tasks.length === 0) {
    return <h1>Aún no hay tareas.</h1>;
  }

  return (
    <div>
      {tasks.map((task) => {
        return (
          <TaskCard key={task.id} task={task}/>
        );
      })}
    </div>
  );
}

export default TaskList;
