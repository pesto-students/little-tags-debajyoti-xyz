import { render, screen } from '@testing-library/react';
import App from './App';

test('renders categories', () => {
  render(<App />);
  const linkElement = screen.getByText(/Riverwood/i);
  expect(linkElement).toBeInTheDocument();
});
