import express from 'express';
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "../utils/buildSchema";

export const apolloServer = async (app: express.Application, isProduction: boolean) => {
  const graphQLSchema = await buildSchema();
  const apolloServer = new ApolloServer({
    schema: graphQLSchema,
    playground: !isProduction,
  });

  apolloServer.applyMiddleware({ app, path: '/graphql' });
}