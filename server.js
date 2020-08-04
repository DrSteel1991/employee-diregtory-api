const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
const dotEnv = require('dotenv');

const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

dotEnv.config();

const app = express();

//cors
app.use(cors());

//Body middleware
app.use(express.json());


const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
})

apolloServer.applyMiddleware({app, path: '/graphql'});

const PORT = process.env.PORT || 4000;

app.use('/', (req, res, next) => {
    res.send({message: 'helloooo'});
})

var server = app.listen(PORT, function () {
    var host = server.address().address;
    var port = server.address().port;
  
    console.log('App listening at http://%s:%s', host, port);
});

module.exports = server
