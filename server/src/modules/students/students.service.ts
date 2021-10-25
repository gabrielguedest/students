import { Service } from "typedi";
import { StudentAlreadyExistsError, StudentNotFound } from "./errors/students.errors";
import { Student } from "./student.entity";
import { StudentsRepository } from "./students.repository";

interface StudentParams {
  name?: string
  cpf?: string
  email?: string
}

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

  async editStudent(id: string, params: StudentParams) {
    const student = await this.studentsRepository.getById(id);

    if (!student) {
      throw new StudentNotFound();
    }

    const registeredStudent = await this.studentsRepository.getByEmailOrCPF({ email: params.email, cpf: params.cpf});

    if (registeredStudent) {
      throw new StudentAlreadyExistsError();
    }

    student.cpf = params.cpf ?? student.cpf;
    student.email = params.email ?? student.email;
    student.name = params.name ?? student.name;

    return await this.studentsRepository.save(student);
  }
}