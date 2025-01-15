import express, { Request, Response, NextFunction } from 'express';
const cors = require('cors');

import todoRoutes from './routes/todo';
import { json, urlencoded } from 'body-parser';
const app = express();

app.use(cors());

app.use(json());
app.use('/todos', todoRoutes);

// app.use('/api/todos', todoRoutes);
app.use(urlencoded({ extended: true }));
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

export default app;
