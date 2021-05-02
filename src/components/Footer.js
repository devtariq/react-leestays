import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
           /*   <!-- Footer Section Start --> */
    <footer className="footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="footer-nav widget">
                    <h4>All destinations</h4>
                    <ul>
                        <li><a href="#">Lonavala</a></li>
                        <li><a href="#">Pawna lake</a></li>
                        <li><a href="#">Igatpuri</a></li>
                    </ul>
                </div>
                <div className="footer-nav widget mt-5">
                    <h4>Quick links</h4>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Partner with us</a></li>
                        <li><a href="#">Complaint & Suggetions </a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Sitemap</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
</footer>
/* <!-- Footer Section End --> */
        );
    }
}

export default Footer;