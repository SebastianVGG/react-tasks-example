function TaskList({tasks}) {


  if (tasks.length === 0) {
    return <h1>Aún no hay tareas.</h1>;
  }

  return (
    <div>
      {tasks.map((task, i) => {
        return (
          <div key={i}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;
