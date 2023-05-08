import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/connectDB.js";
import router from "./routes/assignments.js";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
dotenv.config();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/assignments", router);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("Connected to DB...");
    app.listen(port, () => console.log(`Server listening on post ${port}...`));
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

start();
