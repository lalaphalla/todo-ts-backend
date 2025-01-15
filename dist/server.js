"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const mongoose_1 = require("mongoose");
dotenv.config({ path: './.env' });
// const app = require('./app');
const app_1 = __importDefault(require("./app"));
const DB = process.env.DATABASE;
// console.log(__filename);
(0, mongoose_1.connect)(DB, {
    // for deprecation warning
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then((con) => {
    console.log('DB connection success');
});
const port = process.env.PORT || 3000;
app_1.default.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
