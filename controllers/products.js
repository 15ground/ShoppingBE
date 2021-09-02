exports.getAllProducts = (req, res, next) =>{
    res.send("Get all products")
};

exports.createNewProduct = (req, res, next) =>{
    res.send("Create a products")
};
exports.updateProduct = (req, res, next) =>{
    res.send("Update a products")
};
exports.deleteProduct = (req, res, next) =>{
    res.send("Delete a products")
};