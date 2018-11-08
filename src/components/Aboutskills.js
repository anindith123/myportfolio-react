import React, {Component} from 'react';
import '../styles/css/bootstrap.min.css'
import '../styles/css/new_styles.css'

class Aboutskills extends Component {
    render() {
        return <section >
        <div className = "centerAlign">
<div className = "progress prog" style={{height:'15px'}}>
<div className ="progress-bar progress-bar-primary" style = {{width:'70%'}}>Html</div>70%<br/>
</div><br/>
<div className = "progress prog" style={{height:'15px'}}>
<div className ="progress-bar bg-success" style = {{width:'90%'}}>CSS</div>90%<br/>
</div><br/>
<div className = "progress prog" style={{height:'15px'}}>
<div className ="progress-bar bg-info" style = {{width:'55%'}}>JavaScript</div>55%<br/>
</div><br/>
<div className = "progress prog" style={{height:'15px'}}>
<div className ="progress-bar bg-danger" style = {{width:'80%'}}>Python</div>80%<br/>
</div>

</div>
    </section>
    }
}export default Aboutskills