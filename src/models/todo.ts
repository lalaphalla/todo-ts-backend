// export class Todo {
//   constructor(public id: string, public todo: string, public completed: boolean) {}
// }
// const mongoose = require('mongoose');
import { Schema, model } from 'mongoose';

const todoSchema = new Schema({
  id: {
    type: String,
  },
  todo: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

//'Tour' name of schema
export const Todo = model('Todo', todoSchema);

