import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { useState, useEffect } from "react";
import { tasks as data } from "./tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([...tasks, {
      id: tasks.length,
      title: task.title,
      description: task.description
    }]);
  }

  return (
    <>
      <TaskList tasks={tasks} />
      <TaskForm createTask={createTask} />
    </>
  );
}

export default App;
