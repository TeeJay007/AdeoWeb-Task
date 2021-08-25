import { render, fireEvent, screen } from '@testing-library/react';
import Button from '../components/Button';

test('Check empty button', async () => {
  render(<Button />);
  const btn = screen.getByText(/OK/i);
  expect(btn.innerHTML).toEqual('OK');
});

test('Check button children', async () => {
  render(<Button>Test</Button>);
  const btn = screen.getByText(/Test/i);
  expect(btn.innerHTML).toEqual('Test');
});

test('Check button click', async () => {
  const clickCB = jest.fn();
  render(<Button onClick={clickCB}>Test</Button>);
  fireEvent.click(screen.getByText(/Test/i));
  expect(clickCB).toHaveBeenCalledTimes(1);
});
