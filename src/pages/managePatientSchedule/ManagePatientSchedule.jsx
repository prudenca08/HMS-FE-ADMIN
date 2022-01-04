import React, { useState } from "react";
import "./managePatientSchedule.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { patientscheduleRows } from "../../dummyData";
import NewPatientSchedule from "../newPatientSchedule/NewPatientSchedule";
import { useEffect } from "react";
import EditPatientSchedule from "../editPatientSchedule/EditPatientSchedule"

export default function ManagePatientSchedule() {
  const [data, setData] = useState(patientscheduleRows);
  const [isEditModal, setIsEditModal]= useState(false);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const handleOnClickAdd = (event) => {
    let id = event.currentTarget.id
    let target = document.getElementById("manage-modal");
    if (target.classList.contains("hide")) {
      target.classList.remove("hide");
      if(id==="edit-btn"){
        setIsEditModal(true)
      }else{
        setIsEditModal(false)
      }
    } else {
      target.classList.add("hide");
    }
  };
  const handleWindowOnClick = (event) => {
    let modal = document.getElementById("manage-modal");
    if (modal !== null) {
      if (
        !event.path.includes(modal) &&
        !event.path.includes(document.getElementById("add-btn")) &&
        !event.path.includes(document.getElementById("edit-btn"))
      ) {
        modal.classList.add("hide");
      }
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleWindowOnClick, false);
  });

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "day", headerName: "Day", width: 150 },
    { field: "time", headerName: "Time", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 170,
      renderCell: (params) => {
        return (
          <>
            <EditIcon
              className="drscheduleEdit"
              onClick={handleOnClickAdd}
              id="edit-btn" 
            />
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
    <div className="drscheduleList">
      <div className="doctorscheduleListTitleContainer">
        <h3 className="doctorscheduleListTitle">Patient Schedule</h3>
      </div>
      <div className="doctorscheduleAdd">
        <button
          className="doctorscheduleAddButton"
          onClick={handleOnClickAdd}
          id="add-btn"
        >
          +Add New
        </button>
      </div>
      <div className="manage-modal hide shadow" id="manage-modal">
        {
          isEditModal ? (
            <EditPatientSchedule/> 
          ) :
          <NewPatientSchedule />
        }
        
      </div>

      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        className="drscheduleTable"
      />
    </div>
  );
}
