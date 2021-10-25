import { buildSchema as typeBuildSchema } from "type-graphql"
import Container from "typedi"

import { modulesResolvers as resolvers } from '../modules'

export const buildSchema = () => typeBuildSchema({ 
  resolvers,
  container: Container,
})