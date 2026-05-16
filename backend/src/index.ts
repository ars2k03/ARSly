import express, { type Application } from "express";
import router from "./routes/url.route";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const port: number = 3000;

mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => console.log("MongoDB is Connected Succesfully"))
  .catch((e) => console.log(`Connection Failed : ${e}`));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/url", router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});