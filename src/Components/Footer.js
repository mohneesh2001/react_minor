import React from 'react';
import './Footer.css';
const Footer = () => {
    return(
       
        <div className="footer-container">
      
       {/*    <h1>Footer HOURS</h1> */}
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>Your Company Name</h4>
                        <ul className="list-unstyled">

                        <li>Email - your email</li>
                        <li>Phone - 000-000-0000</li>
                       
                        </ul>
                    </div>
                    {/* Column2*/}
                    <div className="col">
                        <h4>Address</h4>
                        <ul className="list-unstyled">
                        <li>You</li>
                        <li>Some street</li> 
                        <li>some state</li> 
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>Hours</h4>
                        <ul className="list-unstyled">
                        <li>Monday - Friday</li>
                        <li>8:00am - 4:00pm</li> 
                        
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                            &copy;{new Date().getFullYear()} Your Name | All rights reserved

                    </p>



                </div>
            </div>
           
        </div>
    )

}
export default Footer;