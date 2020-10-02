import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';

export default function Results() {
    // set states of calendar date
    const [calDate, setCalDate] = useState(new Date())

    function onChange (calDate) {
        // change results based on calendar date click
        setCalDate(calDate)
    }

    return (
        <div className="result-calendar">
            <Calendar 
              onChange={onChange}
              value={calDate}
              tileContent={() => {
              return (
                <div className="date-image">
                  <img src={require('../../assets/imgs/profile.jpg')} alt="Chris" />
                </div>
              );
              }}
            />
        </div>
    )
}