import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';



// uncomment so that webpack can bundle styles
import styles from './scss/application.scss';


//import '../build/style.css'






render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);
