import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find({
    user: req.user.id,
  });
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title, description, date } = req.body;

  const newTask = new Task({
    title,
    description,
    date,
    user: req.user.id,
  });

  const savedTask = await newTask.save();
  res.json(savedTask.toJSON());
};

export const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id).populate("user");
  if (!task) return res.status(404).json({ mesage: "Task not found" });
  res.json(task.toJSON());
};

export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!task) return res.status(404).json({ mesage: "Task not found" });
  res.json(task.toJSON());
};

export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ mesage: "Task not found" });
  return res.sendStatus(204);
};
