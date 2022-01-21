import React, { useEffect, useState } from "react";
import "./manageOutpatient.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { outpatientRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { actionDeleteOutpatient, actionGetAllOutpatients } from "../../config/redux/action";
import { connect } from "react-redux";

const ManageOutpatient = (props) => {
  const [data, setData] = useState(outpatientRows);

  const handleDelete = (id) => {
    props.deleteOutpatient({id:id})
    .then(()=>{
      
    })
  };

  useEffect(() => {
    if (props.outpatient.length <= 0) {
      props.AllOutpatient().then(() => {
       
        console.log(props.outpatient);
      });
    }else{
      setData(props.outpatient)
    }

  }, [props]);


  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "nik", headerName: "NIK", width: 120 },
    { field: "patientName", headerName: "Patient Name", width: 180 },
    { field: "day", headerName: "Day", width: 100 },
    { field: "date", headerName: "Date", width: 100 },
    { field: "time", headerName: "Time", width: 120 },
    {field: "nip", headerName: "NIP", width:120},
    { field: "doctor", headerName: "Doctor", width: 170 },
    { field: "room", headerName: "Room", width: 100 },
    { field: "symptoms", headerName: "Symptoms", width: 150 },
    {field: "title", headerName: "Diagnosis", width:150},
    {field: "detailrecipe", headerName: "Medicine Recipe", width:150},
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
        <h3 className="ListTitle">Outpatient Session</h3>
      </div>
      <div className="outpatientAdd">
      <Link to="/newOutpatient">
          <button className="outpatientAddButton">+Add New</button>
        </Link>
      </div>
      {props.outpatient.length !== 0 && (
        <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
      )}
    </div>
  );
}

const reduxState = (state) => ({
  outpatient: state.outpatient,
});
const reduxDispatch = (dispatch) => ({
  AllOutpatient: (data) => dispatch(actionGetAllOutpatients(data)),
  deleteOutpatient : (data) => dispatch(actionDeleteOutpatient(data)),

});

export default connect(reduxState, reduxDispatch)(ManageOutpatient)