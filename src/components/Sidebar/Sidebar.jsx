import React from "react";
import "./sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import PatientIcon from "../../assets/img/icon/patientIcon.png";
import DoctorIcon from "../../assets/img/icon/doctorIcon.png";
import ManageIcon from "../../assets/img/icon/manageIcon.png";
import RecipeIcon from "../../assets/img/icon/recipeIcon.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <HomeIcon className="sidebarIcon" />
              Dashboard
            </li>
            <li className="sidebarListItem">
              <img src={PatientIcon} className="sidebarIcon" alt="" />
              Patients
            </li>
            <li className="sidebarListItem">
              <img src={DoctorIcon} className="sidebarIcon" alt="" />
              Doctors
            </li>
            <li className="sidebarListItem">
              <img src={ManageIcon} className="sidebarIcon" alt="" />
              Manage
            </li>
            <li className="sidebarListItem">
              <img src={RecipeIcon} className="sidebarIcon" alt="" />
              Recipe
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
