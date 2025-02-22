export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

//for axios
export const LOGIN = `/login`;
export const REGISTER = `/register`;
export const VERIFY_TOKEN = `/auth/verify`;

export const TASKS = `/tasks`;
export const TASK_BY_ID = (id) => `${TASKS}/${id}`;

//for fetch
export const LOGIN_ENDPOINT = `${API_BASE_URL}/login`;
export const REGISTER_ENDPOINT = `${API_BASE_URL}/register`;
export const VERIFY_TOKEN_ENDPOINT = `${API_BASE_URL}/auth/verify`;

export const TASKS_ENDPOINT = `${API_BASE_URL}/tasks`;
export const TASK_BY_ID_ENDPOINT = (id) => `${TASKS}/${id}`;
