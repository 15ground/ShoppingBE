const express = require("express");
const productsController = require("../controllers/products");
const router = express.Router();

// @route - api/products/
router
  .route("/")
  .get(productsController.getAllProducts)
  .post(productsController.createNewProduct);
// @route - api/products/:id
router
  .route("/:id")
  .put(productsController.updateProduct)
  .delete(productsController.deleteProduct);
router.route("/delete/:id").post(productsController.deleteProduct);
router.route("/edit/:id").post(productsController.updateProduct);
router.route("/:id").get(productsController.getProductById);
module.exports = router;
