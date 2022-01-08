import React from "react";
import "./newPatient.css";


export default function newPatient() {

  const [field, setField] = useState({
    patient_name: "",
    nik: "",
    dob: "",
    gender: "",
    phone: "",
    address: "",
    symptoms: "",
  });

  const handleOnChange = (event) => {
    let tmp = field;
    tmp[event.currentTarget.name] = event.currentTarget.value;
    setField(tmp);
  };

  return (
    <div className="newPatient">
      <h1 className="newPatientTitle">New Patients</h1>
      <form className="newPatientForm">
        <div className="newPatientItem">
          <label>Name</label>
          <input
            type="text"
            name="patient_name"
            placeholder="Enter Full Name"
            onChange={handleOnChange}
          />
        </div>
        <div className="newPatientItem">
          <label>NIK</label>
          <input
            type="text"
            name="nik"
            placeholder="Enter NIK"
            onChange={handleOnChange}
          />
        </div>
        <div className="newPatientItem">
          <label>Date of Birth</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
            name="dob"
            onChange={handleOnChange}
          ></DatePicker>

        </div>
        <div className="newPatientItem">
          <label>Gender</label>
          <div className="newPatientGender">
            <input
              type="radio"
              name="gender"
              id="pria"
              value="pria"
              onChange={handleOnChange}
            />
            <label for="pria">Pria</label>
            <input
              type="radio"
              name="gender"
              id="perempuan"
              value="perempuan"
              onChange={handleOnChange}
            />
            <label for="perempuan">Perempuan</label>
          </div>
        </div>
        <div className="newPatientItem">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
            onChange={handleOnChange}
          />
        </div>
        <div className="newPatientItem">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter Address"
            onChange={handleOnChange}
          />
        </div>
        <div className="newPatientItem">
          <label>Symptoms</label>
          <textarea
            type="text"
            name="symptoms"
            placeholder="Enter Detail Symptoms"
            onChange={handleOnChange}
          />
        </div>
        <button className="newPatientButton">Add New</button>
      </form>
    </div>
  );
}
