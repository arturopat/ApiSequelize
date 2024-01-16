import { Task } from "../models/Task.js";
export const getTask = async (req, res) => {
  const taks = await Task.findAll();
  res.json(taks);
};
export const createTask = async (req, res) => {
  const { name, done, projectId } = req.body;

  const newTask = await Task.create({
    name,
    done,
    projectId,
  });

  res.json(newTask);
};
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  const result = await Task.destroy({
    where: {
      id,
    },
  });
  res.status(500);
};
export const updateTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOne({
    where: { id },
  });

  task.set(req.body);
  await task.save();
};
export const getTas = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findOne({ where: { id } });
  res.json(task);
};
