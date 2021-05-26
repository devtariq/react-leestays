import React, { Component } from "react";

export class Login extends Component {
  render() {
    return (
      <div>
           {/*  Login Section Start */}
      <section className="login-section section-padding" style={{backgroundImage: "url('./assets/images/login-bg.jpg')"}}>
        <div className="login-wrap">
          <div className="login-head text-center">
            <h3>Login To Leestays</h3>
          </div>
          <div className="login-body">
            <p>
              We will send you a One Time Password on your mobile
              number
            </p>
            <form action="#">
              <span>Edit your Mobile Number</span>
              <div className="form-group"> <input type="tel" id="demo" placeholder="Mobile Number" /></div>
              <button className="custom-btn">Get OPT</button>
            </form>
            <div className="alt-login">
              <span>OR</span>
              <button className="custom-btn">
                <img src="/images/google.png" alt="" />
                Continue using Google
              </button>
              <button className="custom-btn">
                <img src="/images/facebook.png" alt="" />
                Continue using Facebook
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Login Section End */}

      </div>
    );
  }
}

export default Login;
