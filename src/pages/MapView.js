import  { useState } from 'react';
import React, { Component } from 'react';
import Booking from '../components/Booking';
import SingleVilla from '../components/VillaCarousel';
import Review from '../components/Review';
import GoogleMap from '../components/GoogleMap';
export class MapView extends Component {
    render() {
        return (
            <div>
            {/* Banner Section Start */}
            <section className="form-section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <Booking />
                  </div>
                </div>
              </div>
            </section>
            {/* Banner Section End */}
            {/* Top Villa Section Start */}
            <section className="map-view">
              <div className="container">
                <div className="row align-items-center">
                    
                        <SingleVilla />
                  <div className="col-lg-8 col-sm-8 full-map">
                  <GoogleMap/>
                  </div>
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
                      <p>Thinking about a holiday with your family, friends, or with your colleagues? Leestays offer
                        you clean, cozy and spacious private villas as well as bungalows creating a supreme holiday
                        experience. Being a tourist spot Lonavala is also known for its beautiful villas and
                        bungalows giving you a pre-eminent experience. Exclusively meant for our guests and have a
                        wonderful vacation. Inspired by the paradise living area our villas give you exquisite
                        bedrooms that lead directly towards the beautiful garden and pool view. On the other hand,
                        feel the cool breeze of exotic Lonavala hill station which offers you a dazzling sight of
                        its beauty.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="about-img">
                      <img src="./assets/images/about.jpg" alt="About" />
                      <a className="vbox-item" data-gall="gall-video" data-autoplay="true" data-vbtype="video" href="https://youtu.be/bS5P_LAqiVg"><i className="fa fa-play" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* About Section End */}
            {/* Choose Section Start */}
            <section className="choose-section section-padding">
              <div className="container">
                <h2 className="section-title mb-4 text-center">Why choose Leestays?</h2>
                <div className="row">
                  <div className="col-lg-3 col-sm-3">
                    <div className="choose-item text-center">
                      <span><img src="./assets/images/check.svg" alt="" /></span>
                      <p>Daily Checks</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-3">
                    <div className="choose-item text-center">
                      <span><img src="./assets/images/quality.svg" alt="" /></span>
                      <p>Quality Personal Care</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-3">
                    <div className="choose-item text-center">
                      <span><img src="./assets/images/support.svg" alt="" /></span>
                      <p>24x7 Call Support</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-3">
                    <div className="choose-item text-center">
                      <span> <img src="./assets/images/bed.svg" alt="" /></span>
                      <p>White Bedding</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Choose Section End */}
            
            {/* Review Section Start */}
            <section className="review">
              <div className="container">
                <h2 className="section-title mb-5 text-center">Recent Reviews</h2>
                <div className="row">
                  <div className="col-lg-12">
                    <Review />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="faq-wrap mt-5">
                      <h2 className="section-title mb-4">What You’ll Find In Lonavala</h2>
                      <p>Lonavala is one of the top tourist destinations and hill stations in India. This place is
                        around 65 km from Pune city and 95 km from Mumbai city. Being close to the most populated
                        metropolitan cities, Lonavala has become a popular weekend getaway. This hill station is
                        connected to nearby cities by railway and national highway. This place also famous for
                        chikki, a traditional Indian sweet (brittle) generally made from nuts and jaggery/sugar.
                      </p>
                      <p>If you want to see a panoramic view of the sahyadri ranges and lush green beauty then you
                        must book a stay in Lonavala. With the peaceful environment of Lonavala’s Villa, you will
                        find a great escape from the hustle and bustle of the city life. You will get to see around
                        10 big waterfalls around Lonavala. You will find 7 beautiful lakes and many mountains around
                        your bungalow in Lonavala. There are more than 8 popular trekking and hiking points in
                        Lonavala.</p>
                        <div className="accordion" id="faq-wrapper">
                        <div className="faq-item">
                          <div className="faq-header" id="headingOne">
                            <h4 className="faq-title" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Is there any extra charge for
                              booking a villa?</h4>
                          </div>
                          <div id="collapseOne" className="collapse faq-content show" aria-labelledby="headingOne" data-parent="#faq-wrapper">
                            <div className="faq-text">
                              Ans: There are no extra charges for booking villas on Leestays. Prices what you
                              see on the website are final prices.
                            </div>
                          </div>
                        </div>
                        {/*End Faq Order*/}
                        <div className="faq-item">
                          <div className="faq-header" id="heading-2">
                            <h4 className="faq-title collapsed" data-toggle="collapse" data-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">What are other services?</h4>
                          </div>
                          <div id="collapse-2" className="collapse faq-content" aria-labelledby="heading-2" data-parent="#faq-wrapper">
                            <div className="faq-text">
                              Consectetur adipisicing elit. Minima cumque voluptatum deleniti nesciunt debitis
                              itaque.
                            </div>
                          </div>
                        </div>
                        {/*End Faq Order*/}
                        <div className="faq-item">
                          <div className="faq-header" id="heading-3">
                            <h4 className="faq-title collapsed" data-toggle="collapse" data-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">What are check-in and checkout
                              timings? </h4>
                          </div>
                          <div id="collapse-3" className="collapse faq-content" aria-labelledby="heading-3" data-parent="#faq-wrapper">
                            <div className="faq-text">
                              Consectetur adipisicing elit. Minima cumque voluptatum deleniti nesciunt debitis
                              itaque.
                            </div>
                          </div>
                        </div>
                      </div> {/* Accordion End */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Review Section End */}
          </div>
        )
    }
}

export default MapView
