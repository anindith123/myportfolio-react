import React, { Component } from 'react';
import Front from './Front.js'
import About from './About.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import Toolstest from './Toolstest.js'
import scrollToComponent from 'react-scroll-to-component'
import { Link } from 'react-router-dom'
import Footer from './Footer.js'
import ReactGA from 'react-ga';




class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
        };
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.initializeReactGA = this.initializeReactGA.bind(this);
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    initializeReactGA() {
        ReactGA.initialize('UA-132336151-1');
        ReactGA.pageview('/');
    }

    componentDidMount() {
        this.initializeReactGA();
    }
    render() {

        const collapsed = this.state.collapsed;
        const condOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const condTwo = !collapsed ? 'nabvar-toggler' : 'navbar-toggler navbar-toggler-right';
        return <div>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <a className="navbar-brand" href="#">Anindith Reddy</a>
                <button onClick={this.toggleNavbar} className={`${condTwo}`} data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${condOne}`} id="navbarResponsive">

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/resume">Resume</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => scrollToComponent(this.refs.About, { offset: -50, align: 'top' })}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => scrollToComponent(this.refs.Tools, { offset: -50, align: 'top' })}>Tools</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => scrollToComponent(this.refs.Projects, { offset: -50, align: 'top' })}>projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => scrollToComponent(this.refs.Contact, { offset: -50, align: 'top' })}>contact</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutthis" >AboutThis</Link>
                        </li>
                    </ul>
                </div>
            </nav>




            <div>
                <Front className='Front' ref="Front" /><br />
                <About className='About' ref="About" /><br />
                <Toolstest className='Tools' ref="Tools" />
                <Projects className='Projects' ref="Projects" /><br />
                <Contact className='Contact' ref="Contact" /><br />
                <Footer />
            </div>



        </div>

    }
}
export default Main