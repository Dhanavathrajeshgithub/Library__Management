import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_LIBRARY_MANAGEMENT_SYSTEM",
    })
    .then(() => {
      console.log("DataBase connected successfully");
    })
    .catch((err) => {
      console.log("Error connecting DB", err);
    });
};
