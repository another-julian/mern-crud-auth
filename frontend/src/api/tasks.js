import axios from "./axios";
import { TASKS, TASK_BY_ID } from "../config/api";

export const getTasksRequest = () => axios.get(TASKS);
export const getTaskRequest = (id) => axios.get(TASK_BY_ID(id));
export const createTaskRequest = (task) => axios.post(TASKS, task);
export const updateTaskRequest = (task) =>
  axios.put(TASK_BY_ID(task._id), task);
export const deleteTaskRequest = (id) => axios.delete(TASK_BY_ID(id));
