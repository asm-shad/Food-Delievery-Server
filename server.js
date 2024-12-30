import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// app config
const app = express();
const port = 8000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// API Endpoints
app.use("/api/food", foodRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on http:localhost:${port}`);
});

// const uri = "mongodb+srv://<db_username>:<db_password>@shad.txmwm.mongodb.net/?retryWrites=true&w=majority&appName=Shad";
