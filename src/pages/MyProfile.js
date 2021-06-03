import React, { Component } from 'react'

export class MyProfile extends Component {
    render() {
        return (
            <>
                {/*  Booking Section Start */}
                <section className="booking-section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <div className="nav flex-column" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a className="nav-link active" id="booking-tab" data-toggle="tab" href="#booking" role="tab" aria-controls="booking" aria-selected="true"> My Bookings</a>
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">My Profile</a>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="booking" role="tabpanel" aria-labelledby="home-tab">
                                        <div id="accordion-1">
                                            <div className="card">
                                                <div className="card-header" id="headingTwo">
                                                    <div className="card-txt">
                                                        <p>Booking ID: 2567 - Order date: 11 Jully 2021 - Time: 11:00 AM
                          </p>
                                                        <p>Festoon Villa      Check-in: 16 Jully 2021      Checkout: 17 Jully 2021</p>
                                                    </div>
                                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Show Less
                        </button>
                                                </div>
                                                <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordion-1">
                                                    <div className="card-body">
                                                        <h6>Booking status: Partially Paid </h6>
                                                        <ul>
                                                            <li>Adults: 5</li>
                                                            <li>Childrens: 2</li>
                                                            <li>Infants: 0</li>
                                                            <li>Final Booking price: ₹7000 </li>
                                                            <li>Advance amount: ₹3500</li>
                                                            <li>Remaining amount: ₹3500</li>
                                                            <li>Payment mode: Credit Card</li>
                                                            <li>Payment ID: RZRPY5452HGDEJ</li>
                                                            <li>Guest Check-in Time: 1:00 PM
                            </li>
                                                            <li>Guest Checkout Time: 11:00 AM
                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div> {/* card end */}
                                            <div className="card">
                                                <div className="card-header" id="heading2">
                                                    <div className="card-txt">
                                                        <p>Booking ID: 2567 - Order date: 11 Jully 2021 - Time: 11:00 AM
                          </p>
                                                        <p>Hennessy Villa      Check-in: 12 Jully 2021      Checkout: 13 Jully 2021</p>
                                                    </div>
                                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                        Show More
                        </button>
                                                </div>
                                                <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#accordion-1">
                                                    <div className="card-body">
                                                        <h6>Booking status: Partially Paid </h6>
                                                        <ul>
                                                            <li>Adults: 2</li>
                                                            <li>Childrens: 1</li>
                                                            <li>Infants: 1</li>
                                                            <li>Final Booking price: ₹3000 </li>
                                                            <li>Advance amount: ₹3500</li>
                                                            <li>Remaining amount: ₹3500</li>
                                                            <li>Payment mode: Credit Card</li>
                                                            <li>Payment ID: RZRPY5452HGDEJ</li>
                                                            <li>Guest Check-in Time: 1:00 PM
                            </li>
                                                            <li>Guest Checkout Time: 11:00 AM
                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <form action="#">
                                            <div className="form-group">
                                                <label htmlFor="name">Full Name</label>
                                                <input type="text" placeholder="Thomas Doe" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Contact Number</label>
                                                <input type="text" placeholder="0193878237" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Email</label>
                                                <input type="text" placeholder="thomas@gmail.com" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Address</label>
                                                <input type="text" placeholder="Macaline New York" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Password</label>
                                                <input type="password" placeholder="........" />
                                            </div>
                                            <button className="custom-btn">Save</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Booking Section End */}
            </>
        )
    }
}

export default MyProfile
