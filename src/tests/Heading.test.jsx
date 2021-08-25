import { render, screen } from '@testing-library/react';
import Heading from '../components/Heading';

test('Check heading children', async () => {
  render(<Heading>Test</Heading>);
  expect(screen.getByText(/Test/i)).toBeInTheDocument();
});

test('Check heading subtitle', async () => {
  render(<Heading subtitle="Test">Nice</Heading>);
  expect(screen.getByText(/Test/i)).toBeInTheDocument();
});
