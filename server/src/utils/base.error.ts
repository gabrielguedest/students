import { GraphQLError } from "graphql";

export class BaseError extends GraphQLError {
  constructor(message: string, code: string) {
    super(message, null, null, null, null, null, { code: code });
  }
}