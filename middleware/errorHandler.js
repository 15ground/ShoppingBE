const ErrorRespone = require("../utils/errorRespone");

const errorHandler = (err, req, res, next) => {
  console.log(`We have an error ${err}`);

  let error = { ...err };

  error.message = err.message;

  if (err.name === "CastError") {
    const message = "Resource not found!";
    error = new ErrorRespone(message, 404);
  }

  if (err.code === 11000) {
    const message = "Duplicate field value entered";
    error = new ErrorRespone(message, 400);
  }
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors)
      .map((error) => error.message)
      .join(",");
    error = new ErrorRespone(message, 400);
  }
  res.status(error.statusCode || 500).json({
      success: false,
      error: error.message || 'Server has an error!'
  });
};
module.exports = errorHandler;
