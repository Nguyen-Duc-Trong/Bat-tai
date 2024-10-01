import express from "express";
import dotenv from "dotenv";
import { Connection } from "./Database/Connection.js";
const app = express();
dotenv.config();
Connection();
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Server is listening on port ${process.env.PORT}`);
});
