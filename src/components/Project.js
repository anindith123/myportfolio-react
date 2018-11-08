import React, { Component } from 'react';
import '../styles/css/bootstrap.min.css'
import '../styles/css/new_styles.css'
import image from '../styles/css/IMG_1156.JPG'
import { Modal } from 'react-bootstrap';



class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
        show : false
        };
            this.handleShow = this.handleShow.bind(this);
            this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        let data = this.props.projdat
        return <div>
            <div className="card  col-lg-12 col-md-10 col-sm-8 centerAlign" style={{ width: '400px' }}>
                <img className="card-img-top" src={image} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{data ? data['title'] : "Loading..."}</h4>
                    <p className="card-text">{data ? data['short_desc'] : "Loading..."}</p>
                    <button type="button" className="btn btn-primary" onClick={this.handleShow}>see more</button>
                </div>
            </div>

            <Modal animation={false} show={this.state.show} onHide={this.handleClose}>
                <Modal.Header>
                    <Modal.Title>{data ? data['title'] : "Loading..."}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{data ? data['description'] : "Loading..."}
                    </p>
                    <b>Tools:</b><p>{data ? data['tools'] : "Loading..."}</p>
                </Modal.Body>
                <Modal.Footer>
                    <button href={data ? data['git_link'] : "Loading..."} className="btn btn-primary">Github</button>
                    <button className="btn btn-primary" onClick={this.handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    }
}
export default Project