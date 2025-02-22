import {
  getTasksRequest,
  getTaskRequest,
  createTaskRequest,
} from "../api/tasks";

export const getTasks = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await getTasksRequest();
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const getTask = async (id) => {
  try {
    const res = await getTaskRequest(id);
    console.log(res);
  } catch (error) {
    console.log(error.response);
  }
};

export const createTask = async (task) => {
  try {
    console.log(task);
    const res = await createTaskRequest(task);
    console.log(res);
  } catch (error) {
    console.log(error.response.data);
  }
};
