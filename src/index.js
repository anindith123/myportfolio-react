import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router.js';
import {HashRouter} from 'react-router-dom'


ReactDOM.render(<HashRouter><Router/></HashRouter>, document.getElementById('root'));