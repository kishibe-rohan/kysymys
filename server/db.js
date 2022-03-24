const mongoose = require("mongoose");

module.exports.connect = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB started");
    })
    .catch((error) => console.log("Error connecting to DB", error));
};
