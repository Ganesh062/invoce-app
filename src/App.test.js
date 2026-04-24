import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Mock components if needed (optional safety)
jest.mock('./pages/Login', () => () => <div>Login Page</div>);
jest.mock('./pages/signup', () => () => <div>Signup Page</div>);
jest.mock('./pages/Home', () => () => <div>Home Page</div>);

test('renders app without crashing', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Basic check (can be anything present in your UI)
  expect(document.body).toBeInTheDocument();
});
