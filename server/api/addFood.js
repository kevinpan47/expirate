const db = require('../db/config');

const bodySchema = {
    type: 'object',
    required: ['userID', 'foodName', 'expires'],
    properties: {
        userID: {type: 'string'},
        foodName: {type: 'string'},
        expires: {type: 'number'},
        notes: {type: 'string'}
    }
}

exports.schema = {
    body: bodySchema
}

exports.addFood = (req, res) => {
    const item = req.body;

    console.log(item);
    if (req.body.notes == null) {item.notes == ""}
    
    db.run(`INSERT INTO food(userid, food_name, expires, notes) VALUES(?, ?, ?, ?)`, [item.userID, item.foodName, item.expires, item.notes], (err) => {
        if (err) {
            console.log(err);
            res.code(500).send("Database error");
        } else {
            console.log("Inserted into food table")
            res.code(201).send("Added Item");
        }
    })
};


// Schema sketch:
/**
 * userid
 * food name
 * expiration date
 * notes
 */