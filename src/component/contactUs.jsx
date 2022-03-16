import React , { useState } from 'react';
import "../style/tout.scss"
import{ init } from '@emailjs/browser';
init("user_VMZRY92tzhFdreGcj3veP");



function ContactUs(props){


    

return (
   < div>
    <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="title">Contact Us</h2>
                                <p>Let us know what you think! In order to provide better service,
                                     please do not hesitate to give us your feedback. Thank you.</p><hr/>
                                <form id="contact-form"  
                                   >
                                <div className="form-group">
                                <div className="row">
                                <div className="col-md-6">
                                    <input placeholder = "Name"  id="name" type="text" 
                                       className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <input placeholder = "Email"  id="email" type="email"
                                      className="form-control" aria-describedby="emailHelp"
                                    />
                                </div>
                                </div>
                                </div>
                                <div className="form-group">
                                    <input placeholder = "Subject"  id="subject" type="text"
                                      className="form-control"
                                      />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder = "Message"  id="message" 
                                       className="form-control" rows="1" 
                                       />
                                </div>
                                <button type="submit" className='table66'>Submit</button>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

      </div>
        
            
     
);
    
    }
export default ContactUs;