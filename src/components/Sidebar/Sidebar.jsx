import React, { useEffect } from "react";
import "./sidebar.css";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import MenuItem from "./MenuItem";

const menuItems = [
  { name: "Dashboard", to: "/", icon : "/assets/img/icon/HomeIcon.png"},
  { name: "Patients", to: `/patients`, icon : "/assets/img/icon/patientIcon.png" },
  { name: "Doctors", to: `/doctors`, icon : "/assets/img/icon/doctorIcon.png" },
  {
    name: "Manage",
    to: `/manage`,
    icon : "/assets/img/icon/manageIcon.png",
    iconOpened : "/assets/img/icon/dropdown.png",
    subMenus: [
      { name: "Doctor Schedule", to :'/manage/drschedule' },
      { name: "Patient Schedule", to :'/manage/patientschedule' },
      { name: "Outpatient Session", to :'/manage/outpatient' },
    ],
  },
  { name: "Recipe", to : `/recipe`, icon: "/assets/img/icon/recipeIcon.png"}
];

const Sidebar = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(()=>{
    if(inactive){
      document.querySelectorAll('.subList').forEach(el =>{
        el.classList.remove('active')
      })
    }
    props.onCollapse(inactive)
  }, [inactive]);

  return (
    <div className={`sidebar ${inactive ? "inactive" : ""}`}>
      <div className="sidebarWrapper">
        <div className="toggle-menu-btn" onClick={() => setInactive(!inactive)}>
          <MenuIcon />
        </div>
      </div>
      <div className="sidebarMenu">
        <ul className="sidebarList">
          {menuItems.map((menuItem, index)=>(
              <MenuItem
              key={index}
              name={menuItem.name}
              to ={menuItem.to}
              subMenus={menuItem.subMenus || []}
              icon={menuItem.icon}
              iconOpened={menuItem.iconOpened}
              onClick ={() =>{
                if(inactive){
                  setInactive(false);
                }
              }}
              />
            ))}
          {/* <Link to="/" className="link">
            <li className="sidebarListItem ">
              <HomeIcon className="sidebarIcon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/patients" className="link">
            <li className="sidebarListItem">
              <img src={PatientIcon} className="sidebarIcon" alt="" />
<<<<<<< Updated upstream
              Patients
            </li>
            </Link>
            <Link to= "/doctors" className="link" >
            <li className="sidebarListItem">
              <img src={DoctorIcon} className="sidebarIcon" alt="" />
              Doctors
            </li>
            </Link>
            <li className="sidebarListItem">
              <img src={ManageIcon} className="sidebarIcon" alt="" />
              Manage
            </li>
          </Link>
          <li className="sidebarListItem">
            <img src={DoctorIcon} className="sidebarIcon" alt="" />
            <span>Doctors</span>
          </li>
          <MenuItem
            name={"Manage"}
            subMenus={[
              { name: "Doctor Schedule" },
              { name: "Patient Schedule" },
              { name: "Outpatient Session" },
            ]}
          />
          <li className="sidebarListItem">
            <img src={RecipeIcon} className="sidebarIcon" alt="" />
            <span>Recipes</span>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
