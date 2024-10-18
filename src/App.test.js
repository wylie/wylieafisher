import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />);
});

test('renders learn react link', () => {
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders main header', () => {
  const headerElement = screen.getByText(/Wylie Fisher/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders email link', () => {
  const emailLink = screen.getByText(/email/i);
  expect(emailLink).toBeInTheDocument();
  expect(emailLink).toHaveAttribute('href', 'mailto:me@wyliefisher.com');
});

test('renders GitHub link', () => {
  const githubLink = screen.getByText(/github/i);
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', 'https://github.com/wylie');
});

test('renders LinkedIn link', () => {
  const linkedinLink = screen.getByText(/linkedin/i);
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/wyliefisher/');
});

test('renders a random clone in footer', () => {
  const cloneElement = screen.getByText(/./, { selector: '.clones' }); // look for any text in the clones class
  expect(cloneElement).toBeInTheDocument();
});