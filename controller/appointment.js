const appointmentRepository = require("../repository/appointment");

exports.getAllAppointments = async (req, res, next) => {
    try{
        const [appointment, _field] = await appointmentRepository.findAll();
        res.status(200).json({appointment});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.getAppointment = async (req, res, next) => {
    try{
        const appointmentId = parseInt(req.params.id);
        const [appointment, _field] = await appointmentRepository.findById(appointmentId);
        res.status(200).json({appointment});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.createAppointment = async (req, res, next) => {
    try{
        const appointment = req.body;
        const [appointmentCreated, _field] = await appointmentRepository.save(appointment);
        res.status(200).json({appointmentCreated});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.updateAppointment = async (req, res, next) => {
    try{
        const appointmentId = parseInt(req.params.id);
        const appointment = req.body;
        const [appointmentUpdated, _field] = await appointmentRepository.update(appointmentId, appointment);
        res.status(200).json({appointmentUpdated});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.deleteAppointment = async (req, res, next) => {
    try{
        const appointmentId = parseInt(req.params.id);
        const [appointment, _field] = await appointmentRepository.delete(appointmentId);
        res.status(200).json({appointment});
    }catch (e) {
        console.log(e);
        next(e);
    }
}
