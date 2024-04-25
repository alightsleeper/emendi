import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/A boutique agency serving artists, non-profits, startups and small businesses./i);
  expect(linkElement).toBeInTheDocument();
});
