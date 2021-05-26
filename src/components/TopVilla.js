import React, { Component } from "react";
import Slider from "react-slick";
export default class TopVilla extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        focusOnSelect: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        
        <div className="col-lg-4 col-sm-6">
                <div className="villa-entry">
                <div className="villa-img">
                    <div className="batch"><img src="assets/images/bookmark.png" alt="" /></div>
                    
                    <Slider {...settings}>
                        <img src="assets/images/tvil3.jpg" alt="" />
                        <img src="assets/images/tvil4.jpg" alt="" />
                        <img src="assets/images/tvil5.jpg" alt="" />
                        <img src="assets/images/tvil3.jpg" alt="" />
                   
                    </Slider>
                </div>
                <div className="villa-txt">
                    <h4>Festoon villa <span><i className="fa fa-star" /> 4.3 (32)</span></h4>
                    <div className="villa-meta">
                    <span>in Lonavala with 4 rooms for 15-20 guests</span>
                    <span>Sun to Fri: ₹10990/night - Sat: ₹17990/night</span>
                    </div>
                </div>
                </div>
            </div>
      );
    }
  }