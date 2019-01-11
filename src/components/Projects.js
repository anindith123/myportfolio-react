import React, { Component } from 'react';
import '../styles/css/bootstrap.min.css'
import '../styles/css/new_styles.css'
import axios from 'axios'
import Project from './Project.js'
import { ClipLoader } from 'react-spinners';




class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projdata: [],
            loading: true
        };
        this.djangoReq = this.djangoReq.bind(this);
    }

    djangoReq() {
        axios.get('https://cors-anywhere.herokuapp.com/https://arcane-plateau-44585.herokuapp.com/projects/')

            .then(function (response) {
                this.setState({ loading: false });
                let x = response.data;
                this.setState({ projdata: x }, () => { console.log("$$$$"); });
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
            <p className="componentHeading" style={{ color: 'white' }}> Projects</p><br />

            <center> <div className='sweet-loading'>
                <ClipLoader
                    className="loading"
                    sizeUnit={"px"}
                    size={50}
                    color={'white'}
                    loading={this.state.loading}
                />
            </div></center>
            <div ref="project_div" className="card-columns col-sm-12 col-md-12 centerAlign">
                {this.state.projdata.map((proj, index) => <Project projdat={proj} key={index} />)}
            </div>
        </section>
    }
} export default Projects