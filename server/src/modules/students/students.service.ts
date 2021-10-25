import { Service } from "typedi";
import { StudentsRepository } from "./students.repository";


@Service()
export class StudentsService {
  constructor(private readonly studentsRepository: StudentsRepository) {}

  async getStudents(filter: string) {
    return await this.studentsRepository.getAll(filter);
  }
}