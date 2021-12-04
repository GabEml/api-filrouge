const productRepository = require("../repository/product");

exports.getAllProducts = async (req, res, next) => {
    try{
        const [products, _field] = await productRepository.findAll();
        res.status(200).json({products});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.getProduct = async (req, res, next) => {
    try{
        const productId = parseInt(req.params.id);
        const [product, _field] = await productRepository.findById(productId);
        res.status(200).json({product});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.createProduct = async (req, res, next) => {
    try{
        const product = req.body;
        const [productCreated, _field] = await productRepository.save(product);
        res.status(200).json({productCreated});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.updateProduct = async (req, res, next) => {
    try{
        const productId = parseInt(req.params.id);
        const product = req.body;
        const [productUpdated, _field] = await productRepository.update(productId, product);
        res.status(200).json({productUpdated});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.deleteProduct = async (req, res, next) => {
    try{
        const productId = parseInt(req.params.id);
        const [product, _field] = await productRepository.delete(productId);
        res.status(200).json({product});
    }catch (e) {
        console.log(e);
        next(e);
    }
}
