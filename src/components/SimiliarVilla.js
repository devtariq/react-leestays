import React from 'react';
import { useState } from 'react';
import Slider from "react-slick";

function SimiliarVilla() {

    const settings = {
        slidesToShow: 3,
        dots: false,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        responsive: [

            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
        ]
    };

    const [villas, setVillas] = useState([
        { src: 'tvil5.jpg', title: 'Festoon villa', rating: '4.3(35)', meta1: 'in Lonavala with 4 rooms for 15-20 guests', meta2: 'Sun to Fri: ₹3990/night - Sat: ₹5990/night', id: 1 },
        { src: 'tvil3.jpg', title: 'Lonavala haveli', rating: '4.5(32)', meta1: 'in Lonavala with 4 rooms for 15-20 guests', meta2: 'Sun to Fri: ₹3990/night - Sat: ₹5990/night', id: 2 },
        { src: 'tvil2.png', title: 'Festoon villa', rating: '4(3)', meta1: 'in Lonavala with 4 rooms for 15-20 guests', meta2: 'Sun to Fri: ₹3990/night - Sat: ₹5990/night', id: 3 },
        { src: 'tvil5.jpg', title: 'Festoon villa', rating: '4.5(35)', meta1: 'in Lonavala with 4 rooms for 15-20 guests', meta2: 'Sun to Fri: ₹3990/night - Sat: ₹5990/night', id: 4 },
    ]);

    return (
        <>
            {/* Similiar Villa Start */}
            <div className="similiar-villa">
                <h3 className="subtitle">Similar villas </h3>
                <Slider {...settings} className="s-villa-carousel">
                    {villas.map((villa) => (
                        <div className="villa-entry" key={villa.id}>
                            <div className="villa-img">
                                <div className="batch"><img src="assets/images/bookmark.png" alt="" /></div>
                                <div className="villa-img">
                                    <img src={'assets/images/' + villa.src} alt="" />
                                </div>
                            </div>
                            <div className="villa-txt">
                                <h4> {villa.title} <span><i className="fa fa-star" /> {villa.rating}</span></h4>
                                <div className="villa-meta">
                                    <span>{villa.meta1}</span>
                                    <span>{villa.meta2}</span>
                                </div>
                            </div>
                        </div>
                    ))}


                </Slider>
            </div>
            {/* Similiar Villa End */}
        </>
    )
}

export default SimiliarVilla
