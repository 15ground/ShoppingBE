require("dotenv").config();
const express = require("express");
const connectDatabase = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

connectDatabase();

const PORT = process.env.PORT || 3002;
const app = express();

// Middleware
app.use(express.json());

// Router
app.use("/api/products", require("./routes/products"));

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server on PORT: " + PORT);
});
