const { gql } = require('apollo-server');


const typeDefs = gql`
  
 type People {
  name: String
  height: String
  mass: String
  gender: String 
  homeworld: String
}

type PeopleConnection {
  next: String
  previous: String
  people: [People]!

}
 
  type Query {
    people(page: Int): PeopleConnection
    person(name: String): People
  }
`;

module.exports = typeDefs;