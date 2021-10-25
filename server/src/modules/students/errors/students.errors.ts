import { BaseError } from "../../../utils/base.error";

export class StudentAlreadyExistsError extends BaseError {
  constructor() {
    super('Student already exists', "STUDENT_ALREADY_EXISTS");
  }
}