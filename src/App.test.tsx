import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders simple card', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/simple card/i);
  expect(linkElement).toBeInTheDocument();
});
