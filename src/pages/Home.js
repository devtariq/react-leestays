import React, { Component } from 'react';

class Home extends Component {
    render(){
        return(
            <div className="main-content">
                <section className="banner-section">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="banner-wrap">
                    <div className="search-form">
                        <form action="#" method="post" className="form-inline row no-gutters">
                        
                                <div className="form-group right-border">
                                    <label htmlfor="location">Destination</label>
                                    <input className="form-control" type="text" id="location" placeholder="everywhere" />
                                </div>
                                <div className="form-group date-group right-border">
                                    <div className="form-inner">
                                        <label htmlfor="location">Check In</label>
                                        <input type="text" className="datepicker  form-control" placeholder="Add Date" />
                                    </div>
                                    <div className="form-inner">
                                        <label htmlfor="location">Check Out</label>
                                        <input type="text" className="datepicker form-control" placeholder="Add Date" />
                                    </div>
                                </div>

                                <div className="form-group right-border">
                                    <label htmlfor="location">Guests</label>
                                    <input type="text" className="form-control" placeholder="Add Guests" />
                                </div>
                                <div className="form-group search-btn">
                                    <button className="custom-btn"> <i className="fa fa-search"></i> Search</button>
                                </div>
                        </form>
                    </div> {/* <!-- Search Form End --> */}
                    <div className="quick-call">
                        <span><img src="assets/images/call.png" alt="" /></span>
                        <div className="call-inner">
                            <h3 className="text-light mb-0">Call: +91 8181 9090 69</h3>
                            <span className="text-light">24 x 7 support </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- Banner Section End --> */}

{/* <!-- Villa Section Start --> */}
<section className="villa-section gray-bg section-padding">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-intro justify-content-center text-center">
                    <h2 className="section-title mb-3">Book Private Villas on Rent</h2>
                    <p>The fastest growing villa chain based in Lonavala. Leestays providing you an exclusive range
                        of private villas on rent. We are committed to provide you clean, cozy and hassle-free
                        holiday villas & bungalow rentals</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="villa-wrap owl-carousel mt-5">
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
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- Villa Section End --> */}

{/* <!-- Top Villa Section Start --> */}
<section className="top-villa section-padding">

    <div className="container">
        <h2 className="section-title mb-5">
            Top Villas
        </h2>
        <div className="row">
            <div className="col-lg-4 col-sm-6">
                <div className="villa-entry">
                    <div className="villa-img">
                        <div className="batch"><img src="assets/images/bookmark.png" alt="" /></div>
                        <div className="villa-gallery owl-carousel">
                            <img src="assets/images/tvil1.jpg" alt="" />
                            <img src="assets/images/tvil4.jpg" alt="" />
                            <img src="assets/images/tvil5.jpg" alt="" />
                            <img src="assets/images/tvil3.jpg" alt="" />
                        </div>
                    </div>
                    <div className="villa-txt">
                        <h4>Festoon villa <span><i className="fa fa-star"></i> 4.3 (32)</span></h4>
                        <div className="villa-meta">
                            <span>in Lonavala with 4 rooms for 15-20 guests</span>
                            <span>Sun to Fri: ₹10990/night - Sat: ₹17990/night</span>
                        </div>
                    </div>
                </div>
            </div>{/* <!--  Vill Entry End --> */}
            <div className="col-lg-4 col-sm-6">
                <div className="villa-entry">
                    <div className="villa-img">
                        <div className="batch"><img src="assets/images/bookmark.png" alt="" /></div>
                        <div className="villa-gallery owl-carousel">
                            <img src="assets/images/tvil3.jpg" alt="" />
                            <img src="assets/images/tvil4.jpg" alt="" />
                            <img src="assets/images/tvil5.jpg" alt="" />
                            <img src="assets/images/tvil3.jpg" alt="" />
                        </div>
                    </div>
                    <div className="villa-txt">
                        <h4>Festoon villa <span><i className="fa fa-star"></i> 4.3 (32)</span></h4>
                        <div className="villa-meta">
                            <span>in Lonavala with 4 rooms for 15-20 guests</span>
                            <span>Sun to Fri: ₹10990/night - Sat: ₹17990/night</span>
                        </div>
                    </div>
                </div>
            </div>{/* <!--  Vill Entry End --> */}
            <div className="col-lg-4 col-sm-6">
                <div className="villa-entry">
                    <div className="villa-img">
                        <div className="batch"><img src="assets/images/bookmark.png" alt="" /></div>
                        <div className="villa-gallery owl-carousel">
                            <img src="assets/images/tvil1.jpg" alt="" />
                            <img src="assets/images/tvil4.jpg" alt="" />
                            <img src="assets/images/tvil5.jpg" alt="" />
                            <img src="assets/images/tvil3.jpg" alt="" />
                        </div>
                    </div>
                    <div className="villa-txt">
                        <h4>Festoon villa <span><i className="fa fa-star"></i> 4.3 (32)</span></h4>
                        <div className="villa-meta">
                            <span>in Lonavala with 4 rooms for 15-20 guests</span>
                            <span>Sun to Fri: ₹10990/night - Sat: ₹17990/night</span>
                        </div>
                    </div>
                </div>
            </div>{/* <!--  Vill Entry End --> */}
            <div className="col-lg-4 col-sm-6">
                <div className="villa-entry">
                    <div className="villa-img">
                        <div className="batch"><img src="assets/images/bookmark.png" alt="" /></div>
                        <div className="villa-gallery owl-carousel">
                            <img src="assets/images/tvil2.png" alt="" />
                            <img src="assets/images/tvil4.jpg" alt="" />
                            <img src="assets/images/tvil5.jpg" alt="" />
                            <img src="assets/images/tvil3.jpg" alt="" />
                        </div>
                    </div>
                    <div className="villa-txt">
                        <h4>Festoon villa <span><i className="fa fa-star"></i> 4.3 (32)</span></h4>
                        <div className="villa-meta">
                            <span>in Lonavala with 4 rooms for 15-20 guests</span>
                            <span>Sun to Fri: ₹10990/night - Sat: ₹17990/night</span>
                        </div>
                    </div>
                </div>
            </div>{/* <!--  Vill Entry End --> */}
            <div className="col-lg-4 col-sm-6">
                <div className="villa-entry">
                    <div className="villa-img">
                        <div className="batch"><img src="assets/images/bookmark.png" alt="" /></div>
                        <div className="villa-gallery owl-carousel">
                            <img src="assets/images/tvil5.jpg" alt="" />
                            <img src="assets/images/tvil4.jpg" alt="" />
                            <img src="assets/images/tvil5.jpg" alt="" />
                            <img src="assets/images/tvil3.jpg" alt="" />
                        </div>
                    </div>
                    <div className="villa-txt">
                        <h4>Festoon villa <span><i className="fa fa-star"></i> 4.3 (32)</span></h4>
                        <div className="villa-meta">
                            <span>in Lonavala with 4 rooms for 15-20 guests</span>
                            <span>Sun to Fri: ₹10990/night - Sat: ₹17990/night</span>
                        </div>
                    </div>
                </div>
            </div>{/* <!--  Vill Entry End --> */}
        </div>
    </div>
</section>
{/* <!-- Top Villa Section End --> */}

{/* <!-- About Section Start --> */}
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
                    <img src="assets/images/about.jpg" alt="About" />
                    <a className="vbox-item" data-gall="gall-video" data-autoplay="true" data-vbtype="video"
                        href="https://youtu.be/bS5P_LAqiVg"><i className="fa fa-play"></i></a>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- About Section End -->
 */}
{/* <!-- Choose Section Start --> */}
<section className="choose-section section-padding">
    <div className="container">
        <h2 className="section-title mb-4 text-center">Why choose Leestays?</h2>
        <div className="row">
            <div className="col-lg-3 col-sm-3">
                <div className="choose-item text-center">
                    <span><img src="assets/images/check.svg" alt="" /></span>
                    <p>Daily Checks</p>
                </div>
            </div>
            <div className="col-lg-3 col-sm-3">
                <div className="choose-item text-center">
                    <span><img src="assets/images/quality.svg" alt="" /></span>
                    <p>Quality Personal Care</p>
                </div>
            </div>
            <div className="col-lg-3 col-sm-3">
                <div className="choose-item text-center">
                    <span><img src="assets/images/support.svg" alt="" /></span>
                    <p>24x7 Call Support</p>
                </div>
            </div>
            <div className="col-lg-3 col-sm-3">
                <div className="choose-item text-center">
                    <span> <img src="assets/images/bed.svg" alt="" /></span>
                    <p>White Bedding</p>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- Choose Section End --> */}

{/* <!-- Review Section Start --> */}
<section className="review">
    <div className="container">
        <h2 className="section-title mb-5 text-center">Recent Reviews</h2>
        <div className="row">
            <div className="col-lg-12">
                <div className="review-slide owl-carousel">
                    <div className="single-quote">
                        <div className="quote-head">
                            <span><img src="assets/images/rev1.png" alt="" /></span>
                            <div className="quote-inner">
                                <h4>Akash Surwase</h4>
                                <span><i className="fa fa-star"></i>  4/5 for Festoon Villa</span>
                            </div>
                            
                        </div>
                        <p>Everything was just perfect, right from check-in to check-out. Host was quick in responding to the messages. Also Gopal uncle took very good care and was very responsive as well, had a good welcome and the ...</p>
                        <p className="review-date">Posted on 2 April 2021</p>
                    </div> {/* <!-- Single Quote End --> */}
                    <div className="single-quote">
                        <div className="quote-head">
                            <span><img src="assets/images/rev2.png" alt="" /></span>
                            <div className="quote-inner">
                                <h4>Vishal Javeri</h4>
                                <span><i className="fa fa-star"></i>  5/5 for Hennessy Villa</span>
                            </div>
                            
                        </div>
                        <p>Great place to stay. Very neat and clean. Entire property is very well maintained. Staffs are very cordial. The owner is always there as and when needed. I would love to visit again later. place is very nicely done by the host ...</p>
                        <p className="review-date">Posted on 2 April 2021</p>
                    </div>{/*  <!-- Single Quote End --> */}
                    <div className="single-quote">
                        <div className="quote-head">
                            <span><img src="assets/images/Shruti.png" alt="" /></span>
                            <div className="quote-inner">
                                <h4>Shruti Kulkarni</h4>
                                <span><i className="fa fa-star"></i> 3/5 for Culture Home</span>
                            </div>
                            
                        </div>
                        <p>Our stay at Pool culture home was extremely comfortable despite it being a last minute booking. Our caretaker Dilip was readily available, helpful and kind. There were a few things that weren’t working like the...</p>
                        <p className="review-date">Posted on 4 April 2021</p>
                    </div>{/*  <!-- Single Quote End --> */}
                    <div className="single-quote">
                        <div className="quote-head">
                            <span><img src="assets/images/rev1.png" alt="" /></span>
                            <div className="quote-inner">
                                <h4>Shruti Kulkarni</h4>
                                <span><i className="fa fa-star"></i> 3/5 for Culture Home</span>
                            </div>
                            
                        </div>
                        <p>Our stay at Pool culture home was extremely comfortable despite it being a last minute booking. Our caretaker Dilip was readily available, helpful and kind. There were a few things that weren’t working like the...</p>
                        <p className="review-date">Posted on 4 April 2021</p>
                    </div> {/* <!-- Single Quote End --> */}
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- Review Section End --> */}

            </div>
        );
    }
}
export default Home ;