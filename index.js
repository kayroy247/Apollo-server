const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
    ISBN: Int
  }

  type Users {
    firstname: String
    lastname: String
    bio: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    users: [Users]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
    ISBN: 128928
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
    ISBN: 1928388
  },
];

const users = [
  {
    firstname: 'Thomas',
    lastname: 'Kate',
    bio: 'Chelsea fan'
  },
  {
    firstname: 'Henry',
    lastname: 'John',
    bio: 'Arsenal Fan'
  },

];


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
    users: () => users
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}0`);
});