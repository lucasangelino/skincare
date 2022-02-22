const mongoose = require("mongoose");

const dbConnection = async () => {
  console.log(process.env.DB_CON_STRING);
  try {
    mongoose.connect(process.env.DB_CON_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB online");
  } catch (error) {
    console.log(error);
    throw new Error(`Database connection error: ${error}`);
  }
};

module.exports = {
  dbConnection,
};
