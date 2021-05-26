import React, { Component } from "react";
import Slider from "react-slick";
export default class PrivateVilla extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        focusOnSelect: false,
        speed: 500,
        slidesToShow: 5,
      };
      return (
        
        <Slider {...settings} className="villa-wrap mt-5">
        <div className="s-villa">
          <img src="assets/images/v1.jpg" alt="Villa" />
        </div>
        <div className="s-villa">
          <img src="assets/images/v2.jpg" alt="Villa" />
        </div>
        <div className="s-villa">
          <img src="assets/images/v3.jpg" alt="Villa" />
        </div>
        <div className="s-villa">
          <img src="assets/images/v4.jpg" alt="Villa" />
        </div>
        <div className="s-villa">
          <img src="assets/images/v5.jpg" alt="Villa" />
        </div>
        <div className="s-villa">
          <img src="assets/images/v2.jpg" alt="Villa" />
        </div>
        <div className="s-villa">
          <img src="assets/images/v3.jpg" alt="Villa" />
        </div>
        <div className="s-villa">
          <img src="assets/images/v4.jpg" alt="Villa" />
        </div>
      </Slider>
      );
    }
  }