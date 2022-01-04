import React, { useState } from "react";
import "./manageDrSchedule.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { drscheduleRows } from "../../dummyData";
import NewDrSchedule from "../newDrSchedule/NewDrSchedule";
import EditDrSchedule from "../editDrSchedule/EditDrSchedule";
import { useEffect } from "react";

export default function ManageDrSchedule() {
  const [data, setData] = useState(drscheduleRows);
  const [modall, setModal] = useState(false);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const handleOnClickAdd = (event) => {
    setModal(true);
    let target = document.getElementById("manage-modal");
    if (target.classList.contains("hide")) {
      target.classList.remove("hide");
    } else {
      target.classList.add("hide");
    }
    console.log(target);
  };
  const handleWindowOnClick = (event) => {
    let modal = document.getElementById("manage-modal");
    if (modal !== null) {
      if (
        !event.path.includes(modal) &&
        !event.path.includes(document.getElementById("add-btn"))
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
              onClick={() => handleOnClickAdd(params.row.id)}
              id="add-btn"
            />
            {/* <div className="manage-modal hide shadow" id="manage-modal">
              <EditDrSchedule />
            </div> */}

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
        <h3 className="doctorscheduleListTitle">Doctor Schedule</h3>
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
      {modall ? (
        <div className="manage-modal  shadow" id="manage-modal">
          <NewDrSchedule />
        </div>
      ) : null}
      <div className="manage-modal hide shadow" id="manage-modal">
        <EditDrSchedule />
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
