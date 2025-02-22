import {
  getTasksRequest,
  getTaskRequest,
  createTaskRequest,
  deleteTaskRequest,
  updateTaskRequest,
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
  return new Promise(async (resolve, reject) => {
    try {
      const res = await getTaskRequest(id);
      console.log(res);
      resolve(res.data);
    } catch (error) {
      console.log(error.response);
      reject(error);
    }
  });
};

export const createTask = async (task) => {
  try {
    const res = await createTaskRequest(task);
    console.log(res);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const deleteTask = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await deleteTaskRequest(id);
      resolve(res.status);
    } catch (error) {
      reject(error);
    }
  });
};
export const updateTask = async (task) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await updateTaskRequest(task);
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
};
