const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Furniture {
    id: ID
    title: String
    category: String
    designer: String
    description: String
    file: String
    price: String
  }
  type Designer {
    id: ID
    title: String
    description: String
    url: String
    photo: String
  }

  type Query {
    getAllFurnitures: [Furniture]
    getFurniture(id: ID): Furniture
    getAllDesigners: [Designer]
    getDesigner(id: ID): Designer
  }
  input FurnitureInput {
    title: String
    category: String
    designer: String
    description: String
    file: String
    price: String
  }
  input DesignerInput {
    id: ID
    title: String
    description: String
    url: String
    photo: String
  }
  type Mutation {
    createFurniture(furniture: FurnitureInput): Furniture
    deleteFurniture(id: ID): String
    updateFurniture(id: ID, furniture: FurnitureInput): Furniture

    createDesigner(designer: DesignerInput): Designer
    deleteDesigner(id: ID): String
    updateDesigner(id: ID, designer: DesignerInput): Designer
  }
`;

module.exports = typeDefs;
