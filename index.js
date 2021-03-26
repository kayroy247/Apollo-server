const { ApolloServer, gql } = require('apollo-server');
const PeopleAPI = require('./src/datasources/people');
const typeDefs = require('./src/schemas/people');
const resolvers = require('./src/resolvers/people');

const server = new ApolloServer({
  typeDefs: [typeDefs],
  resolvers,
  dataSources: () => ({
    peopleAPI: new PeopleAPI(),
  })
});


server.listen({ port: process.env.PORT || 4000 });