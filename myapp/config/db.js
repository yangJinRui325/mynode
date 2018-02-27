//引入数据库模块
var mysql = require("mysql");
var pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"node"
});

function query(sql,callback){
    pool.getConnection(function(err,connection){
        connection.query(sql, function (err,rows) {
            callback(err,rows);
            connection.release();
        });
    });
}

exports.query = query;