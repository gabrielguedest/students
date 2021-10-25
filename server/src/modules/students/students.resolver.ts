import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { MissingParamsError } from "./errors/students.errors";
import { Student } from "./student.entity";
import { StudentsService } from "./students.service";
import { CreateStudentInput, UpdateStudentInput } from "./types/students.input";

@Service()
@Resolver() 
export class StudentsResolver {
  constructor(private readonly studentsService: StudentsService) {}

  @Query(() => [Student])
  async students(@Arg("filter", { nullable: true }) filter: string) {
    return await this.studentsService.getStudents(filter);
  }

  
  @Mutation(() => Student)
  async addStudent(
    @Arg("data") data: CreateStudentInput
  ) {
    return await this.studentsService.insertStudent({
      email: data.email,
      cpf: data.cpf,
      name: data.name,
    })
  }

  @Mutation(() => Student)
  async editStudent(
    @Arg("id") id: string,
    @Arg("data", () => UpdateStudentInput) data: UpdateStudentInput,
  ) {
    if (Object.keys(data).length == 0) {
      throw new MissingParamsError();
    }

    return await this.studentsService.editStudent(id, data);
  }
}