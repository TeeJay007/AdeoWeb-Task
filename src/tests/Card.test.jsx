import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

test('Check empty card', async () => {
  const { container } = render(<Card />);
  expect(container.querySelector('h1')).not.toBeInTheDocument();
  expect(container.querySelector('span')).not.toBeInTheDocument();
});

test('Check title', async () => {
  const { container } = render(<Card title="Test" />);
  const title = container.querySelector('h1');
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('Test');
});

test('Check subtitle', async () => {
  const { container } = render(<Card title="Title" subtitle="Test" />);
  const subtitle = container.querySelector('span');
  expect(subtitle).toBeInTheDocument();
  expect(subtitle).toHaveTextContent('Test');
});

test('Check children', async () => {
  render(<Card>Test</Card>);
  expect(screen.getByText(/Test/i));
});
