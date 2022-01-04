import React, { useState } from "react";
import "./managePatientSchedule.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { patientscheduleRows } from "../../dummyData";
import NewPatientSchedule from "../newPatientSchedule/NewPatientSchedule";


export default function ManagePatientSchedule() {
  const [data, setData] = useState(patientscheduleRows);
  const [modal, setModal] = useState(false);
  const [editID, setEditID] = useState();

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleOnclickEdit = (event, id) => {
    console.log("id =>" + id);
    setModal(true);
    setEditID(id);
  };

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
              onClick={(event) => handleOnclickEdit(event, params.row.id)}
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
          onClick={() => setModal(true)}
        >
          +Add New
        </button>
      </div>
      {modal ? (
        <div className="manage-modal shadow" id="manage-modal">
          <NewPatientSchedule
            modalClose={setModal}
            deleteID={setEditID}
            idModal={editID}
          />
        </div>
      ) : null}

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
