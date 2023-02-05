const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Address {
    building: String
    street: String!
    zipcode: String
  }

  type Restaurant {
    restaurant_id: String!
    name: String!
    city: String!
    cuisine: String!
    address: Address
  }

  type Query {
    restaurants: [Restaurant]
  }
`;

module.exports = typeDefs;