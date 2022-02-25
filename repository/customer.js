const connection = require("./database");

class customerRepository {
    static findAll(){
        return connection.execute('SELECT * FROM `customer`;');
    }
    static findById(customerId){
        return connection.execute(`SELECT * FROM customer WHERE id=${customerId};`);
    }
    static save(customer){
        let sql = `INSERT INTO customer (lastname, firstname, email, phone, old) VALUES ('${customer.lastname}', ${customer.firstname}, '${customer.phone}', ${customer.old});`
        return connection.execute(sql);
    }
    /*static update(customerId, customer){
        let sql = `UPDATE customer SET name='${customer.name}', montant=${customer.montant}, description='${customer.description}', stock=${customer.stock}, promo_id=${customer.promo_id} WHERE id=${customerId};`;
        return connection.execute(sql);
    }*/
    static delete(customerId){
        return connection.execute(`DELETE FROM customer WHERE id=${customerId};`);
    }
}

module.exports = customerRepository;
