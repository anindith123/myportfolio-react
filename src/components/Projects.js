import React, { Component } from 'react';
import '../styles/css/bootstrap.min.css'
import '../styles/css/new_styles.css'
import axios from 'axios'
import Project from './Project.js'



class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projdata : []
        };
        this.djangoReq = this.djangoReq.bind(this);
    }

    djangoReq() {
        axios.get('http://127.0.0.1:8000/projects/')
        .then(function (response) {
            let x = response.data;
            this.setState({projdata : x }, () => {console.log("$$$$");});
            }.bind(this))
          .catch(function (error) {
            console.log(error);
          });
        
    }
    componentWillMount() {
        this.djangoReq()
    }
    render() {
         return <section className="projectsBg">
                    <p className="componentHeading" style = {{color:'white'}}> Projects</p><br />
                    <div ref="project_div" className="card-columns col-lg-12 col-md-8 col-sm-6 centerAlign">
                    {this.state.projdata.map((proj) => <Project projdat = {proj}/>)}
                    </div>
                </section>
    }
}export default Projects