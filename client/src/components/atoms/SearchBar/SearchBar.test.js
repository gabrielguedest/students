import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '.';

test('search bar should call onChange on every value change', () => {
  const onChange = jest.fn();

  render(<SearchBar onChange={onChange} />);

  const searchBar = screen.queryByTestId('search-bar');
  expect(searchBar).toBeInTheDocument();

  fireEvent.change(searchBar, { target: { value: 'Student '}});
  fireEvent.change(searchBar, { target: { value: 'Student 2'}});

  expect(onChange).toHaveBeenCalledTimes(2);
  expect(searchBar.value).toBe('Student 2');
});
