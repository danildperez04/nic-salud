import express from 'express';
import cors from 'cors';
import { notFoundHandler } from './middlewares/notfound';
import api from './routes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

// Middlewares
app.use(cors())
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.use('/api', api);

// Use the notFoundHandler middleware
app.use(notFoundHandler);

// Error handling
app.use(errorHandler);

export default app;