var mysql = require('mysql');
var express = require('express');
var app = express();
const util = require('util');
var sql = "SELECT * FROM event";



var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Gtsko92h",
    database: "example_db"
});

const query = util.promisify(conn.query).bind(conn);
(async () => {
    try {
        const rows = await query(sql);
        console.log(rows);
        app.get('/', function (req, res) {
            res.send(rows);
        })
    } finally {
        conn.end();
    }
})()

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

