import { render, screen } from '@testing-library/react';
import App from './App';

test('renders 안녕하세요', () => {
  render(<App />);
  const linkElement = screen.getByText(/안녕하세요/i);
  expect(linkElement).toBeInTheDocument();
});
