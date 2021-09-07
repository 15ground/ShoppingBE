const Products = require("../model/Products");

const asyncHandler = require("../middleware/asynHandler");

const ErrorRespone = require("../utils/errorRespone");

exports.getAllProducts = asyncHandler(async (req, res, next) => {
  const products = await Products.find();
  res.status(200).json({
    success: true,
    data: products,
  });
});
exports.getProductById = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const products = await Products.findById(id);
  res.status(200).json({
    success: true,
    data: products,
  });
});
exports.createNewProduct = asyncHandler(async (req, res, next) => {
  const products = await Products.create(req.body);
  res.status(201).json({
    success: true,
    data: products,
  });
});

exports.updateProduct = asyncHandler(async (req, res, next) => {
  let products = await Products.findById(req.params.id);
  if (!products) {
    return next(
      new ErrorRespone(`Khong tim thay san pham co ID la: ${req.params.id}`),
      404
    );
  }
  products = await Products.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(201).json({
    success: true,
    data: products,
  });
});

exports.deleteProduct = asyncHandler(async (req, res, next) => {
  let products = await Products.findById(req.params.id);
  if (!products) {
    return next(
      new ErrorRespone(`Khong tim thay san pham co ID la: ${req.params.id}`),
      404
    );
  }
  await products.remove();
  res.status(201).json({
    success: true,
    data: {},
  });
});
