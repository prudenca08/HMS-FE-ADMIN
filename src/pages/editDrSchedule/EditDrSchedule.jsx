import React, { useState } from "react";
import "./editDrSchedule.css";

const EditDrSchedule = (props) => {
  const [field, setField] = useState({
    day: "",
    time: "",
  });
  const handleOnChange = (event) => {
    let tmp = field;
    tmp[event.currentTarget.name] = event.currentTarget.value;
    setField(tmp);
  };
  return (
    <div className="manage-form">
      <form>
        <div className="manage-form-header">
          <h3>Edit Doctor Schedule</h3>
          <span>Enter day and time here</span>
        </div>
        <div className="manage-form-group">
          <label htmlFor="day">Day</label>
          <input
            type="text"
            name="day"
            id="day"
            placeholder="Monday"
            onChange={handleOnChange}
          />
        </div>
        <div className="manage-form-group">
          <label htmlFor="time">Time</label>
          <input
            type="text"
            name="time"
            id="time"
            placeholder="9.00 - 11.50"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditDrSchedule;
