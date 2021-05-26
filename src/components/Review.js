import React, { Component } from "react";
import Slider from "react-slick";
export default class ReviewSlide extends Component {

    render() {
      const settings = {
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        variableWidth: false,
      };
      return (
        <div>
             {/* Review Section Start */}
       
                <Slider {...settings} className="review-slide">
                    <div className="single-quote">
                    <div className="quote-head">
                        <span>
                        <img src="assets/images/rev1.png" alt="" />
                        </span>
                        <div className="quote-inner">
                        <h4>Akash Surwase</h4>
                        <span>
                            <i className="fa fa-star" /> 4/5 for Festoon Villa
                        </span>
                        </div>
                    </div>
                    <p>
                        Everything was just perfect, right from check-in to
                        check-out. Host was quick in responding to the messages.
                        Also Gopal uncle took very good care and was very
                        responsive as well, had a good welcome and the ...
                    </p>
                    <p className="review-date">Posted on 2 April 2021</p>
                    </div>{" "}
                    {/* Single Quote End */}
                    <div className="single-quote">
                    <div className="quote-head">
                        <span>
                        <img src="assets/images/rev2.png" alt="" />
                        </span>
                        <div className="quote-inner">
                        <h4>Vishal Javeri</h4>
                        <span>
                            <i className="fa fa-star" /> 5/5 for Hennessy Villa
                        </span>
                        </div>
                    </div>
                    <p>
                        Great place to stay. Very neat and clean. Entire property
                        is very well maintained. Staffs are very cordial. The
                        owner is always there as and when needed. I would love to
                        visit again later. place is very nicely done by the host
                        ...
                    </p>
                    <p className="review-date">Posted on 2 April 2021</p>
                    </div>{" "}
                    {/* Single Quote End */}
                    <div className="single-quote">
                    <div className="quote-head">
                        <span>
                        <img src="assets/images/Shruti.png" alt="" />
                        </span>
                        <div className="quote-inner">
                        <h4>Shruti Kulkarni</h4>
                        <span>
                            <i className="fa fa-star" /> 3/5 for Culture Home
                        </span>
                        </div>
                    </div>
                    <p>
                        Our stay at Pool culture home was extremely comfortable
                        despite it being a last minute booking. Our caretaker
                        Dilip was readily available, helpful and kind. There were
                        a few things that weren’t working like the...
                    </p>
                    <p className="review-date">Posted on 4 April 2021</p>
                    </div>{" "}
                    {/* Single Quote End */}
                    <div className="single-quote">
                    <div className="quote-head">
                        <span>
                        <img src="assets/images/rev1.png" alt="" />
                        </span>
                        <div className="quote-inner">
                        <h4>Shruti Kulkarni</h4>
                        <span>
                            <i className="fa fa-star" /> 3/5 for Culture Home
                        </span>
                        </div>
                    </div>
                    <p>
                        Our stay at Pool culture home was extremely comfortable
                        despite it being a last minute booking. Our caretaker
                        Dilip was readily available, helpful and kind. There were
                        a few things that weren’t working like the...
                    </p>
                    <p className="review-date">Posted on 4 April 2021</p>
                    </div>{" "}
                    {/* Single Quote End */}
                </Slider>
      {/* Review Section End */}
        </div>
         
      );
    }
  }