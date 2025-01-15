"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
// export class Todo {
//   constructor(public id: string, public todo: string, public completed: boolean) {}
// }
// const mongoose = require('mongoose');
const mongoose_1 = require("mongoose");
const todoSchema = new mongoose_1.Schema({
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
exports.Todo = (0, mongoose_1.model)('Todo', todoSchema);
