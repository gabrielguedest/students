import { Service } from "typedi";
import { getRepository, Repository, Like } from "typeorm";
import { Student } from "./student.entity";

@Service()
export class StudentsRepository {
  private repository: Repository<Student>;

  constructor() {
    this.repository = getRepository(Student);
  }

  async save(student: Student) {
    return await this.repository.save(student);
  }

  async getByEmailOrCPF(filter: { email?: string, cpf?: string}) {
    return await this.repository.findOne({
      where: [
        filter.email ? {email: filter.email} : {},
        filter.cpf ? {cpf: filter.cpf} : {},
      ],
    });
  }

  async getAll(filter: string) {
    return await this.repository.find({ 
      where: filter 
        ? [
            { name: Like(`%${filter}%`) },
            { cpf: Like(`%${filter}%`) },
            { email: Like(`%${filter}%`) },
          ] 
        : {}
    });
  }

  async getById(id: string) {
    return await this.repository.findOne(id);
  }

  async delete(id: string) {
    return await this.repository.delete({ id });
  }
}