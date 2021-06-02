import React from 'react';
import { useState } from 'react';
import Slider from "react-slick";

function TopVilla() {

    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        focusOnSelect: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [topVillas, settopVillas] = useState([
        { src: 'tvil3.jpg' , title: 'Festoon villa', rating: '4.3(33)', meta1: 'in Feston with 4 rooms for 15-20 guests', meta2: 'Sun to Fri: ₹10990/night - Sat: ₹17990/night', id: 1 },
        { title: 'Hennessy villa', rating: '4.3(33)', meta1: 'in Lonavala with 4 rooms for 15-20 guests', meta2: 'Sun to Fri: ₹11990/night - Sat: ₹19990/night', id: 2 },
        { title: 'Lonavala haveli', rating: '4.2(13)', meta1: 'in Lonavala with 4 rooms for 15-20 guests', meta2: 'Sun to Fri: ₹10990/night - Sat: ₹17990/night', id: 3 },
        { title: 'Festoon villa', rating: '4.5(23)', meta1: 'in Lonavala with 4 rooms for 15-20 guests', meta2: 'Sun to Fri: ₹10990/night - Sat: ₹17990/night', id: 4 },
    ]);
    return (
        <div className="row">
            {topVillas.map((tvilla) => (
                <div className="col-lg-4" key={tvilla.id}>
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
                            <h4>{tvilla.title} <span><i className="fa fa-star" /> {tvilla.rating}</span></h4>
                            <div className="villa-meta">
                                <span>{tvilla.meta1}</span>
                                <span>{tvilla.meta2}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>


    );
}

export default TopVilla;