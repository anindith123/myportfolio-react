import React, {Component} from 'react';
import '../styles/css/bootstrap.min.css'
import '../styles/css/new_styles.css'

class Toolstest extends Component {
    render() {
        return <section className = "toolsBg">
            <p className = "componentHeading">Tools & Technologies</p><br/>
            <div ref="project_div" className="card-columns centerAlign col-lg-12 col-md-8 col-sm-6">
            <div className="card  col-lg-12 col-md-10 col-sm-8" style={{ width: '400px' }}>
            <div className="card-body centerAlign">
                <h5 className="card-title centerAlign">Languages</h5>
                <p className="card-text cardcontain"><i data-toggle="tooltip" title="C"  className="devicon-c-plain colored toolIcons"></i>
                    <i data-toggle="tooltip" title="Java"  className="devicon-java-plain colored toolIcons"></i>
                    <i data-toggle="tooltip" title="javascript"  className="devicon-javascript-plain colored toolIcons"></i>
                    <i data-toggle="tooltip" title="python"  className="devicon-python-plain toolIcons" ></i>
                </p>
                    
            </div>
            </div>
            <div className="card  col-lg-12 col-md-10 col-sm-8" style={{ width: '400px' }}>
            <div className="card-body">
                <h5 className="card-title centerAlign">Frameworks</h5>
                <p className="card-text cardcontain"><i data-toggle="tooltip" title="react"  className="devicon-react-original colored toolIcons"></i>
                                                 <i data-toggle="tooltip" title="django"  className="devicon-django-plain toolIcons"></i>
                                                 <i data-toggle="tooltip" title="bootstrap"  className="devicon-bootstrap-plain toolIcons"></i>
                </p>
            </div>
            </div>

             <div className="card  col-lg-12 col-md-10 col-sm-8" style={{ width: '400px' }}>
             <div className="card-body centerAlign">
                <h5 className="card-title centerAlign">Design</h5>
                <p className="card-text cardcontain"><i data-toggle="tooltip" title="html5"  className="devicon-html5-plain colored toolIcons"></i>
                                                <i data-toggle="tooltip" title="css3"  className="devicon-css3-plain colored toolIcons"></i>
                </p>
            </div>
             </div>

            <div className="card  col-lg-12 col-md-10 col-sm-8" style={{ width: '400px' }}>
            <div className="card-body">
                <h5 className="card-title centerAlign">Backend</h5>
                <p className="card-text cardcontain"><i data-toggle="tooltip" title="heroku"  className="devicon-heroku-original toolIcons"></i>
                                                <i data-toggle="tooltip"  title="postgresql"  className="devicon-postgresql-plain-wordmark toolIcons"></i>
                                                <i data-toggle="tooltip"  title="mysql" className="devicon-mysql-plain-wordmark toolIcons"></i></p>
            </div>
            </div>

            <div className="card  col-lg-12 col-md-10 col-sm-8" style={{ width: '400px' }}>
            <div className="card-body">
                <h5 className="card-title centerAlign">Backend</h5>
                <p className="card-text cardcontain"><i data-toggle="tooltip" title="heroku"  className="devicon-heroku-original toolIcons"></i>
                                                <i data-toggle="tooltip"  title="postgresql"  className="devicon-postgresql-plain-wordmark toolIcons"></i>
                                                <i data-toggle="tooltip"  title="mysql" className="devicon-mysql-plain-wordmark toolIcons"></i></p>
            </div>
            </div>

            <div className="card  col-lg-12 col-md-10 col-sm-8" style={{ width: '400px' }}>
            <div className="card-body">
                <h5 className="card-title centerAlign">Backend</h5>
                <p className="card-text cardcontain"><i data-toggle="tooltip" title="heroku"  className="devicon-heroku-original toolIcons"></i>
                                                <i data-toggle="tooltip"  title="postgresql"  className="devicon-postgresql-plain-wordmark toolIcons"></i>
                                                <i data-toggle="tooltip"  title="mysql" className="devicon-mysql-plain-wordmark toolIcons"></i></p>
            </div>
            </div>



            </div>
        </section>
    }
}export default Toolstest