const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./furniture/typeDefs");
const resolvers = require("./furniture/resolvers");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
  app.use((req, res) => {
    res.send("Hello from the server 😀");
  });

  await mongoose.connect(process.env.PASS, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Mongoose is connected 🦆");
  app.listen(PORT, () => console.log("server is running on port 4000"));
}

startServer();
