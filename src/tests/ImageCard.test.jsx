import { render, screen } from '@testing-library/react';
import ImageCard from '../components/ImageCard';

test('Check imagecard children', async () => {
  render(<ImageCard img="/snowflake.svg">Test</ImageCard>);
  expect(screen.getByText(/Test/i)).toBeInTheDocument();
});

test('Check imagecard title', async () => {
  render(<ImageCard title="Test" img="/snowflake.svg" />);
  expect(screen.getByText(/Test/i)).toBeInTheDocument();
});

test('Check imagecard alt', async () => {
  render(<ImageCard alt="Test" img="/snowflake.svg" />);
  expect(screen.getByAltText(/Test/i)).toBeInTheDocument();
});
