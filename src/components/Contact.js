import React, { Component } from 'react';
import '../styles/css/bootstrap.min.css'
import '../styles/css/new_styles.css'


class Contact extends Component {
    render() {
        return <section className="myComponent">
        <p className="componentHeading">Contact</p><br />
            <p className = "centerAlign">  If you find my profile intresting wanted to know more about me or leave a feedback you can fill the form or contact me </p>

            <div className="row">
                <div className="col-md-6 col-sm-6">
                    <form className="contactForm">
                        <div className="from-group">
                            <label> name </label>
                            <input type="text" className="form-control" placeholder="Name" />
                        </div><br />
                        <div className="from-group">
                            <label> Email </label>
                            <input type="email" className="form-control" placeholder="Name" />
                        </div><br />
                        <div className="from-group">
                            <label> message </label>
                            <textarea className="form-control" ></textarea>
                        </div><br />
                        <div className="from-group">
                            <center><input type="submit" className="btn btn-primary" value="submit" /></center>
                        </div>

                    </form>
                </div>

                <div className="col-md-6">
                    <div className="card contactCard">
                        <div className="card-body centerAlign"><i className='fas fa-address-card' style={{ fontsize: '25px' }}></i><p> Anindith Reddy Bujala<br />260Ludlow Ave. Apt4E<br />Cincinnati, OH<br />45220</p></div>
                    </div><br />
                    <div className="card contactCard">
                        <div className="card-body centerAlign "><i className='fas fa-phone' style={{ fontsize: '24px' }}></i> <p>+1(337)322-1948</p>
                            <i className='far fa-envelope' style={{ fontsize: '24px' }}></i><p>bujalaay@mail.uc.edu<br />anindith123@ymail.com</p></div>
                    </div><br />
                    <div className="card contactSocials">
                        <div className="card-body centerAlign"><div>
                            <a href={"https://www.facebook.com/anindith"} target="_blank" className="fa fa-facebook"></a>
                            <a href={"https://www.linkedin.com/in/anindith-reddy-bujala-a12056154/"} target="_blank" className="fa fa-linkedin"></a>
                            <a href={"www.google.com"} className="fa fa-google"></a>
                            <a href={"www.google.com"} className="fa fa-skype"></a>
                            <a href={"https://github.com/anindith123"} target="_blank" className="fa fa-github"></a>
                        </div></div>
                    </div>

                </div>
            </div> </section>
            }
        }
export default Contact