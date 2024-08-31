import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import todorouter from "./routes/todoroutes.js";
import path from "path";
import { fileURLToPath } from "url";

// Get the __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// App setup
const app = express();
const port = 3000;

// DB connection
async function main() {
  try {
    await mongoose.connect(process.env.DB_ADDRESS);
    console.log("Connected to MongoDB successfully!");
  } catch (err) {
    console.error(err);
  }
}

// Call the main function to initiate the connection
main();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use('/todo', todorouter);

// Serve static files
app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));

// Fallback route for SPA (Single Page Application)
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

// Server initialization
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
