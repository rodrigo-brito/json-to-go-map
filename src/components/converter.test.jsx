import React from 'react';
import ReactDOM from 'react-dom';
import Converter from './converter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Converter />, div);
});