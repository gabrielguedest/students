import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class DeleteStudentResponse {
  @Field()
  deleted: boolean
}