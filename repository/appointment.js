const connection = require("./database");

class appointmentRepository {
    static findAll(){
        return connection.execute('SELECT * FROM `appointment`;');
    }
    static findById(appointmentId){
        return connection.execute(`SELECT * FROM appointment WHERE id=${appointmentId};`);
    }
    static save(appointment){
        let sql = `INSERT INTO appointment (event, description, date) VALUES ('${appointment.event}', ${appointment.description}, '${appointment.date}');`
        return connection.execute(sql);
    }
    /*static update(appointmentId, appointment){
        let sql = `UPDATE appointment SET name='${appointment.name}', montant=${appointment.montant}, description='${appointment.description}', stock=${appointment.stock}, promo_id=${appointment.promo_id} WHERE id=${appointmentId};`;
        return connection.execute(sql);
    }*/
    static delete(appointmentId){
        return connection.execute(`DELETE FROM appointment WHERE id=${appointmentId};`);
    }
}

module.exports = appointmentRepository;
