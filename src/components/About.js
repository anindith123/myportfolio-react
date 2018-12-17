import React, { Component } from 'react';
import '../styles/css/bootstrap.min.css'
import '../styles/css/new_styles.css'
import dispimg from '../styles/css/newprofilepic.JPG'
import Aboutintro from './Aboutintro.js'
import Aboutskills from './Aboutskills.js'
import Aboutexp from './Aboutexp.js'
import {Link} from 'react-router-dom'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btn: 'intro'
        }
        this.introClick = this.introClick.bind(this);
        this.skillsClick = this.skillsClick.bind(this);
        this.expClick = this.expClick.bind(this);

    }
    introClick() {
        this.setState({
            btn: 'intro'
        });
    }
    skillsClick() {
        this.setState({
            btn: 'edu'
        });
    }
    expClick() {
        this.setState({
            btn: 'exp'
        });
    }

    render() {
        return <section className="">
            <div className="container">
                <p className="componentHeading"> About Me </p><br />

                <div className="row">
                    <div className="col-sm-4">
                        <center><img className="aboutImg" src={dispimg} alt="anindith profilepic"/><br /><br />
                            <Link to="/resume" className="btn aboutButton" role="button">Resume</Link></center><br/>
                    </div>
                    <div className="col-sm-8">
                        <table className="table table condenced">
                            <tbody>
                                <tr className = "centerAlign">
                                    <td><button onClick={this.introClick} className={"btn aboutButton".concat(' ', (this.state.btn === "intro") ? "active" : "notactive")}  style = {{color:'white'}} >Intro</button></td>
                                    <td><button onClick={this.skillsClick} className={"btn aboutButton".concat(' ', (this.state.btn === "edu") ? "active" : "notactive")}  style = {{color:'white'}}>Education</button></td>
                                    <td><button onClick={this.expClick} className={"btn aboutButton".concat(' ', (this.state.btn === "exp") ? "active" : "notactive")}  style = {{color:'white'}}>Experience</button></td>
                                </tr>
                            </tbody>
                        </table>
                         {(() => {
                            switch (this.state.btn) {
                                case "intro": return <Aboutintro />;
                                case "edu": return <Aboutskills />;
                                case "exp": return <Aboutexp />;
                            default:
                             return <Aboutintro/>;

                            }
                        })()}
                    </div>
                </div>
            </div>
        </section>
    }
}

export default About
