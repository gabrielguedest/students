import styled from 'styled-components';
import { useMutation, useQuery } from '@apollo/client';
import { GET_STUDENTS } from '../../../graphql/queries/students';
import { DELETE_STUDENT } from '../../../graphql/mutations/students';
import { Header } from '../../atoms/Header';
import { List } from '../../molecules/List';
import { SearchBar } from '../../atoms/SearchBar';
import { ErrorMessage } from '../../atoms/ErrorMessage';
import { EmptyData } from '../../atoms/EmptyData';

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
`

const Loading = styled.p`
  margin-top: 60px;
  text-align: center;
`

export const Home = () => {
  const { data, loading, error, refetch } = useQuery(GET_STUDENTS);
  const [ deleteStudent, deleteResponse ] = useMutation(DELETE_STUDENT, {
    refetchQueries: [
      GET_STUDENTS
    ]
  });

  const search = (searchTerm) => {
    if (!loading) {
      const filter = searchTerm 
        ? { filter: searchTerm }
        : { filter: undefined }
      
      refetch(filter)
    }
  }

  const removeStudent = async (id) => {
    deleteStudent({ variables: { id } })
  }

  return (
    <Wrapper>
      {deleteResponse.error && console.log(JSON.stringify(deleteResponse.error, null, 2))}
      <Header title="Estudantes" />
      <SearchBar onChange={search} />

      { 
        loading 
          ? <Loading>Carregando dados...</Loading>
          : (<>
              {error 
                ? <ErrorMessage>Ops! Ocorreu um erro...</ErrorMessage>
                : data?.students && data.students.length > 0
                  ? <List students={data.students} remove={removeStudent}/>
                  : <EmptyData />
              }
            </>)
      }
      
    </Wrapper>
  );
}