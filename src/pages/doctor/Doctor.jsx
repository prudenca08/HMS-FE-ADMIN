import React from "react";
import "./doc.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import WcIcon from "@material-ui/icons/Wc";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { Link } from "react-router-dom";

export default function Doctor() {
  return (
    <div className="doctor">
      <div className="doctorTitleContainer">
        <h3 className="doctorTitle">Edit Doctor</h3>
        <Link to="/newdoctor">
          <button className="doctorAddButton">+Add New</button>
        </Link>
      </div>
      <div className="doctorContainer">
        <div className="doctorShow">
          <div className="doctorShowDetail">
            <span className="doctorShowTitle">Doctor Details</span>
            <div className="doctorShowInfo">
              <PermIdentityIcon className="doctorShowIcon" />
              <span className="doctorShowInfoTitle">Margareth Ellie</span>
            </div>
            <div className="doctorShowInfo">
              <ConfirmationNumberIcon className="doctorShowIcon" />
              <span className="doctorShowInfoTitle">12125634256</span>
            </div>
            <div className="doctorShowInfo">
              <CalendarTodayIcon className="doctorShowIcon" />
              <span className="doctorShowInfoTitle">088888</span>
            </div>
            <div className="doctorShowInfo">
              <WcIcon className="doctorShowIcon" />
              <span className="doctorShowInfoTitle">Tenaga Dalam</span>
            </div>
            <div className="doctorShowInfo">
              <PhoneIcon className="doctorShowIcon" />
              <span className="doctorShowInfoTitle">H2</span>
            </div>
            <div className="doctorShowInfo">
              <PhoneIcon className="doctorShowIcon" />
              <span className="doctorShowInfoTitle">abc123</span>
            </div>
            <div className="doctorShowInfo">
              <PhoneIcon className="doctorShowIcon" />
              <span className="doctorShowInfoTitle">abc123</span>
            </div>
            <div className="doctorShowInfo">
              <LocalHospitalIcon className="doctorShowIcon" />
              <span className="doctorShowInfoTitle">
              S1- Kedokteran Umum Undip , S2 - Ilmu Perdukunan
              </span>
            </div>
          </div>
        </div>
        <div className="doctorUpdate">
          <span className="doctorUpdateTitle">Edit</span>
          <form className="doctorUpdateForm">
            <div className="doctorUpdateLeft">
              <div className="doctorUpdateItem">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Margareth Ellie"
                  className="doctorUpdateInput"
                />
              </div>
              <div className="doctorUpdateItem">
                <label>NIP</label>
                <input
                  type="text"
                  placeholder="12125634256"
                  className="doctorUpdateInput"
                />
              </div>
              <div className="doctorUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="088888"
                  className="doctorUpdateInput"
                />
              </div>
              <div className="doctorUpdateItem">
                <label>Specialist</label>
                <input
                  type="text"
                  placeholder="Tenaga Dalam"
                  className="doctorUpdateInput"
                />
              </div>
              <div className="doctorUpdateItem">
                <label>Room</label>
                <input
                  type="text"
                  placeholder="H2"
                  className="doctorUpdateInput"
                />
              </div>
              <div className="doctorUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="abc123"
                  className="doctorUpdateInput"
                />
              </div>
              <div className="doctorUpdateItem">
                <label>Password</label>
                <input
                  type="text"
                  placeholder="abc123"
                  className="doctorUpdateInput"
                />
              </div>
              <div className="doctorUpdateItem">
                <label>Status</label>
                <input
                  type="text"
                  placeholder="Standby"
                  className="doctorUpdateInput"
                />
              </div>
            </div>
            <div className="doctorUpdateRight">
              <div className="doctorUpdateItem">
                <label>Experince</label>
                <textarea
                  type="text"
                  placeholder="S1- Kedokteran Umum Undip , S2 - Ilmu Perdukunan"
                  className="doctorUpdateInput"
                />
              </div>
              <button className="doctorUpdateButton">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
