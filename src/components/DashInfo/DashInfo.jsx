import React from "react";
import "./dashInfo.css";

export default function DashInfo() {
  return (
    <div className="dashInfo">
      <div className="dashItem">
        <span className="dashTitle">Total Outpatient</span>
        <div className="dashCount">
          <span className="count">3</span>
        </div>
      </div>
      <div className="dashItem">
        <span className="dashTitle">Total Doctor & Nurse</span>
        <div className="dashCount">
          <span className="count">2</span>
        </div>
      </div>
    </div>
  );
}
