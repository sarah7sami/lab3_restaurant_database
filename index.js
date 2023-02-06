const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

dotenv.config();

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

const port = process.env.PORT || 3000;

app.listen({ port }, () => {
  console.log(`Server running at http://localhost:${port}${server.graphqlPath}`);
});

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

