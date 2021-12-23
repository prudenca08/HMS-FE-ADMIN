import React from "react";
import "./newPatient.css";

export default function newPatient() {
  return (
    <div className="newPatient">
      <h1 className="newPatientTitle">New Patients</h1>
      <form className="newPatientForm">
        <div className="newPatientItem">
          <label>Name</label>
          <input type="text" placeholder="Enter Full Name" />
        </div>
        <div className="newPatientItem">
          <label>NIK</label>
          <input type="text" placeholder="Enter NIK" />
        </div>
        <div className="newPatientItem">
          <label>Date of Birth</label>
          <input type="text" placeholder="dd/mm/yy" />
        </div>
        <div className="newPatientItem">
          <label>Gender</label>
          <div className="newPatientGender">
            <input type="radio" name="gender" id="pria" value="pria" />
            <label for="pria">Pria</label>
            <input
              type="radio"
              name="gender"
              id="perempuan"
              value="perempuan"
            />
            <label for="perempuan">Perempuan</label>
          </div>
        </div>
        <div className="newPatientItem">
          <label>Phone Number</label>
          <input type="text" placeholder="Enter Phone Number" />
        </div>
        <div className="newPatientItem">
          <label>Address</label>
          <input type="text" placeholder="Enter Address" />
        </div>
        <div className="newPatientItem">
          <label>Symptoms</label>
          <textarea type="text" placeholder="Enter Detail Symptoms" />
        </div>
        <button className="newPatientButton">Add New</button>
      </form>
    </div>
  );
}
