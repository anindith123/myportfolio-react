import React, {Component} from 'react';
import '../styles/css/bootstrap.min.css'
import '../styles/css/new_styles.css'
import {Route, Switch} from 'react-router-dom'
import Main from './Main.js';
import Resume from './resume.js';
import Aboutthis from './aboutthis'
const Router = () => (
    
        <Switch>
            <Route exact path = "/" component={Main}/>
            <Route exact path = "/resume" component={Resume}/>
            <Route exact path = "/aboutthis" component={Aboutthis}/>
        </Switch>

        
    )

export default Router