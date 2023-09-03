/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.scss'

import {store} from "./store/store.js";

import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById('root'))
.render(
  <Provider store = {store}>
    <App />
  </Provider>,
)


