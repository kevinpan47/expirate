const fastify = require('fastify')({
    logger: true
})

const Ajv = require('ajv');
const addFood = require(`${__dirname}/api/addFood`);


const ajv = new Ajv({
    removeAdditional: true,
    useDefaults: true,
    allErrors: true
})

fastify.setValidatorCompiler(({schema, method, url, httpPart}) => {
    return ajv.compile(schema);
})

fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
})

fastify.post('/add', {schema: addFood.schema}, addFood.addFood);

// Run the server!
fastify.listen(3001, function (err, address) {
if (err) {
    fastify.log.error(err)
    process.exit(1)
}
// Server is now listening on ${address}
})