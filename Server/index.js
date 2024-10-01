const express = require("express");
const dotenv = require("dotenv");
const { Connection } = require("./Database/Connection");
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
