import { BaseError } from "../../../utils/base.error";

export class StudentAlreadyExistsError extends BaseError {
  constructor() {
    super('Student already exists', "STUDENT_ALREADY_EXISTS");
  }
}

export class MissingParamsError extends BaseError {
  constructor() {
    super('Missing params', "MISSING_PARAMS");
  }
}

export class StudentNotFound extends BaseError {
  constructor() {
    super('Student not found', "STUDENT_NOT_FOUND");
  }
}