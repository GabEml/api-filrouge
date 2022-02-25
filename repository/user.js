const connection = require("./database");

class userRepository {
     static findAll(){
         return connection.execute('SELECT * FROM `user`;');
    }
    static findById(userId){
        return connection.execute(`SELECT * FROM user WHERE id = ${userId};`);
    }
    static save(user){
         let sql="INSERT INTO user (lastname, firstname, email, date, id_creator) VALUES ('"+ user.lastname+"', '"+user.firstname+"', '"+user.email+"', '"+user.date+"', '"+user.id_creator+"');";
        return connection.execute(sql);
    }
    /*static update(userId, user){
         let sql=`UPDATE user SET lastname='${user.lastname}', firstname='${user.firstname}', email='${user.email}', date='${user.date}' WHERE id=${userId};`;
        return connection.execute(sql);
    }*/
    static delete(userId){
        return connection.execute(`DELETE FROM user WHERE id=${userId};`);
    }
}

module.exports = userRepository;
