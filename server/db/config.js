const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/sqlite.db', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Connected to db");
    };
    
})

db.run("CREATE TABLE IF NOT EXISTS food (userid text, food_name text, expires number, notes text)", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Created food table")
    }
});

db.run("CREATE TABLE IF NOT EXISTS users (name text)", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Created users table")
    }
});

module.exports = db;