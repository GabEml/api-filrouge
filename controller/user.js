const userRepository = require("../repository/user");

exports.getAllUsers = async (req, res, next) => {
    try{
        const [users, _field] = await userRepository.findAll();
        res.status(200).json({users});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.getUser = async (req, res, next) => {
    try{
        const userId = parseInt(req.params.id);
        const [user, _field] = await userRepository.findById(userId);
        res.status(200).json({user});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.createUser = async (req, res, next) => {
    try{
        const user = req.body;
        const [userCreated, _field] = await userRepository.save(user);
        res.status(200).json({userCreated});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.updateUser = async (req, res, next) => {
    try{
        const userId = parseInt(req.params.id);
        const user = req.body;
        const [userUpdated, _field] = await userRepository.update(userId, user);
        res.status(200).json({userUpdated});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.deleteUser = async (req, res, next) => {
    try{
        const userId = parseInt(req.params.id);
        const [user, _field] = await userRepository.delete(userId);
        res.status(200).json({user});
    }catch (e) {
        console.log(e);
        next(e);
    }
}
