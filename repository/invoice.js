const connection = require("./database");

class invoiceRepository {
    static findAll(){
        return connection.execute('SELECT * FROM `facturation`;');
    }

    static findById(invoiceId){
        return connection.execute(`SELECT * FROM facturation WHERE id=${invoiceId};`);
    }

    static save(invoice){
        let sql=`INSERT INTO facturation (name, montant, commentary, user_id, promo_id) VALUES ("${invoice.invoice.name}", ${parseInt(invoice.invoice.montant)}, "${invoice.commentary}", ${invoice.user_id}, ${invoice.invoice.promo_id});`
        return connection.execute(sql);
    }

    static update(invoiceId, invoice){
        let sql=`UPDATE facturation SET name=${invoice.name}, montant=${invoice.montant}, commentary='${invoice.commentary}', user_id=${invoice.user_id}, promo_id=${invoice.promo_id} WHERE id=${invoiceId};`;
        return connection.execute(sql);
    }

    static delete(invoiceId){
        return connection.execute(`DELETE FROM facture WHERE id = ${invoiceId};`);
    }
}

module.exports = invoiceRepository;
