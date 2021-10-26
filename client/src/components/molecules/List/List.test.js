import { render, screen, fireEvent } from '@testing-library/react';
import { List } from '.';

const students = [
  { 
    id: "9fc91427-5b41-4090-817a-193ebdd3a0d7",
    name: "Fake Student",
    email: "fake@student.com",
    cpf: "12345678912",
  }
]

test('list should have student and remove button', () => {
  const remove = jest.fn();
  
  render(<List students={students} remove={remove} />);

  const student = screen.getByText(/Fake Student/i);
  expect(student).toBeInTheDocument();

  const buttonRemove = screen.getByTestId('button');
  expect(buttonRemove).toBeInTheDocument();
});

test('function should be called when remove button is clicked', () => {
  const remove = jest.fn();

  render(<List students={students} remove={remove} />);

  const buttonRemove = screen.getByTestId('button');
  expect(buttonRemove).toBeInTheDocument();
  fireEvent.click(buttonRemove);

  expect(remove).toHaveBeenCalled();
});
