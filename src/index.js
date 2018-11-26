import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router.js';
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(<BrowserRouter><Router/></BrowserRouter>, document.getElementById('root'));