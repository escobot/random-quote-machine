import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders get quotes button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Get Quotes!/i);
  expect(linkElement).toBeInTheDocument();
});
