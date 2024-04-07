import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useState, useEffect } from "react";
import { tasks as data } from "./data/tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

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

  function deleteTask(taskId) {
    let newArrayTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newArrayTasks);
  }

  return (
    <>
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      <TaskForm createTask={createTask} />
    </>
  );
}

export default App;
