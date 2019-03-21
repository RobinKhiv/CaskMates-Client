import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import {BrowserRouter} from 'react-router-dom';
import{ WhiskeyListProvider} from './Context/WhiskeyListContext';
import{WhiskeyProvider} from './Context/WhiskeyContext';

ReactDOM.render(
  <BrowserRouter>
    <WhiskeyListProvider>
      <WhiskeyProvider>
        <App />
      </WhiskeyProvider>
    </WhiskeyListProvider>
  </BrowserRouter>, 
  document.getElementById('root')
);


