import React, { useState } from "react";
import "./manageOutpatient.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { outpatient } from "../../dummyData";
import { Link } from "react-router-dom";

export default function ManageOutpatient() {
  const [data, setData] = useState(outpatient);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };


  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "patientName", headerName: "Patient Name", width: 180 },
    { field: "day", headerName: "Day", width: 150 },
    { field: "date", headerName: "Date", width: 150 },
    { field: "time", headerName: "Time", width: 150 },
    { field: "doctor", headerName: "Doctor", width: 150 },
    { field: "symptoms", headerName: "Symptoms", width: 150 },
    { field: "room", headerName: "Room", width: 100 },
    { field: "status", headerName: "Status", width: 100 },
    {
      field: "action",
      headerName: "Action",
      width: 170,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/outpatient/" + params.row.id}>
              <EditIcon className="outpatientEdit" />
            </Link>
            <DeleteOutlineIcon
              className="drscheduleDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="outpatientList">
      <div className="outpatientListTitleContainer">
        <h3 className="outpatientListTitle">Outpatient Session</h3>
      </div>
      <div className="outpatientAdd">
      <Link to="/newOutpatient">
          <button className="outpatientAddButton">+Add New</button>
        </Link>
      </div>

      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
