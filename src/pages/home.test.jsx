import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';

jest.mock('react-copy-to-clipboard');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});