
import React, { Component } from 'react';

class Header extends Component {
    render(){
        return(
             /* Header Start */
    <header className="header-section">
    <div className="primary-navigation start-header start-style">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-md">
                        <a className="navbar-brand" href="index.html" target="_blank"><img src="images/logo1.png"
                                alt="BrandNav" /></a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="destination.html"
                                        role="button" aria-haspopup="true" aria-expanded="false">Destinations</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                    </div>
                                </li>
                                <li className="nav-item query-item">
                                    <a className="nav-link" href="#">Send an Inquiry</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"
                                        role="button" aria-haspopup="true" aria-expanded="false"><i
                                            className="fa fa-user"></i></a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>
        )
    }
}

export default Header