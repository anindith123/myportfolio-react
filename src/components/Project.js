import React, { Component } from 'react';
import '../styles/css/bootstrap.min.css'
import '../styles/css/new_styles.css'
import { Modal } from 'react-bootstrap';
import PhotoBooth from '../styles/css/PhotoBooth.jpg';
import RedditClone from '../styles/css/RedditClone.jpg';
import ShoppingCart from '../styles/css/ShoppingCart.jpg';
import StoresRESTAPI from '../styles/css/StoresRESTAPI.jpg';
import BurgerOrder from '../styles/css/BurgerOrder.jpg';
import CollegeManagementSystem from '../styles/css/CollegeManagementSystem.jpg';



class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
        show : false,
        projimg : {
            'PhotoBooth' : PhotoBooth,
            'RedditClone' : RedditClone,
            'ShoppingCart' : ShoppingCart,
            'StoresRESTAPI' : StoresRESTAPI,
            'BurgerOrder' : BurgerOrder,
            'CollegeManagementSystem' : CollegeManagementSystem

        }
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
        let projimg = this.state.projimg[data['title']]
        return <div>
            <div className="card col-sm-3 col-md-10 centerAlign" style={{ width: '100%' }}>
                <img className="card-img-top projectImg" src={projimg} alt="project view"/>
                <div className="card-body centerAlign">
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
                    <a type= "button" href={data['git_link']} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit</a>
                    <button className="btn btn-primary" onClick={this.handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    }
}
export default Project