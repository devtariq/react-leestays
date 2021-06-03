import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-section">
      <div className="primary-navigation start-header start-style">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-md">
                <Link to="/" className="navbar-brand">
                  <img src="assets/images/logo1.png" alt="BrandNav" />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to=""
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Destinations
                      </Link>

                      <div className="dropdown-menu">
                        <Link to="/destination" className="dropdown-item">
                          Destination
                        </Link>
                        <Link to="/mapview" className="dropdown-item">
                          Map View
                        </Link>
                        <Link to="/single-villa" className="dropdown-item">
                          Single Villa
                        </Link>
                      </div>
                    </li>
                    <li className="nav-item query-item">
                      <Link className="nav-link" to="">
                        Send an Inquiry
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        to=""
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-user" />
                      </Link>
                      <div className="dropdown-menu">
                        <Link to="/register" className="dropdown-item">
                          Register
                        </Link>
                        <Link to="/login" className="dropdown-item">
                          Login
                        </Link>
                        <Link to="/myprofile" className="dropdown-item">
                          My Profile
                        </Link>
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
  );
}

export default Header;
