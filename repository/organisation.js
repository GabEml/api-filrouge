const connection = require("./database");

class organisationRepository {
    static findAll(){
        return connection.execute('SELECT * FROM `organisation`;');
    }

    static findById(organisationId){
        return connection.execute(`SELECT * FROM organisation WHERE id=${organisationId};`);
    }

    static save(organisation){
        let sql=`INSERT INTO organisation (name, montant, commentary, user_id, promo_id) VALUES ("${organisation.organisation.name}", ${parseInt(organisation.organisation.montant)}, "${organisation.commentary}", ${organisation.user_id}, ${organisation.organisation.promo_id});`
        return connection.execute(sql);
    }

    static update(organisationId, organisation){
        let sql=`UPDATE organisation SET name=${organisation.name}, montant=${organisation.montant}, commentary='${organisation.commentary}', user_id=${organisation.user_id}, promo_id=${organisation.promo_id} WHERE id=${organisationId};`;
        return connection.execute(sql);
    }

    static delete(organisationId){
        return connection.execute(`DELETE FROM facture WHERE id = ${organisationId};`);
    }
}

module.exports = organisationRepository;
