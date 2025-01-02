import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@shad.txmwm.mongodb.net/delish-door?retryWrites=true&w=majority&appName=Shad`
    );
    console.log("DB Connected");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};
