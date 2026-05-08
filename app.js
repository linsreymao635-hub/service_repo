import express from "express";
import userRoutes from "./src/Routes/UserRoutes.js";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

export default app;