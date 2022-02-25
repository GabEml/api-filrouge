const customerRepository = require("../repository/customer");

exports.getAllCustomers = async (req, res, next) => {
    try{
        const [customers, _field] = await customerRepository.findAll();
        res.status(200).json({customers});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.getCustomer = async (req, res, next) => {
    try{
        const customerId = parseInt(req.params.id);
        const [customer, _field] = await customerRepository.findById(customerId);
        res.status(200).json({customer});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.createCustomer = async (req, res, next) => {
    try{
        const customer = req.body;
        const [customerCreated, _field] = await customerRepository.save(customer);
        res.status(200).json({customerCreated});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.updateCustomer = async (req, res, next) => {
    try{
        const customerId = parseInt(req.params.id);
        const customer = req.body;
        const [customerUpdated, _field] = await customerRepository.update(customerId, customer);
        res.status(200).json({customerUpdated});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.deleteCustomer = async (req, res, next) => {
    try{
        const customerId = parseInt(req.params.id);
        const [customer, _field] = await customerRepository.delete(customerId);
        res.status(200).json({customer});
    }catch (e) {
        console.log(e);
        next(e);
    }
}
