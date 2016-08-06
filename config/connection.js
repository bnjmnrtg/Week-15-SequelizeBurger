var mysql = require('mysql');
var source = {
    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgersDB'
    },
    livehost: {
        port: 3306,
        host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'nkgxmtcfd395n3p8',
        password: 'kq2v5lomhqeeuuc9',
        database: 'f7h0holrlqymuzte'
    }
}

var connection = mysql.createConnection(source.livehost);
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
