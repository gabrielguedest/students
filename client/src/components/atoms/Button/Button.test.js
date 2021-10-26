import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '.';

test('render button with children', () => {
  render(<Button>Button Children</Button>);

  const label = screen.getByText(/Button Children/i);
  expect(label).toBeInTheDocument();
});

test('button should call onClick', () => {
  const onClick = jest.fn();

  render(
    <Button onClick={onClick}>Button</Button>
  );

  const button = screen.getByText(/Button/i);
  fireEvent.click(button);

  expect(onClick).toHaveBeenCalled();
});