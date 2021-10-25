import { Service } from "typedi";
import { getRepository, Repository, Like } from "typeorm";
import { Student } from "./student.entity";

@Service()
export class StudentsRepository {
  private repository: Repository<Student>;

  constructor() {
    this.repository = getRepository(Student);
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
}