const db = require('../db/config');

const queryStringSchema = {
    type: 'object',
    properties: {
        userid: {type: 'string'}
    }
}

exports.schema = {
    querystring: queryStringSchema
}

exports.getFood = (req, res) => {
    const userID = req.query.userid
    console.log(userID)
    
    db.all(`SELECT * FROM food`, (err, rows) => {
        if (err) {
            console.log(err);
            res.code(500).send("Database error");
        } else {
            console.log("Got foods from food table")
            console.log(rows);
            res.code(201).send("Got Items");
        }
    })
};