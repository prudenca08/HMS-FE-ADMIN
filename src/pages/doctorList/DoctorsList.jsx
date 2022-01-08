import React, { useState } from "react";
import "./doctorsList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { doctorRows } from "../../dummyData";
import { Link } from "react-router-dom";

export default function DoctorsList() {
  const [data, setData] = useState(doctorRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "doctor_name", headerName: "Name", width: 130 },
    { field: "nip", headerName: "NIP", width: 130 },
    {
      field: "phone",
      headerName: "Phone",
      type: "number",
      width: 120,
    },
    {
      field: "specialist",
      headerName: "Specialist",
      width: 120,
    },
    {
      field: "room",
      headerName: "Room",
      width: 90,
    },
    {
      field: "username",
      headerName: "Username",
      width: 130,
    },
    {
      field: "password",
      headerName: "Password",
      type: "password",
      width: 130,
    },

    {
      field: "experience",
      headerName: "Experience",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 170,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/doctor/" + params.row.id}>
              <EditIcon className="doctorsEdit" />
            </Link>
            <DeleteOutlineIcon
              className="doctorsDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="doctorsList">
      <div className="doctorListTitleContainer">
        <h3 className="ListTitle">Doctors</h3>
      </div>
      <div className="doctorAdd">
        <Link to="/newDoctor">
          <button className="doctorAddButton">+Add New</button>
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
