import React from 'react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

const Root = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
);

export default Root;
