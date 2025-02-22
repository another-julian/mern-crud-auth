import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../services/tasksService";
import { Link } from "react-router";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (id) => {
    console.log("handle click");
    deleteTask(id)
      .then((res) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
      })
      .catch((error) => {
        console.log("reject", error);
      });
  };

  useEffect(() => {
    console.log("getting tasks");
    getTasks()
      .then((tasks) => {
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
      <article
        key={task._id}
        className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-50  shadow-md rounded-lg px-10 py-10 mb-4 flex-col align-middle justify-center min-w-60"
      >
        <h4 className="block  text-sm font-bold mb-4">{task.title}</h4>
        <p className="mb-6">{task.description}</p>
        <Link to={`/tasks/update/${task._id}`}>
          <div className="mb-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer w-full">
            Edit
          </div>
        </Link>

        <div className="">
          <button
            className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer w-full"
            onClick={() => {
              handleClick(task._id);
            }}
          >
            Delete
          </button>
        </div>
      </article>
    );
  });

  console.log(tasksElements);
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="mb-10">Tasks</h1>
      <div className="grid grid-cols-4 gap-4">
        {isLoading ? <p>Loading tasks</p> : tasksElements}
      </div>
      <Link
        to="/tasks/add"
        className="w-full max-w-60 bg-green-600 min-h-10 flex items-center justify-center mt-4 font-bold rounded"
      >
        New Task
      </Link>
    </div>
  );
}

export default Tasks;
