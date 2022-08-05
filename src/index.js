import ReactDOM from 'react-dom';
import React from 'react';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import CartPanel from './ShoppingCart/CartPanel';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Store/index';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<React.StrictMode>
//   <BrowserRouter>
//     <App></App>
//   </BrowserRouter>
// </React.StrictMode>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
