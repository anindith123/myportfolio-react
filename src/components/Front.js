import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../styles/css/bootstrap.min.css'
import '../styles/css/styles.css'
import '../styles/css/new_styles.css'

class Front extends Component {
    render() {
        return <section className = "myComponent">
                    <div className = "frontBgImage frontImage">
                    <div className = "frontText">
                    <pre> <p className = "front frontalign"> `I Am` </p>
                        <p className = "front frontalign">&lt;/Developer;&gt;</p></pre>
                        
                    </div>
                    </div>
                </section>
        }
}
export default Front