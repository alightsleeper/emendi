import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders description text', () => {
  render(<App />);
  const descText1 = screen.getByText(/A boutique agency serving artists, nonprofits,/i);
  const descText2 = screen.getByText(/startups and small businesses./i);
  expect(descText1).toBeInTheDocument();
  expect(descText2).toBeInTheDocument();
});
