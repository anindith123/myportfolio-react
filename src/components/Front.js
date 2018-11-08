import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../styles/css/bootstrap.min.css'
import '../styles/css/styles.css'
import '../styles/css/new_styles.css'

class Front extends Component {
    render() {
        return <section className = "myComponent">
                    <div className = "frontBgImage">
                    <div className = "frontText">
                        <p className = "frontTextStyle1"> I am </p>
                        <p className = "frontTextStyle2"> Developer</p>
                    </div>
                    </div>
                </section>
        }
}
export default Front