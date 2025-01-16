import { Todo } from '../models/todo';
import { RequestHandler } from 'express';

export const createTodo: RequestHandler = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        todo: newTodo,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
export const getAllTodo: RequestHandler = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      status: 'success',
      data: todos,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
export const deleteTodo: RequestHandler = async (req, res) => {
  try {
    await Todo.deleteOne({ id: req.params.id });
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
export const updateTodo: RequestHandler = async (req, res) => {
  try {
    const newTodo = await Todo.updateOne({ id: req.params.id });
    res.status(204).json({
      status: 'success',
      data: newTodo,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
