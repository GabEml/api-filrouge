const connection = require("./database");

class userRepository {
     static findAll(){
         return connection.execute('SELECT * FROM `user`;');
    }
    static findById(userId){
        return connection.execute(`SELECT * FROM user WHERE id = ${userId};`);
    }
    static save(user){
         let sql="INSERT INTO user (name, firstname, email, password) VALUES ('"+ user.name+"', '"+user.firstname+"', '"+user.email+"', '"+user.password+"');";
        return connection.execute(sql);
    }
    static update(userId, user){
         let sql=`UPDATE user SET name='${user.name}', firstname='${user.firstname}', email='${user.email}', password='${user.password}' WHERE id=${userId};`;
        return connection.execute(sql);
    }
    static delete(userId){
        return connection.execute(`DELETE FROM user WHERE id=${userId};`);
    }
}

module.exports = userRepository;
