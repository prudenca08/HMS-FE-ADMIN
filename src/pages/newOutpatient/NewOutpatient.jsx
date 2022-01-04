import React, { useState } from "react";
import "./newOutpatient.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function NewOutpatient() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="newOutpatient">
      <h1 className="newOutpatientTitle">New Outpatient</h1>
      <form className="newOutpatientForm">
        <div className="newOutpatientItem">
          <label> Patient Name</label>
          <input type="text" placeholder="Enter Full Name" />
        </div>
        <div className="newOutpatientItem">
          <label>Day</label>
          <input type="text" placeholder="Enter Day" />
        </div>
        <div className="newOutpatientItem">
          <label>Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat='dd/MM/yyyy'
            filterDate={date => date.getDay() !== 6 && date.getDay() !== 0 }
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
          >
          </DatePicker>
        </div>
        <div className="newOutpatientItem">
          <label>Time</label>
          <div className="newOutpatientGender">
          <input type="text" placeholder="Enter Time" />
          </div>
        </div>
        <div className="newOutpatientItem">
          <label>Doctor</label>
          <input type="text" placeholder="Enter Doctor Name" />
        </div>
        <div className="newOutpatientItem">
          <label>Symptoms</label>
          <textarea type="text" placeholder="Enter Detail Symptoms" />
        </div>
        <div className="newOutpatientItem">
          <label>Rooms</label>
          <input type="text" placeholder="Enter Rooms" />
        </div>
        <button className="newOutpatientButton">Add New</button>
      </form>
    </div>
  );
}
