import React, { Component } from 'react';
import '../styles/css/bootstrap.min.css'
import '../styles/css/new_styles.css'
import image from '../styles/css/profilepic.JPG'
import Aboutintro from './Aboutintro.js'
import Aboutskills from './Aboutskills.js'
import Aboutexp from './Aboutexp.js'

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
            btn: 'skills'
        });
    }
    expClick() {
        this.setState({
            btn: 'exp'
        });
    }

    render() {
        console.log(this.state.btn)
        return <section className="">
            <div className="container">
                <p className="componentHeading"> About Me </p><br />

                <div className="row">
                    <div className="col-sm-4">
                        <center><img src={image} /><br /><br />
                            <a href="#" className="btn aboutButton" role="button">Resume</a></center>
                    </div>
                    <div className="col-sm-8">
                        <table className="table table condenced">
                            <tbody>
                                <tr className = "centerAlign">
                                    <td><a onClick={this.introClick} className="btn aboutButton" role="button" style = {{color:'white'}} >Intro</a></td>
                                    <td><a onClick={this.skillsClick} className="btn aboutButton" role="button" style = {{color:'white'}}>skills</a></td>
                                    <td><a onClick={this.expClick} className="btn aboutButton" role="button" style = {{color:'white'}}>experience</a></td>
                                </tr>
                            </tbody>
                        </table>
                         {(() => {
                            switch (this.state.btn) {
                                case "intro": return <Aboutintro />;
                                case "skills": return <Aboutskills />;
                                case "exp": return <Aboutexp />;

                            }
                        })()}
                    </div>
                </div>
            </div>
        </section>
    }
}

export default About
