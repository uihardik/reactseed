import 'babel-polyfill'

import React, {Component } from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'
import store from './store/store';
import App from './App/App'

import './styles/main.css'
import 'antd/dist/antd.css';

const newHistory = createBrowserHistory();

class AppFlow extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

ReactDOM.render(<AppFlow />, document.getElementById('app'))
