import express from 'express';
import userRoutes from './src/Routes/UserRoutes.js';
import { UserController } from './src/Controllers/UserController.js';

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.use('/users', userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server Error' });
});

export default app;
