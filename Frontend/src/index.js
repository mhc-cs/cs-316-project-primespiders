// redux usage from this tutorial: https://www.digitalocean.com/community/tutorials/how-to-manage-state-in-react-with-redux
//https://redux.js.org/usage/configuring-your-store 


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import{ BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import coopApp from './store/loggedIn/loggedIn';

//generate a redux store for managing global state
const store = createStore(coopApp)

//the app is wrapped in the browser router, and the whole thing is wrapped in the redux store
//to make state accessible to the whole app
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
reportWebVitals();
