const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Furniture {
    id: ID
    title: String
    description: String
    url: String
    price: String
  }

  type Query {
    hello: String

    getAllFurnitures: [Furniture]
    getFurniture(id: ID): Furniture
  }
  input FurnitureInput {
    title: String
    description: String
    url: String
    price: String
  }
  type Mutation {
    createFurniture(furniture: FurnitureInput): Furniture
    deleteFurniture(id: ID): String
    updateFurniture(id: ID, furniture: FurnitureInput): Furniture
  }
`;

module.exports = typeDefs;
