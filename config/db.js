import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectDB = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@shad.txmwm.mongodb.net/?retryWrites=true&w=majority&appName=Shad/delish-door`
    )
    .then(() => console.log("DB Connected"));
};
