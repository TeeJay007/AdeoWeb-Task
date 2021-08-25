import { render, screen } from '@testing-library/react';
import ImgCard from '../components/ImgCard';

test('Check imgcard title', async () => {
  render(<ImgCard title="Test" img="/snowflake.svg" />);
  expect(screen.getByText(/Test/i)).toBeInTheDocument();
});

test('Check imgcard alt', async () => {
  render(<ImgCard alt="Test" img="/snowflake.svg" />);
  expect(screen.getByAltText(/Test/i)).toBeInTheDocument();
});
