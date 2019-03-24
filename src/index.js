import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import {BrowserRouter} from 'react-router-dom';
import{ WhiskeySearchProvider} from './Context/WhiskeySearchContext';
import{WhiskeyProvider} from './Context/WhiskeyContext';
import {WhiskeyListProvider} from './Context/WhiskeyListContext';


ReactDOM.render(
  <BrowserRouter>
    <WhiskeySearchProvider>
      <WhiskeyProvider>
        <WhiskeyListProvider>
          <App />
        </WhiskeyListProvider>
      </WhiskeyProvider>
    </WhiskeySearchProvider>
  </BrowserRouter>, 
  document.getElementById('root')
);


