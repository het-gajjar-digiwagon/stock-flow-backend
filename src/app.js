import express from 'express';
import indexRouter from './routes/index.route.js';
import errorHandler from './middlewares/errorHandler.middleware.js';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, __res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

app.use('/api/v1', indexRouter);

app.use('/api', (_req, res) => {
  res.status(404).send({ message: 'Route Not Found' });
});

app.use(errorHandler);

export default app;
