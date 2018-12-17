import React, {Component} from 'react';
import '../styles/css/bootstrap.min.css'
import '../styles/css/new_styles.css'
import firebase from '../styles/css/firebase.png'
import postman from '../styles/css/postman.png'
import vscode from '../styles/css/xcode.png'

class Toolstest extends Component {
    render() {
        return <section className = "toolsBg centerAlign">
            <p className = "componentHeading">Tools & Technologies</p><br/>
            <div ref="project_div" className="card-columns centerAlign col-sm-3 col-md-12">
            <div className="card col-sm-3 col-md-12" style={{ width: '100%' }}>
            <div className="card-body centerAlign">
                <h5 className="card-title centerAlign">Languages</h5>
                <pre><p className="card-text cardcontain"><i data-toggle="tooltip" title="C"  className="devicon-c-plain colored toolIcons"></i>&nbsp;
                    <i data-toggle="tooltip" title="Java"  className="devicon-java-plain colored toolIcons"></i>&nbsp;
                    <i data-toggle="tooltip" title="javascript"  className="devicon-javascript-plain colored toolIcons"></i>&nbsp;
                    <i data-toggle="tooltip" title="python"  className="devicon-python-plain toolIcons" ></i>
                </p></pre>
                    
            </div>
            </div>
            <div className="card col-sm-3 col-md-12" style={{ width: '100%' }}>
            <div className="card-body">
                <h5 className="card-title centerAlign">Frameworks/Environments</h5>
                <pre><p className="card-text cardcontain"><i data-toggle="tooltip" title="react"  className="devicon-react-original colored toolIcons"></i>&nbsp;
                                                 <i data-toggle="tooltip" title="django"  className="devicon-django-plain toolIcons"></i>&nbsp;
                                                 <i data-toggle="tooltip" title="bootstrap"  className="devicon-bootstrap-plain toolIcons"></i>&nbsp;
                                                 <i data-toggle="tooltip" title="Express" className="devicon-express-original-wordmark toolIcons"></i>&nbsp;
                                                 <i data-toggle="tooltip" title="Node js" className="devicon-nodejs-plain-wordmark toolIcons"></i>&nbsp;
                                                 <i data-toggle="tooltip"  title="mocha" className="devicon-mocha-plain colored toolIcons"></i>
                                                 
                </p></pre>
            </div>
            </div>

             <div className="card col-sm-3 col-md-12" style={{ width: '100%' }}>
             <div className="card-body centerAlign">
                <h5 className="card-title centerAlign">Design</h5>
                <pre><p className="card-text cardcontain"><i data-toggle="tooltip" title="html5"  className="devicon-html5-plain colored toolIcons"></i>&nbsp;
                                                <i data-toggle="tooltip" title="css3"  className="devicon-css3-plain colored toolIcons"></i>
                </p></pre>
            </div>
             </div>

            <div className="card col-sm-3 col-md-12" style={{ width: '100%' }}>
            <div className="card-body">
                <h5 className="card-title centerAlign">Tools</h5>
                <pre><p className="card-text cardcontain">
                                                <i data-toggle="tooltip"  title="git"  className="devicon-git-plain-wordmark toolIcons"></i>&nbsp;
                                                <img title="vs code" className="toolImg" src={vscode} alt="vscode icon"></img>&nbsp;
                                                <img title="postman" className="toolImg" src={postman} alt="postman icon"></img>&nbsp;
                                                <i data-toggle="tooltip"  title="webpack"  className="devicon-webpack-plain colored toolIcons"></i></p></pre>
            </div>
            </div>

            <div className="card col-sm-3 col-md-12" style={{ width: '100%' }}>
            <div className="card-body">
                <h5 className="card-title centerAlign">Database</h5>
                <pre><p className="card-text cardcontain"><i data-toggle="tooltip" title="mongoDB"  className="devicon-mongodb-plain-wordmark colored toolIcons"></i>&nbsp;
                                                <i data-toggle="tooltip"  title="postgresql"  className="devicon-postgresql-plain-wordmark toolIcons"></i>&nbsp;
                                                <i data-toggle="tooltip"  title="mysql" className="devicon-mysql-plain-wordmark toolIcons"></i></p></pre>
            </div>
            </div>

            <div className="card col-sm-3 col-md-12" style={{ width: '100%' }}>
            <div className="card-body">
                <h5 className="card-title centerAlign">Deployment</h5>
                <pre><p className="card-text cardcontain"><i data-toggle="tooltip" title="heroku"  className="devicon-heroku-original toolIcons"></i>&nbsp;
                                                    <img title="firebase" className="toolImg" src={firebase} alt="firebase icon"></img>
                                                </p></pre>
            </div>
            </div>



            </div>
        </section>
    }
}export default Toolstest