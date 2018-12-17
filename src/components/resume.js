import React, {Component} from 'react';
import '../styles/css/bootstrap.min.css'
import '../styles/css/new_styles.css'
import resume from '../styles/css/Anindith Reddy Resume-1.jpg'
import {Link} from 'react-router-dom'
import resume_file from '../styles/css/Anindith Reddy Resume.pdf'

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed : true,
        };
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar() {
        this.setState({
            collapsed : !this.state.collapsed
        });
    }
    render() {
        const collapsed = this.state.collapsed;
        const condOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const condTwo = !collapsed ? 'nabvar-toggler' : 'navbar-toggler navbar-toggler-right';
        return <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" style={{width : '100%'}}>
            <Link className="navbar-brand" to="/">Anindith Reddy</Link>
                
            <button onClick={this.toggleNavbar} className={`${condTwo}`} type = "button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${condOne}`} id="navbarResponsive">
                    
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                            <a className="nav-link" href={resume_file} download="Anindith Reddy Resume">Download Resume</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        </ul>
                </div>
    </nav> 
            <center><img src={resume} style={{height:"55%", width:"85%"}} alt="Anindith Reddy resume"/>
</center>
</div>
    }
}
export default Resume
