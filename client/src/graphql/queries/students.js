import { gql } from "@apollo/client";

export const GET_STUDENTS = gql`
  query GetStudents($filter: String) {
    students(filter: $filter) {
      id
      name
      cpf
      email
    }
  }
`