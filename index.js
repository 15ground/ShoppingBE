require("dotenv").config();
const express = require("express");
const connectDatabase = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

connectDatabase();

const PORT = process.env.PORT || 3002;
const app = express();

// Middleware
app.use(express.json());

// add header cho phép các trang có domain khác với domain của backend gọi được api
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})


// Router
app.use("/api/products", require("./routes/products"));

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server on PORT: " + PORT);
});
