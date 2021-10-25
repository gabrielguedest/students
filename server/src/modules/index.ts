import { NonEmptyArray } from "type-graphql";
import { StudentsResolver } from "./students/students.resolver";

export const modulesResolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
  StudentsResolver,
]

export const modulesEntities  = []