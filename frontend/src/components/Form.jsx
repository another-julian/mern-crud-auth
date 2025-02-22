import { useForm } from "react-hook-form";
import { createTask } from "../services/tasksService";

export default function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    createTask(data);
  });

  return (
    <div className="w-full max-w-96">
      <h2 className="mb-10 text-[1.5rem] text-center font-bold">Task</h2>
      <form
        onSubmit={onSubmit}
        className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-50  shadow-md rounded-lg px-10 py-10 mb-4 flex-col align-middle justify-center"
      >
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2">
            Title
            <input
              className="shadow appearance-none border dark:border-none  dark:bg-gray-600 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline mt-2"
              type="text"
              placeholder="e.g: Make the dinner"
              {...register("title", {
                required: true,
              })}
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2">
            Description
            <textarea
              className="shadow appearance-none border dark:border-none  dark:bg-gray-600 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline mt-2"
              type="password"
              rows="3"
              placeholder="Description"
              {...register("description", {
                required: false,
              })}
            />
          </label>
        </div>
        <div className="mb-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer w-full"
            type="submit"
          >
            Create
          </button>
        </div>
        <div className="mb-4">
          <p>Don't you hava an account? </p>
        </div>
      </form>
    </div>
  );
}
