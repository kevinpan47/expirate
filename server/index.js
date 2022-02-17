const fastify = require('fastify')({
    logger: true
})

const addFood = require(`${__dirname}/api/addFood`);

fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
})

fastify.post('/add', addFood.addFood);

// Run the server!
fastify.listen(3000, function (err, address) {
if (err) {
    fastify.log.error(err)
    process.exit(1)
}
// Server is now listening on ${address}
})