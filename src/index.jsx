import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './components/App';
import reportWebVitals from './reportWebVitals';
import "milligram"
import {BrowserRouter as Router, Route} from "react-router-dom"
import {AppState} from "./AppState.jsx"

ReactDOM.render(
  <AppState>
    <Router>
      <Route path= "/" component={App}/>
    </Router>
  </AppState>, 
  document.querySelector("#root")
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
