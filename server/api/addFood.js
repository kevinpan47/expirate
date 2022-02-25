const bodySchema = {
    type: 'object',
    required: ['userID'],
    properties: {
        userID: {type: 'string'},
        foodName: {type: 'string'},
        expires: {type: 'string'},
        notes: {type: 'string'}
    }
}

exports.schema = {
    body: bodySchema
}

exports.addFood = (req, res) => {
    const item = req.body;

    let userID = req.body.userID ? req.body.userID : ""
    console.log(req.body.userID)

};


// Schema sketch:
/**
 * userid
 * food name
 * expiration date
 * notes
 */