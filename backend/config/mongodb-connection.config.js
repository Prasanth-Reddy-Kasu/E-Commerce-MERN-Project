import mongoose from "mongoose";
import debug from "debug";

const debugging = debug("development:config:mongodb-connection");

/**
 * Establishes a connection to the MongoDB database
 * @async
 * @function connectDB
 * @throws {Error} If connection fails
 */
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    debugging("Database connection established!");
  } catch (error) {
    debugging("Error connecting to database:", error.message);
    throw error;
  }
};
export default connectDB;
