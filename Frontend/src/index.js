// redux usage from this tutorial: https://www.digitalocean.com/community/tutorials/how-to-manage-state-in-react-with-redux

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import{ BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import coopApp from './store/loggedIn/loggedIn';

const store = createStore(coopApp)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
