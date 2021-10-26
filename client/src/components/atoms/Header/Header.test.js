import { render, screen } from '@testing-library/react';
import { Header } from '.';

test('render header with title', () => {
  render(<Header title="Header" />);

  const header = screen.getByText(/Header/i);
  expect(header).toBeInTheDocument();
});
