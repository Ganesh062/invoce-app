import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Mock all page components to avoid dependency issues
jest.mock('./pages/Login', () => () => <div>Login Page</div>);
jest.mock('./pages/signup', () => () => <div>Signup Page</div>);
jest.mock('./pages/Home', () => () => <div>Home Page</div>);

test('renders app without crashing', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // simple assertion
  expect(true).toBe(true);
});