import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { GET_STUDENTS } from '../../../graphql/queries/students';
import { Home } from '.';

test('renders list on success query', async () => {
  const mockGetStudents = {
    request: { query: GET_STUDENTS },
    result: { 
      data: {
        students: [{
          id: "9fc91427-5b41-4090-817a-193ebdd3a0d7",
          name: "Fake Student",
          email: "fake@student.com",
          cpf: "12345678912"
        }],
      },
    },

  };

  render(
    <MockedProvider mocks={[mockGetStudents]}>
      <Home />
    </MockedProvider>
  );

  await waitFor(() => new Promise((res) => setTimeout(res, 0)));

  const header = screen.getByText(/Estudantes/i);
  expect(header).toBeInTheDocument();

  const student = screen.getByText(/Fake Student/i);
  expect(student).toBeInTheDocument();
});


test('should render loading label when loading data', async () => {
  const mockGetStudents = {
    request: { query: GET_STUDENTS },
    result: {
      data: {
        students: [],
      }
    },
  };

  render(
    <MockedProvider mocks={[mockGetStudents]}>
      <Home />
    </MockedProvider>
  );

  const loading = screen.getByText(/Carregando dados/i);
  expect(loading).toBeInTheDocument();
});

test('should render empty list label when data is empty', async () => {
  const mockGetStudents = {
    request: { query: GET_STUDENTS },
    result: {
      data: {
        students: [],
      },
    },
  };

  render(
    <MockedProvider mocks={[mockGetStudents]}>
      <Home />
    </MockedProvider>
  );

  await waitFor(() => new Promise((res) => setTimeout(res, 0)));

  const emptyLabel = screen.getByText(/A lista de estudantes está vazia/i);
  expect(emptyLabel).toBeInTheDocument();
});

test('should render error label when has error', async () => {
  const mockGetStudents = {
    request: { query: GET_STUDENTS },
    result: {
      data: {
        students: [],
      },
    },
    error: new Error('An error occurred'),
  };

  render(
    <MockedProvider mocks={[mockGetStudents]}>
      <Home />
    </MockedProvider>
  );

  await waitFor(() => new Promise((res) => setTimeout(res, 0)));

  const errorLabel = screen.getByText(/Ops! Ocorreu um erro/i);
  expect(errorLabel).toBeInTheDocument();
});