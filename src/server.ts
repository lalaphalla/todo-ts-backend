const mongoose = require('mongoose');
const dotenv = require('dotenv');
import { connect } from 'mongoose';

dotenv.config({ path: './.env' });

// const app = require('./app');
import app from './app';

const DB = process.env.DATABASE!;
// console.log(__filename);
connect(DB, {
  // for deprecation warning
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then((con) => {
  console.log('DB connection success');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
