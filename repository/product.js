const connection = require("./database");

class productRepository {
    static findAll(){
        return connection.execute('SELECT * FROM `produit`;');
    }
    static findById(productId){
        return connection.execute(`SELECT * FROM produit WHERE id=${productId};`);
    }
    static save(product){
        let sql = `INSERT INTO produit (name, montant, description, stock, promo_id) VALUES ('${product.name}', ${product.montant}, '${product.description}', ${product.stock}, ${product.promo_id});`
        return connection.execute(sql);
    }
    static update(productId, product){
        let sql = `UPDATE produit SET name='${product.name}', montant=${product.montant}, description='${product.description}', stock=${product.stock}, promo_id=${product.promo_id} WHERE id=${productId};`;
        return connection.execute(sql);
    }
    static delete(productId){
        return connection.execute(`DELETE FROM produit WHERE id=${productId};`);
    }
}

module.exports = productRepository;
