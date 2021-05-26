import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function Booking (){
    const [startDate, setStartDate] = useState(new Date());
    return(
        <div className="search-form">
            <form action="#" method="post" className="form-inline row no-gutters">
            <div className="form-group right-border">
                <label htmlFor="location">Destination</label>
                <input className="form-control" type="text" id="location" placeholder="everywhere" />
            </div>
            <div className="form-group date-group right-border">
                <div className="form-inner">
                <label htmlFor="location">Check In</label>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                </div>
                <div className="form-inner">
                <label htmlFor="location">Check Out</label>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                </div>
            </div>
            <div className="form-group right-border">
                <label htmlFor="location">Guests</label>
                <input type="text" className="form-control" placeholder="Add Guests" />
            </div>
            <div className="form-group search-btn">
                <button className="custom-btn"> <i className="fa fa-search" /> Search</button>
            </div>
            </form>
        </div> 
    );
}

export default Booking;