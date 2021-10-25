import { Arg, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { Student } from "./student.entity";
import { StudentsService } from "./students.service";

@Service()
@Resolver() 
export class StudentsResolver {
  constructor(private readonly studentsService: StudentsService) {}

  @Query(() => [Student])
  async students(@Arg("filter", { nullable: true }) filter: string) {
    return await this.studentsService.getStudents(filter);
  }

}