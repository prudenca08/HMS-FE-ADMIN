import React, {useState} from "react";
import "./patient.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import WcIcon from "@material-ui/icons/Wc";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Patient() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="patient">
      <div className="patientTitleContainer">
        <h3 className="patientTitle">Edit Patient</h3>
        <Link to="/newPatient">
          <button className="patientAddButton">+Add New</button>
        </Link>
      </div>
      <div className="patientContainer">
        <div className="patientShow">
          <div className="patientShowDetail">
            <span className="patientShowTitle">Patient Details</span>
            <div className="patientShowInfo">
              <PermIdentityIcon className="patientShowIcon" />
              <span className="patientShowInfoTitle">Margareth Ellie</span>
            </div>
            <div className="patientShowInfo">
              <ConfirmationNumberIcon className="patientShowIcon" />
              <span className="patientShowInfoTitle">12125634256</span>
            </div>
            <div className="patientShowInfo">
              <CalendarTodayIcon className="patientShowIcon" />
              <span className="patientShowInfoTitle">12 January 2000</span>
            </div>
            <div className="patientShowInfo">
              <WcIcon className="patientShowIcon" />
              <span className="patientShowInfoTitle">Perempuan</span>
            </div>
            <div className="patientShowInfo">
              <PhoneIcon className="patientShowIcon" />
              <span className="patientShowInfoTitle">081234567890</span>
            </div>
            <div className="patientShowInfo">
              <HomeIcon className="patientShowIcon" />
              <span className="patientShowInfoTitle">
                Jl. Bengawan no. 20A, Solo
              </span>
            </div>
            <div className="patientShowInfo">
              <LocalHospitalIcon className="patientShowIcon" />
              <span className="patientShowInfoTitle">
                Gatal-gatal, sesak nafas, demam, batuk, pilek, mata berair,
                lorem ipsum dolor sit amet narmis
              </span>
            </div>
          </div>
        </div>
        <div className="patientUpdate">
          <span className="patientUpdateTitle">Edit</span>
          <form className="patientUpdateForm">
            <div className="patientUpdateLeft">
              <div className="patientUpdateItem">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Margareth Ellie"
                  className="patientUpdateInput"
                />
              </div>
              <div className="patientUpdateItem">
                <label>NIK</label>
                <input
                  type="text"
                  placeholder="12125634256"
                  className="patientUpdateInput"
                />
              </div>
              <div className="patientUpdateItem">
                <label>Date of Birth</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  filterDate={(date) =>
                    date.getDay() !== 6 && date.getDay() !== 0
                  }
                  isClearable
                  showYearDropdown
                  scrollableMonthYearDropdown
                >
                  
                </DatePicker>
              </div>
              <div className="patientUpdateItem">
                <label>Gender</label>
                <input
                  type="text"
                  placeholder="Perempuan"
                  className="patientUpdateInput"
                />
              </div>
              <div className="patientUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="081234567890"
                  className="patientUpdateInput"
                />
              </div>
              <div className="patientUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Jl. Bengawan no. 20A, Solo"
                  className="patientUpdateInput"
                />
              </div>
            </div>
            <div className="patientUpdateRight">
              <div className="patientUpdateItem">
                <label>Symptoms</label>
                <textarea
                  type="text"
                  placeholder="Gatal-gatal, sesak nafas, demam, batuk, pilek, mata berair, lorem ipsum dolor sit amet narmis"
                  className="patientUpdateInput"
                />
              </div>
              <button className="patientUpdateButton">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
