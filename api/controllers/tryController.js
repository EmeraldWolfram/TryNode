'use strict';

const sqlite3 = require('sqlite3').verbose();
var db;

function openDB(){
    db  = new sqlite3.Database('./TryNode.db', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
    });
}
    
function closeDB(){
    db.close();
    console.log("Close DB");
}

exports.getUserList = function(req, res) {
    openDB();
    
    db.all("SELECT * FROM USER_TABLE", [], (err, rows)=> {
        if(err){
            console.log(err.message);
            res.json(err.message);
        }
        res.json(rows);
    });
    closeDB();
};


exports.createUser = function(req, res) {
    openDB();

    db.run("INSERT INTO USER_TABLE(user_id, user_name) VALUES(?, ?)", [/* input UserId, UserName */], (err)=> {
        if(err){
            console.log(err.message);
            res.json(err.message);
        }
        res.json(rows);
    });
    
    closeDB();
};


exports.getUser = function(req, res) {
    let userId  = req.params.userId;
    openDB();
    db.get("SELECT * FROM USER_TABLE WHERE user_id=?", [userId], (err, row) => {
        if (err) {
            console.log(err.message);
            res.json(err.message);
        };
        res.json(row.user_name);
    });
    closeDB();
};


exports.updateUser = function(req, res) {
    return res.json("Get a USER");
};


exports.deleteUser = function(req, res) {
    return res.json("Delete a USER");
};
