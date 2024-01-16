import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";
// minuto 43:22
export const getProjects = async (req, res) => {
  const projects = await Project.findAll();
  res.json(projects);
};

export const createProject = async (req, res) => {
  const { name, priority, description } = req.body;

  const newProject = await Project.create({
    name,
    description,
    priority,
  });

  res.json(newProject);
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, priority, description } = req.body;

  const project = await Project.findByPk(id);

  project.name = name;
  project.priority = priority;
  project.description = description;
  await project.save();

  res.json(project);
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;
  await Project.destroy({
    where: {
      id,
    },
  });
  res.sendStatus(204);
};

export const getProject = async (req, res) => {
  const { id } = req.params;

  const resulta = await Project.findOne({
    where: id,
  });
  res.json(resulta);
};

export const getProjectTasks = async (req, res) => {
  const { id } = req.params;
  const tasks = await Task.findAll({
    where: {
      projectId: id,
    },
  });
  res.json(tasks);
};
