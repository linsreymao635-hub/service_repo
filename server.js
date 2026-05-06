import app from "./app.js";
import "./config/db.js";

require('dotenv').config();
const app = require('./app');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 3000;

// connect DB
connectDB();

app.listen(3000, () => {
  console.log(`Server running on port http://localhost:3000`);
});