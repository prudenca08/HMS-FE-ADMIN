import React from "react";
import "./dashInfo.css";

export default function DashInfo() {
  return (
    <div className="dashInfo">
      <div className="dashItem outpatient">
        <span className="dashTitle">Total Outpatient</span>
        <div className="dashCount">
          <span className="count">3</span>
        </div>
      </div>
      <div className="dashItem doctor">
        <span className="dashTitle">Total Doctor</span>
        <div className="dashCount">
          <span className="count">2</span>
        </div>
      </div>
      <div className="dashItem nurse">
        <span className="dashTitle">Total Nurse</span>
        <div className="dashCount">
          <span className="count">0</span>
        </div>
      </div>
    </div>
  );
}
