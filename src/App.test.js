import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';
// import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('test example', async () => {
  
  render(<App />);
  expect(screen.getByRole('button')).toHaveTextContent("Start your free trial")

});

