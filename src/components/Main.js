import React,{Component} from 'react';
import Front from './Front.js'
import About from './About.js'
import Tools from './Tools.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import Toolstest from './Toolstest.js'
import scrollToComponent from 'react-scroll-to-component'


class Main extends Component {
    render() {
        return <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <button className="navbar-toggler" data-toggle="collapse" data-target="#collapse-target">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapse-target">
                    <span className="navbar-text" onClick={() => scrollToComponent(this.refs.Front, { align: 'top' })}> ANINDITH REDDY </span>
                    <ul className="navbar-nav ml-auto">
                        <li className="navbar-item">
                            <a className="nav-link" href={"www.facebook.com"}>Resume</a>
                        </li>
                        <li className="navbar-item">
                            <a className="nav-link" onClick={() => scrollToComponent(this.refs.About, { offset: -50, align: 'top' })}>About</a>
                        </li>
                        <li className="navbar-item">
                            <a className="nav-link" onClick={() => scrollToComponent(this.refs.Tools, { offset: -50, align: 'top' })}>Tools</a>
                        </li>
                        <li className="navbar-item">
                            <a className="nav-link" onClick={() => scrollToComponent(this.refs.Projects, { offset: -50, align: 'top' })}>projects</a>
                        </li>
                        <li className="navbar-item">
                            <a className="nav-link" onClick={() => scrollToComponent(this.refs.Contact, { offset: -50, align: 'top' })}>contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <Front className='Front' ref="Front" /><br/>
            <About className='About' ref="About" /><br/>
            <Toolstest className='Tools' ref="Tools" />
            <Projects className='Projects' ref="Projects" /><br/>
            <Contact className='Contact' ref="Contact" /><br/>


        </div>
    }
}
export default Main