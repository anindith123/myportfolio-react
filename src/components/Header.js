import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../styles/css/bootstrap.min.css'
import '../styles/css/styles.css'
import scrollToComponent from 'react-scroll-to-component'


class Header extends Component {
    render() {
        
    return <div style = {{position : 'fixed', width:'100%', zIndex: '5000'}}>
   <nav class = "navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <button class = "navbar-toggler" data-toggle = "collapse" data-target ="#collapse-target">
    <span class = "navbar-toggler-icon"></span>
    </button>
    <div class = "collapse navbar-collapse" id = "collapse-target">
    <span class = "navbar-text" onClick={() => scrollToComponent(this.refs.Front)}> ANINDITH REDDY </span>
        <ul class = "navbar-nav ml-auto">
            <li class = "navbar-item">
                <a class = "nav-link" onClick={() => this.handleclick(this.About)}>About</a>
            </li>
            <li class = "navbar-item">
                <a class = "nav-link" onClick={() => scrollToComponent(this.refs.Tools)}>Tools</a>
            </li>
            <li class = "navbar-item">
                <a class = "nav-link" onClick={() => scrollToComponent(this.refs.Projects)}>projects</a>
            </li>
            <li class = "navbar-item">
                <a class = "nav-link" onClick={() => scrollToComponent(this.refs.Contact)}>contact</a>
            </li>
        </ul>
    </div>
</nav>
</div>
    }
}
export default Header