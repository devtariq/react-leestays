import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component{
    render(){
        return(
            <div>
               {/* Footer Section Start */}
                <footer className="footer">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="footer-nav widget">
                            <h4>All destinations</h4>
                            <ul>
                            <li><Link to="lonavala">Lonavala</Link></li>
                            <li><Link to="pawna">Pawna lake</Link></li>
                            <li><Link to="igatpuri">Igatpuri</Link></li>
                            </ul>
                        </div>
                        <div className="footer-nav widget mt-5">
                            <h4>Quick links</h4>
                            <ul>
                            <li><Link to="about">About us</Link></li>
                            <li><Link to="contact">Contact us</Link></li>
                            <li><Link to="faq">FAQ</Link></li>
                            <li><Link to="partner">Partner with us</Link></li>
                            <li><Link to="complaint">Complaint &amp; Suggetions </Link></li>
                            <li><Link to="terms">Terms &amp; Conditions</Link></li>
                            <li><Link to="site">Sitemap</Link></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </footer>
                {/* Footer Section End */}
            </div>
        );
    }
}

export default Footer;