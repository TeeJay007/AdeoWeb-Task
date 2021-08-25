import { render, screen } from '@testing-library/react';
import Form from '../components/Form';

test('Check form fields', async () => {
  render(<Form />);
  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByText(/Name/i)).toBeInTheDocument();
  expect(screen.getByText(/Email/i)).toBeInTheDocument();
  expect(screen.getByText(/Message/i)).toBeInTheDocument();
});
