import { IsNotEmpty, Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateStudentInput {
  @IsNotEmpty()
  @Field()
  @Length(11)
  cpf: string

  @IsNotEmpty()
  @Field()
  name: string

  @IsNotEmpty()
  @Field()
  email: string
}

@InputType()
export class UpdateStudentInput {
  @IsNotEmpty()
  @Length(11)
  @Field({ nullable: true })
  cpf?: string

  @IsNotEmpty()
  @Field({ nullable: true })
  name?: string

  @IsNotEmpty()
  @Field({ nullable: true })
  email?: string
}