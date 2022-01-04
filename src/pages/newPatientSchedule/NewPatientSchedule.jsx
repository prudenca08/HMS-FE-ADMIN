import React, { useState } from "react";
import "./newPatientSchedule.css";

const NewPatientSchedule = (props) => {
  const [field, setField] = useState({
    day: "",
    time: "",
  });
  const handleOnChange = (event) => {
    let tmp = field;
    tmp[event.currentTarget.name] = event.currentTarget.value;
    setField(tmp); 
  };
  const handleClose = ()=>{
    props.modalClose(false)
    props.deleteID()
  }
  
  return (
    <div className="manage-form">
      <form>
        <div className="manage-form-header">
          <button onClick={handleClose}>Close</button>
          {
            props.idModal ?<h3>Edit Patient Schedule</h3> : <h3>Add Patient Schedule</h3> 
          }        
          <span>Enter day and time here</span>
        </div>
        <div className="manage-form-group">
          <label htmlFor="day">Day</label>
          <input
            type="text"
            name="day"
            id="day"
            placeholder="day"
            onChange={handleOnChange}
          />
        </div>
        <div className="manage-form-group">
          <label htmlFor="time">Time</label>
          <input
            type="text"
            name="time"
            id="time"
            placeholder="time"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPatientSchedule;
