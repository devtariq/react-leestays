import React, { Component } from 'react'
import DateCalender from "../components/Calender";
import PopupVideo from '../components/PopupVideo';
import SimiliarVilla from '../components/SimiliarVilla';

export class SingleVilla extends Component {
    render() {
        return (
            <div>
                {/* Main Section Start */}
      <main className="main-content package-content pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <article className="single-package">
                <div className="pckg-head">
                  <div className="pckg-intro">
                    <div className="pckg-name">
                      <h1>Festoon Villa</h1>
                      <p><span><img src="assets/images/star.png" alt="" />4.3 (32 reviews) </span> Lonavala,
                        Maharashtra, India</p>
                    </div>
                    <div className="pckg-share">
                      <span><a href="#">Bookmark <img src="assets/images/bookmarkb.png" alt="" /></a></span>
                      <span><a href="#">Share <img src="assets/images/share.png" alt="" /></a></span>
                    </div>
                  </div>
                  <div className="pckg-img-wrap">
                    <div className="pckg-thubm"><img src="assets/images/pckg1.jpg" alt="" /></div>
                    <div className="pckg-sthumb">
                      <img src="assets/images/pckg2.jpg" alt="" />
                      <img src="assets/images/pckg3.jpg" alt="" />
                      <img src="assets/images/pckg4.jpg" alt="" />
                      <img src="assets/images/pckg5.jpg" alt="" />
                    </div>
                  </div>
                </div> {/* Package Head End */}
                <div className="package-inner row">
                  <div className="col-lg-8">
                    <div className="pckg-txt">
                      <div className="pk-options">
                        <ul>
                          <li><img src="assets/images/user.png" alt="" /> <span>15 - 20 guests</span></li>
                          <li><img src="assets/images/bed.png" alt="" /> <span>4 beds</span></li>
                          <li><img src="assets/images/bathtub.png" alt="" /> <span>5 bathrooms</span></li>
                          <li><img src="assets/images/matress.png" alt="" /> <span>10 mattresses</span></li>
                        </ul>
                      </div>
                      <h2>Private room in bed and breakfast</h2>
                      <p>This tropical 3-bedroom luxury villa is found inside Akilea Estate - a holiday
                        estate housing 5 independent private pool luxury villas. The villas can be
                        rented out separately or together, making it perfect for weddings, yoga
                        retreats and events. Villa Kayu Merah is ideal for families, featuring a lovely
                        private garden with a swimming pool, an open-plan living room and 3
                        bedrooms with ac and open-air en-suite bathrooms. Luxurious, yet
                        affordable - the perfect mix!</p>
                      <a href="#" className="more-btn">Read More</a>
                      <div className="amenities">
                        <h3>Basic Amenities</h3>
                        <ul>
                          <li><img src="assets/images/wifi.png" alt="" /> <span>wifi</span></li>
                          <li><img src="assets/images/tv.png" alt="" /> <span>television</span></li>
                          <li><img src="assets/images/ac.png" alt="" /> <span>AC</span></li>
                          <li><img src="assets/images/pool.png" alt="" /> <span>Pool</span></li>
                          <li><img src="assets/images/wash.png" alt="" /> <span>Washing Machine </span></li>
                        </ul>
                        <a href="#" className="more-btn">See More</a>
                        <div id="my-calendar" />
                      </div>
                      <div className="timing">
                        <h3>Timings</h3>
                        <ul>
                          <li>Check-in<span>After 12:00</span></li>
                          <li>Check-Out<span>10:00</span></li>
                        </ul>
                      </div>
                      <div className="availity">
                        <h3>Availability</h3>
                        <div className="availy-callendar">
                          <div className="acl-item">
                            <DateCalender />
                          </div>
                          <div className="acl-item">
                          <DateCalender />
                          </div>
                        </div>
                      </div> {/* Availity End */}
                      <div className="villa-video about-img">
                        <img src="assets/images/villa-v.jpg" alt="" />
                        <PopupVideo />
                      </div>{/* Villa End */}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <aside className="sidebar">
                      <div className="widget booking-widget">
                        <div className="bw-head">
                          <div className="bw-rating"><i className="fa fa-star" /> 4.8
                            <span>(33 reviews)</span>
                          </div>
                        </div>
                        <ul className="booking-options">
                          <li><strong>11,990</strong> / Sun to Fri</li>
                          <li><strong>17,990</strong> / Saturday</li>
                        </ul>
                        <div className="bw-info">
                          <div className="info-check">
                            <div className="check-in">
                              <span>check In</span>
                              <h5>March 05</h5>
                            </div>
                            <div className="check-out">
                              <span>Check Out</span>
                              <h5>April 05</h5>
                            </div>
                          </div>
                          <div className="guest">
                            <span>GUESTS</span>
                            <h5>25</h5>
                          </div>
                        </div>
                        <div className="bw-policy">
                          <p>CANCELLATION POLICIES</p>
                          <div id="accordion" className="cancle-policy">
                            <div className="ac-option">
                              <h5 data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                NON-REFUNDABLE ° 20000
                              </h5>
                              <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                <div className="ac-option-body">
                                  Non-refundable Cancel before check-in and get
                                  back only the cleaning fee, you’ve paid one.
                                </div>
                              </div>
                            </div>
                            <div className="ac-option">
                              <h5 className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                REFUNDABLE ° 21000
                              </h5>
                              <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                <div className="ac-option-body">
                                  Refundable Cancel before check-in and get
                                  back only the cleaning fee, you’ve paid one.
                                </div>
                              </div>
                            </div>
                          </div>{/*  accordion end */}
                          <button className="custom-btn">Reserve</button>
                        </div>
                      </div> {/* Booking Widget End */}
                    </aside>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="villa-reviews">
                      <h3>Reviews</h3>
                      <span><i className="fa fa-star" />4.3 (32 reviews)</span>
                      <div className="rating-list clearfix">
                        <div className="single-rev">
                          <div className="s-label">Cleanliness</div>
                          <div className="progress">
                            <div className="progress-bar w-75" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <div className="s-rating">4.3</div>
                        </div> {/* Single Review End */}
                        <div className="single-rev">
                          <div className="s-label">Staff</div>
                          <div className="progress">
                            <div className="progress-bar w-75" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <div className="s-rating">4.2</div>
                        </div> {/* Single Review End */}
                        <div className="single-rev">
                          <div className="s-label">Check-in</div>
                          <div className="progress">
                            <div className="progress-bar w-25" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <div className="s-rating">3.23</div>
                        </div> {/* Single Review End */}
                        <div className="single-rev">
                          <div className="s-label">Location</div>
                          <div className="progress">
                            <div className="progress-bar w-50" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <div className="s-rating">4.9</div>
                        </div> {/* Single Review End */}
                      </div>
                    </div> {/* Villa Review End */}
                    <div className="pckg-review">
                      <div className="single-review">
                        <div className="review-head">
                          <img src="assets/images/review.jpg" alt="" />
                          <div className="rv-name">
                            <h4>Raveena </h4>
                            <span>February 2021</span>
                          </div>
                        </div>
                        <p>Great place to stay if you like to visit Anjuna beach more often.
                          Jason (host) and Rama (the caretaker) are very helpful in guiding
                          you what's around and must-visits. Room is worth… read more</p>
                      </div> {/* Single Review End */}
                      <div className="single-review">
                        <div className="review-head">
                          <img src="assets/images/review.jpg" alt="" />
                          <div className="rv-name">
                            <h4>Raveena </h4>
                            <span>February 2021</span>
                          </div>
                        </div>
                        <p>Great place to stay if you like to visit Anjuna beach more often.
                          Jason (host) and Rama (the caretaker) are very helpful in guiding
                          you what's around and must-visits. Room is worth… read more</p>
                      </div> {/* Single Review End */}
                      <div className="single-review">
                        <div className="review-head">
                          <img src="assets/images/review.jpg" alt="" />
                          <div className="rv-name">
                            <h4>Raveena </h4>
                            <span>February 2021</span>
                          </div>
                        </div>
                        <p>Great place to stay if you like to visit Anjuna beach more often.
                          Jason (host) and Rama (the caretaker) are very helpful in guiding
                          you what's around and must-visits. Room is worth… read more</p>
                      </div> {/* Single Review End */}
                      <div className="single-review">
                        <div className="review-head">
                          <img src="assets/images/review.jpg" alt="" />
                          <div className="rv-name">
                            <h4>Raveena </h4>
                            <span>February 2021</span>
                          </div>
                        </div>
                        <p>Great place to stay if you like to visit Anjuna beach more often.
                          Jason (host) and Rama (the caretaker) are very helpful in guiding
                          you what's around and must-visits. Room is worth… read more</p>
                      </div> {/* Single Review End */}
                      <div className="show-review">
                        <button>Show All Reviews</button>
                      </div>
                    </div> {/* Package Review End */}
                    {/* Location Start */}
                    <div className="pckg-location">
                      <h3 className="subtitle">Location</h3>
                      <p>Near Perfect engineering, Gold Valley Sector D, Gold Valley, Lonavla, Maharashtra
                        410401</p>
                      <div className="villa-map">
                        <iframe width="100%" height={400} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&height=400&hl=en&q=panaji+(My%20Business%20Name)&t=&z=10&ie=UTF8&iwloc=B&output=embed" />
                      </div>
                    </div>
                    {/* Location End */}
                    {/* Nearby Place Start */}
                    <div className="nearby-place row pt-5 pb-5">
                      <div className="col-lg-3 nearby">
                        <h3 className="subtitle">Nearby places </h3>
                        <ul>
                          <li>New Delli<span>3 km</span></li>
                          <li>New Delli<span>3 km</span></li>
                          <li>New Delli<span>3 km</span></li>
                          <li>New Delli<span>3 km</span></li>
                          <li>New Delli<span>3 km</span></li>
                        </ul>
                      </div>
                      <div className="col-lg-9 house-rule">
                        <h3 className="subtitle">House rules</h3>
                        <ol>
                          <li>Speaker music can only be played till 10 PM in the night. </li>
                          <li>Swimming pool time is from 2 PM to 9 PM and 6 AM to 9 AM. Swimming in to
                            the pool won’t be allowed in other timeslots.</li>
                          <li> Remaining booking amount and security deposit needs to be submitted
                            while check-in. Security deposit will be returned while check-out.</li>
                        </ol>
                      </div>
                    </div>
                    {/* Nearby Place End */}
                    {/* Hosted by Start */}
                    <div className="hosted-by pb-5">
                      <h3 className="subtitle">Hosted by</h3>
                      <div className="host-wrap">
                        <div className="single-host">
                          <img src="assets/images/host1.jpg" alt="" />
                          <div className="sh-name">
                            <h5>Ashwini Shede</h5>
                            <span>Marathi, Hindi</span>
                          </div>
                        </div>
                        <div className="single-host">
                          <img src="assets/images/host1.jpg" alt="" />
                          <div className="sh-name">
                            <h5>Ashwini Shede</h5>
                            <span>Marathi, Hindi</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Hosted by End */}
                  </div>
                </div>
              </article>{/* Single Package End */}
            <SimiliarVilla/>
            </div>
          </div>
        </div>
      </main>
      {/* Main Section End */}
            </div>
        )
    }
}

export default SingleVilla
