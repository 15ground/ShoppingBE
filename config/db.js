const mongoose = require("mongoose");

const connString = process.env.DATABASE_CONNECTION;
// Tao 1 ham async de ket noi den DB vi day la 1 thao tac bat dong bo
const connectDatabase = async () => {
  try {
    await mongoose.connect(connString, {
    //   useCreateIndex: true,
    //   useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Connect SUCCESS to database!`);
  } catch (error) {
    console.log(`Connect FAILED to database!`);
    console.log(`We have an error: ${error}`);
    // Thoat khoi qua trinh ket noi voi trang thang la 1
    process.exit(1);
  }
};
module.exports = connectDatabase;
