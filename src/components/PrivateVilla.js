import React from "react";
import {useState} from "react";
import Slider from "react-slick";
function PrivateVilla () {

      const settings = {
        slidesToShow: 5,
        dots: true,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
      };

      const [privateVillas, setprivateVillas] = useState([
            {src: 'v1.jpg', id: 1},
            {src: 'v2.jpg', id: 1},
            {src: 'v3.jpg', id: 1},
            {src: 'v4.jpg', id: 1},
            {src: 'v5.jpg', id: 1},
            {src: 'v3.jpg', id: 1},
            {src: 'v1.jpg', id: 1},
      ]);

      return (
        
        <Slider {...settings} className="villa-wrap mt-5">
            {privateVillas.map( (pvilla) => (
                <div className="s-villa" key={pvilla.id}>
                    <img src={"assets/images/" + pvilla.src} alt="Villa" />
                </div>
            ))}
          
         
      </Slider>
      );
  }

  export default PrivateVilla;