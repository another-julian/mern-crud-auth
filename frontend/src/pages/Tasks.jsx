import { useEffect, useState } from "react";
import { getTasks } from "../services/tasksService";
import { Link } from "react-router";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTasks()
      .then((tasks) => {
        console.log(tasks);
        setTasks(tasks);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const tasksElements = tasks.map((task) => {
    return (
      <Link key={task._id}>
        <article className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-50  shadow-md rounded-lg px-10 py-10 mb-4 flex-col align-middle justify-center">
          <h4 className="block  text-sm font-bold mb-4">{task.title}</h4>
          <p className="mb-2">{task.description}</p>
        </article>
      </Link>
    );
  });

  console.log("tasks: ", tasks);
  console.log(tasksElements);
  return (
    <main className="flex-col items-center justify-center text-center">
      <h1 className="mb-10">Tasks</h1>
      <div className="grid grid-cols-4 gap-4">
        {isLoading ? <p>Loading tasks</p> : tasksElements}
      </div>
    </main>
  );
}

export default Tasks;
