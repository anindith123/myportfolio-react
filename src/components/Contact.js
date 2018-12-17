import React, { Component } from 'react';
import '../styles/css/bootstrap.min.css'
import '../styles/css/new_styles.css'


class Contact extends Component {
    render() {
        return <section className = "centercontact">
        <p className="componentHeading">Contact</p><br />
            <p className = "centerAlign">  If you find my profile intresting wanted to know more about me or leave a feedback you can fill the form or contact me </p>
<div className="centercontact">
            <div className="row centercontact">
                <div className="col-md-6 col-sm-6">
                    <form className="contactForm">
                        <div className="from-group">
                            <label> name </label>
                            <input type="text" className="form-control" placeholder="Name" />
                        </div><br />
                        <div className="from-group">
                            <label> Email </label>
                            <input type="email" className="form-control" placeholder="Email" />
                        </div><br />
                        <div className="from-group">
                            <label> message </label>
                            <textarea className="form-control" ></textarea>
                        </div><br />
                        <div className="from-group">
                            <center><input type="submit" className="btn btn-primary" value="submit" /></center>
                        </div>

                    </form><br/>
                </div>
            
                <div className=" col-md-6 col-sm-6 centerAlign">
                <div className=" card contactCard" >
                        <div className="card-body"><i className='fas fa-phone' style={{ fontsize: '24px' }}></i> <p>+1(337)322-1948</p>
                            <i className='far fa-envelope' style={{ fontsize: '24px' }}></i><p>bujalaay@mail.uc.edu<br />anindith123@gmail.com</p></div>
                    </div><br />
                    <div className="card contactCard">
                        <div className="card-body centerAlign"><i className='fas fa-address-card' style={{ fontsize: '25px' }}></i><p> Anindith Reddy Bujala<br />260Ludlow Ave. Apt4E<br />Cincinnati, OH<br />45220</p></div>
                    </div><br />
                    
                    <div className="card contactSocials">
                        <div className="card-body centerAlign"><div><pre>
                        <a href={"https://www.linkedin.com/in/anindith-reddy-bujala-a12056154/"} target="_blank" rel="noopener noreferrer" className="fa fa-linkedin"></a>&nbsp;
                            <a href={"https://github.com/anindith123"} target="_blank" rel="noopener noreferrer" className="fa fa-github"></a>&nbsp;
                            <a href={"https://www.facebook.com/anindith"} target="_blank" rel="noopener noreferrer" className="fa fa-facebook"></a>&nbsp;
                            <a href={"https://plus.google.com/u/1/109423117544218514844"}  target="_blank" rel="noopener noreferrer" className="fa fa-google"></a></pre>
                            
                        </div></div>
                    </div>

                </div>
                
            </div> 
            </div>
        </section>
            }
        }
export default Contact