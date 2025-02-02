import express from "express";
import cors from "cors";
import "dotenv/config";
import debug from "debug";
import connectDB from "./config/mongodb-connection.config.js";

import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";

connectDB();

const app = express();
const PORT = process.env.PORT || 4000;
const debugging = debug("development:app");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(PORT, () => {
  debugging("Server started on PORT: " + PORT);
});
