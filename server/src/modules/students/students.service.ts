import { Service } from "typedi";
import { StudentAlreadyExistsError } from "./errors/students.errors";
import { Student } from "./student.entity";
import { StudentsRepository } from "./students.repository";


@Service()
export class StudentsService {
  constructor(private readonly studentsRepository: StudentsRepository) {}

  async getStudents(filter: string) {
    return await this.studentsRepository.getAll(filter);
  }

  async insertStudent(params: { name: string, email: string, cpf: string }) {
    const registeredStudent = await this.studentsRepository.getByEmailOrCPF({ email: params.email, cpf: params.cpf });
    
    if (registeredStudent) {
      throw new StudentAlreadyExistsError();
    };

    const student = new Student();
    student.name = params.name;
    student.email = params.email;
    student.cpf = params.cpf;

    return await this.studentsRepository.save(student);
  }
}