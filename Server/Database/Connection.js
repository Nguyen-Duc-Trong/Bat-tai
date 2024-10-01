const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
function Connection() {
  mongoose
    .connect(
      process.env.MONGO_URI
    )
    .then(() => {
      console.log("DB Connected Succesfully");
    })
    .catch((error) => {
      console.log("DB Failed to connect", error);
    });
}
module.exports = { Connection };
