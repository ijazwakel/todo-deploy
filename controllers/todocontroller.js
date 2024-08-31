import { TodoModel } from "../models/todomodels.js";

export const addTodo = (req, res) => {
  const todo = new TodoModel(req.body);

  todo
    .save()
    .then((todo) => {
      return res.status(200).json({ yourtodo: todo });
    })
    .catch((err) => {
      return res.status(403).json({ yourtodo: todo });
    });
};

export const getTodo = (req, res) => {
  TodoModel.find()
    .then((todo) => {
      return res.status(200).json(todo);
    })
    .catch((err) => {
      return res.status(403).json({ error: err.message });
    });
};
