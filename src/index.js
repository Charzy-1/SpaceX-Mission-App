/* eslint-disable import/no-named-as-default */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store'; // If store.js is in src/redux
import './App.css';
import App from './App'; // Main App component
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals'; // Performance reporting

const root = ReactDOM.createRoot(document.getElementById('root')); // Creates the root element

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {' '}
      {/* Wrap your App component with Provider */}
      <App />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
