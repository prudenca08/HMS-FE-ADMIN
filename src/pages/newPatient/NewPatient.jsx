import React, { useState } from "react";
import "./newPatient.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { actionCreatePatients } from "../../config/redux/action";
import { useHistory } from "react-router-dom";
import Loading from "../../assets/img/icon/load.gif"

const NewPatient = (props) => {
  const [field, setField] = useState({
    name: "",
    nik: "",
    dob: "",
    gender: "",
    phone: "",
    address: "",
    symptoms: "",
  });

  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)


  const handleChangeDate = (date) => {
    setField({ ...field, ["dob"]: date });
    console.log(field);
  };

  const handleOnChange = (event) => {
    let { name, value } = event.currentTarget;
    setField({ ...field, [name]: value });
    console.log(field);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    props.createPatients(field)
    .then((res)=>{
      console.log(res)
      history.push("/patients")
    }).catch((err)=>{
      setIsLoading(false);
      console.log(err)
    })
    
  };

  return (
    <div className="newPatient">
      <h1 className="newPatientTitle">New Patients</h1>
      <form className="newPatientForm" onSubmit={handleOnSubmit}>
        <div className="newPatientItem">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Full Name"
            value={field.name}
            onChange={handleOnChange}
          />
        </div>
        <div className="newPatientItem">
          <label>NIK</label>
          <input
            type="text"
            name="nik"
            value={field.nik}
            placeholder="Enter NIK"
            onChange={handleOnChange}
          />
        </div>
        <div className="newPatientItem">
          <label>Date of Birth</label>
          <DatePicker
            selected={field.dob}
            onChange={handleChangeDate}
            value={field.dob}
            dateFormat="dd/MM/yyyy"
            filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
            name="dob"
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
              checked={field.gender === "pria"}
              onChange={handleOnChange}
            />
            <label htmlFor="">Pria</label>
            <input
              type="radio"
              name="gender"
              id="perempuan"
              value="perempuan"
              checked={field.gender === "perempuan"}
              onChange={handleOnChange}
            />
            <label>Perempuan</label>
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
        <button className="newPatientButton" disabled={isLoading} >
         
          {isLoading ? (<img src={Loading} alt="" width="40px"/>) :  "Add New" }
          
          </button>
      </form>
    </div>
  );
};

const reduxState = (state) => ({
  patient: state.patient,
});
const reduxDispatch = (dispatch) => ({
  createPatients: (data) => dispatch(actionCreatePatients(data)),
});

export default connect(reduxState, reduxDispatch)(NewPatient);
