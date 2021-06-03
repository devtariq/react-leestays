import React, { Component } from "react";

export class Registration extends Component {
  render() {
    return (
      <div>
           {/*  Registration Section Start */}
      <section className="login-section register-section section-padding" style={{backgroundImage: "url('./assets/images/login-bg.jpg')"}}>
        <div className="login-wrap">
          <div className="login-head text-center">
            <h3>Register To Leestays</h3>
          </div>
          <div className="login-body">
        
            <form action="#">
              <div className="form-group"> 
                <input type="text" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group"> 
                <input type="email" id="email" placeholder="Your Email" />
              </div>
              <div className="form-group"> 
                <input type="tel" id="number" placeholder="Mobile Number" />
              </div>
              <button className="custom-btn">Register</button>
            </form>
            
          </div>
        </div>
      </section>
      {/* Registration Section End */}

      </div>
    );
  }
}

export default Registration;
