const Furniture = require("../models/furnitureModel");
const Designer = require("../models/designerModel");
const resolvers = {
  Query: {
    getAllFurnitures: async () => {
      return await Furniture.find();
    },
    getFurniture: async (parent, { id }, context, info) => {
      return await Furniture.findById(id);
    },
    getAllDesigners: async () => {
      return await Designer.find();
    },
    getDesigner: async (parent, { title }, context, info) => {
      return await Designer.findOne({ title: title });
    },
  },
  Mutation: {
    createFurniture: async (parent, args, context, info) => {
      const { title, description, category, designer, file, price } =
        args.furniture;

      const newFurniture = new Furniture({
        title,
        description,
        category,
        designer,
        file,
        price,
      });
      await newFurniture.save();
      return newFurniture;
    },
    deleteFurniture: async (parent, { id }, context, info) => {
      await Furniture.findByIdAndDelete(id);
      return `${id} deleted succesfully `;
    },
    updateFurniture: async (parent, args, context, info) => {
      const { id } = args;
      const { title, description, category, designer, file, price } =
        args.furniture;
      return await Furniture.findByIdAndUpdate(
        id,
        {
          title,
          description,
          category,
          designer,
          file,
          price,
        },
        { new: true }
      );
    },
    createDesigner: async (parent, args, context, info) => {
      const { title, description, url, photo } = args.designer;

      const newDesigner = new Designer({
        title,
        description,
        url,
        photo,
      });
      await newDesigner.save();
      return newDesigner;
    },
    deleteDesigner: async (parent, { id }, context, info) => {
      await Designer.findByIdAndDelete(id);
      return `${id} deleted succesfully `;
    },
    updateDesigner: async (parent, args, context, info) => {
      const { id } = args;
      const { title, description, url, photo } = args.designer;
      return await Designer.findByIdAndUpdate(
        id,
        {
          title,
          description,
          url,
          photo,
        },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
