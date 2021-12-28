import React from "react";
import "./newDoctor.css";

export default function newDoctor() {
  return (
    <div className="newDoctor">
      <h1 className="newDoctorTitle">New Doctors</h1>
      <form className="newDoctorForm">
        <div className="newDoctorItem">
          <label>Name</label>
          <input type="text" placeholder="Enter Full Name" />
        </div>
        <div className="newDoctorItem">
          <label>NIP</label>
          <input type="number" placeholder="Enter NIP" />
        </div>
        <div className="newDoctorItem">
          <label>Specialist</label>
          <input type="text" placeholder="Enter Specialist" />
        </div>
        <div className="newDoctorItem">
          <label>Room</label>
          <input type="text" placeholder="Enter Room" />
        </div>
        <div className="newDoctorItem">
          <label>Username</label>
          <input type="text" placeholder="Enter Username" />
        </div>
        <div className="newDoctorItem">
          <label>Password</label>
          <input type="text" placeholder="Enter Password" />
        </div>
        <div className="newDoctorItem">
          <label>Experiences</label>
          <textarea type="text" placeholder="Enter Detail Experiences" />
        </div>
        <button className="newDoctorButton">Add New</button>
      </form>
    </div>
  );
}
