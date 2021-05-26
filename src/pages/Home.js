import React, { Component } from "react";
import Booking from "../components/Booking";
import PrivateVilla from "../components/PrivateVilla";
import TopVilla from "../components/TopVilla";
import ReviewSlide from "../components/Review";

class Home extends Component {
  render() {
    return (
      <div>
        {/* Banner Section Start */}
        <section
          className="banner-section"
          style={{ backgroundImage: 'url("/assets/images/banner1.jpg")' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-wrap">
                  <Booking />
                  <div className="quick-call">
                    <span>
                      <img src="assets/images/call.png" alt="" />
                    </span>
                    <div className="call-inner">
                      <h3 className="text-light mb-0">
                        Call: +91 8181 9090 69
                      </h3>
                      <span className="text-light">24 x 7 support </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner Section End */}
        {/* Villa Section Start */}
        <div className="villa-section gray-bg section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-intro justify-content-center text-center">
                  <h2 className="section-title mb-3">
                    Book Private Villas on Rent
                  </h2>
                  <p>
                    The fastest growing villa chain based in Lonavala. Leestays
                    providing you an exclusive range of private villas on rent.
                    We are committed to provide you clean, cozy and hassle-free
                    holiday villas &amp; bungalow rentals
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <PrivateVilla />
              </div>
            </div>
          </div>
        </div>
        {/* Villa Section End */}

        {/* Top Villa Section Start */}
        <section className="top-villa section-padding">
          <div className="container">
            <h2 className="section-title mb-5">Top Villas</h2>
            <div className="row">
              <TopVilla />
              <TopVilla />
              <TopVilla />
              <TopVilla />
              <TopVilla />
            </div>
          </div>
        </section>
        {/* Top Villa Section End */}
        {/* About Section Start */}
        <section className="about-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6">
                <div className="about-txt">
                  <h3>We are</h3>
                  <p>
                    Thinking about a holiday with your family, friends, or with
                    your colleagues? Leestays offer you clean, cozy and spacious
                    private villas as well as bungalows creating a supreme
                    holiday experience. Being a tourist spot Lonavala is also
                    known for its beautiful villas and bungalows giving you a
                    pre-eminent experience. Exclusively meant for our guests and
                    have a wonderful vacation. Inspired by the paradise living
                    area our villas give you exquisite bedrooms that lead
                    directly towards the beautiful garden and pool view. On the
                    other hand, feel the cool breeze of exotic Lonavala hill
                    station which offers you a dazzling sight of its beauty.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="about-img">
                  <img src="assets/images/about.jpg" alt="About" />
                  <a
                    className="vbox-item"
                    data-gall="gall-video"
                    data-autoplay="true"
                    data-vbtype="video"
                    href="https://youtu.be/bS5P_LAqiVg"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section End */}
        {/* Choose Section Start */}
        <section className="choose-section section-padding">
          <div className="container">
            <h2 className="section-title mb-4 text-center">
              Why choose Leestays?
            </h2>
            <div className="row">
              <div className="col-lg-3 col-sm-3">
                <div className="choose-item text-center">
                  <span>
                    <img src="assets/images/check.svg" alt="" />
                  </span>
                  <p>Daily Checks</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-3">
                <div className="choose-item text-center">
                  <span>
                    <img src="assets/images/quality.svg" alt="" />
                  </span>
                  <p>Quality Personal Care</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-3">
                <div className="choose-item text-center">
                  <span>
                    <img src="assets/images/support.svg" alt="" />
                  </span>
                  <p>24x7 Call Support</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-3">
                <div className="choose-item text-center">
                  <span>
                    {" "}
                    <img src="assets/images/bed.svg" alt="" />
                  </span>
                  <p>White Bedding</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Choose Section End */}
        <section className="review">
            <div className="container">
                <h2 className="section-title mb-5 text-center">Recent Reviews</h2>
                <div className="row">
                    <div className="col-lg-12">
                    <ReviewSlide />
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default Home;
