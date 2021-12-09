const Furniture = require("./furnitureModel");

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World";
    },
    getAllFurnitures: async () => {
      return await Furniture.find();
    },
    getFurniture: async (parent, { id }, context, info) => {
      return await Furniture.findById(id);
    },
  },
  Mutation: {
    createFurniture: async (parent, args, context, info) => {
      const { title, description, url, price } = args.furniture;
      const newFurniture = new Furniture({ title, description, url, price });
      await newFurniture.save();
      return newFurniture;
    },
    deleteFurniture: async (parent, { id }, context, info) => {
      await Furniture.findByIdAndDelete(id);
      return `${id} deleted succesfully `;
    },
    updateFurniture: async (parent, args, context, info) => {
      const { id } = args;
      const { title, description, url, price } = args.furniture;
      return await Furniture.findByIdAndUpdate(
        id,
        {
          title,
          description,
          url,
          price,
        },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
