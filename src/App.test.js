import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Test to check if the main header is rendered
test('renders main header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Wylie Fisher/i);
  expect(headerElement).toBeInTheDocument();
});

// Test to check if the email link is rendered with correct href
test('renders email link', () => {
  render(<App />);
  const emailLink = screen.getByText(/email/i);
  expect(emailLink).toBeInTheDocument();
  expect(emailLink).toHaveAttribute('href', 'mailto:me@wyliefisher.com');
});

// Test to check if the GitHub link is rendered with correct href
test('renders GitHub link', () => {
  render(<App />);
  const githubLink = screen.getByText(/github/i);
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', 'https://github.com/wylie');
});

// Test to check if the LinkedIn link is rendered with correct href
test('renders LinkedIn link', () => {
  render(<App />);
  const linkedinLink = screen.getByText(/linkedin/i);
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/wyliefisher/');
});

// Test to check if a random clone is rendered
test('renders a random clone in footer', () => {
  render(<App />);
  const cloneElement = screen.getByText(/./, { selector: '.clones' }); // look for any text in the clones class
  expect(cloneElement).toBeInTheDocument();
});