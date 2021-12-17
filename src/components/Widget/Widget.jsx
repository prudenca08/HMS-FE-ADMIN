import React from "react";
import "./widget.css";

export default function Widget() {
  return (
    <div className="widget">
      <h3 className="widgetTitle">Outpatient Sessions</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Patient Name</th>
            <th scope="col">Day</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Doctor</th>
            <th scope="col">Symptoms</th>
            <th scope="col">Room</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Margareth Ellie</td>
            <td>Selasa</td>
            <td> 14 Des 2021</td>
            <td> 13.00-13.30</td>
            <td>dr.Thomas Harianja</td>
            <td> Gatal-gatal, sesak nafas, demam, batuk, pilek...</td>
            <td>A27</td>
            <td>On Progress</td>
          </tr>
          <tr>
            <td>Michael Jordan</td>
            <td>Selasa</td>
            <td> 14 Des 2021</td>
            <td> 13.00-13.30</td>
            <td>dr.Prima Simorangkir</td>
            <td> Demam, badan kemerahan,Keringat dingin, batuk...</td>
            <td>B02</td>
            <td>Done</td>
          </tr>
          <tr>
            <td>Hayati Sulivan</td>
            <td>Selasa</td>
            <td> 14 Des 2021</td>
            <td> 13.00-13.30</td>
            <td>dr.Thomas Harianja</td>
            <td> Gatal-gatal, sesak nafas, demam, batuk, pilek...</td>
            <td>A27</td>
            <td>Waiting</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
