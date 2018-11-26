import React, {Component} from 'react';
import '../styles/css/bootstrap.min.css'
import '../styles/css/new_styles.css'
import {Link} from 'react-router-dom'


class Aboutthis extends Component {
    render() {
        return <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <Link className="navbar-brand" to="/">Anindith Reddy</Link>
                
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        </ul>
                </div>
    </nav> 

    

<center><p className="aboutthisHeading"><b>I have designed, developed this single-page mobile friendly application website with all of my knowledge and passion towards web development.</b><br/><br/>
 <h4><b>Created using Django,React,HTML,CSS,Bootstrap,javascript</b></h4></p></center>
<p className="aboutthis">
<center><b>Front end/Design</b></center><br/>
<ul>
    <li>
React with jsx implemented for rendering the website design.</li>
<li> I used Bootstrap to make page responsive and mobile friendly.</li>
<li> I used my custom CSS to meet my design requirements.</li>
<li> Various bootstrap components and fetures are implemented in the design of this website. </li>
<li> Implemented React-Router for navigation between pages.</li>
<li>ES6 JavaScript is used for functional components of the page.</li>
<li>React state is used to keep track of the operations in the page.</li></ul>

<center><b>Backend</b></center><br/>
<ul>
<li>I used Django to create API for my website.</li>
<li> My front end gets projects data from the Django API, this data can even be implemented at the front end by hard coding it in the script but I choose to get it from django to make this project a full stack and to present and improve my skills.</li>
<li>I used Django models to model the project data, and created end point by parsing model data to json format.</li>

<li>Axios was used to connect the front end with End point of API.</li> <li>Using javascript the json data is parsed and mapped into the bootstrap components.</li></ul></p>
</div>
}
}
export default Aboutthis