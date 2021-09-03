const mongoose = require("mongoose");

const mongoosePaginate = require("mongoose-paginate-v2");

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  name: {
    type: String,
    required: [true, "Vui long dien ten san pham!"],
  },
  images: {
    type: String,
    required: [true, "Vui long dien link anh san pham!"],
  },
  price: {
    type: Number,
    required: [true, "Vui long dien gia ban san pham!"],
  },
  description: String,
});
ProductsSchema.plugin(mongoosePaginate);
const Products = mongoose.model("Products", ProductsSchema);
module.exports = Products;
