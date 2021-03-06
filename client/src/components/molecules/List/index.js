import styled from "styled-components";
import { MdDeleteOutline } from 'react-icons/md';
import { cpfMask } from '../../../utils/cpfMask';
import { Button } from "../../atoms/Button";

const Table = styled.table`
  width: 100%;
  margin-top: 20px;

  border-collapse: collapse;
  border-spacing: 0 10px;
`

const Row = styled.tr`
  border-bottom: 2px solid #f1f1f1;
`

const TableHeader = styled.th`
  padding: 20px 10px;

  color: #505050;
  text-align: left;
`

const TableData = styled.td`
  padding: 20px 10px;
  
  text-align: left;
  color: ${props => props.main ? "#5d6dde" : "#606060"};
  width: ${props => props.main ? "35%" : "20%"};
`

const ActionTableData = styled(TableData)`
  width: 10%;
`

export const List = ({ students, remove }) => {
  return (
    <Table>
      <thead>
        <Row>
          <TableHeader>Nome</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>CPF</TableHeader>
          <TableHeader>Ações</TableHeader>
        </Row>
      </thead>
      <tbody>
        {students.map(student => (
          <Row key={student.id}>
            <TableData main>{student.name}</TableData>
            <TableData>{student.email}</TableData>
            <TableData>{cpfMask(student.cpf)}</TableData>
            <ActionTableData>
              <Button onClick={() => remove(student.id)}>
                <MdDeleteOutline size={"1.5em"}/>
              </Button>
            </ActionTableData>
          </Row>
        ))}
      </tbody>
    </Table>
  );
}