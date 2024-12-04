import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import { composeWithDevTools } from "@redux-devtools/extension";

import './index.css';
import App from './App';
import rootReducer from "./store"
import App2 from './App2'
import Bank from './Bank';

const root = ReactDOM.createRoot(document.getElementById('root'));
// store 정의: 전역 상태를 관리하는 하나의 공간 (하나의 프로젝트이 하나만!)
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <App2 /> */}
      <Bank />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
