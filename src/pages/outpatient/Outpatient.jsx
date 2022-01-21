import React, { useEffect, useState } from "react";
import "./outpatient.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import FilterFramesIcon from "@material-ui/icons/FilterFrames";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import {
  actionUpdateOutpatient,
  actionGetAllDoctors,
  actionGetAllPatients,
  actionGetAllPatientSchedule,
} from "../../config/redux/action";
import Loading from "../../assets/img/icon/load.gif";
import { useHistory, useParams } from "react-router-dom";

const Outpatient = (props) => {
  const [field, setField] = useState({
    doctorid: 0,
    patientid: 0,
    patientscheduleid: 0,
    symptoms: "",
    title: "",
    detailrecipe: "",
    status: "",
    date: "",
  });

  const [autofill, setAutofill] = useState({
    patientName: "",
    doctor: "",
    room: "",
  });

  const [keySearch, setKeySearch] = useState({
    nik: "",
    nip: "",
  });

  const [patient, setPatient] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [patsche, setPatsche] = useState([]);

  const [data, setData] = useState([]);
  const history = useHistory();



  const [outpatient, setOutpatient] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (props.doctor.length <= 0) {
      props.AllDoctor().then(() => {
        console.log(props.doctor);
      });
    } else {
      setDoctor(props.doctor);
    }
    if (props.patient.length <= 0) {
      props.AllPatients().then(() => {
        console.log(props.patient);
      });
    } else {
      setPatient(props.patient);
    }
    if (props.patsche.length <= 0) {
      props.AllPatSchedule().then(() => {
        console.log(props.patsche);
      });
    } else {
      setPatsche(props.patsche);
    }
  }, [props]);

  const handleChangeDate = (date) => {
    setField({ ...field, ["date"]: date });
    console.log(field);
  };

  useEffect(() => {
    if (props.outpatient.length !== 0 && outpatient.name === undefined) {
      setOutpatient(
        props.outpatient.find((i) => i.id === Number(params.outpatientId))
      );
    } else if (outpatient.name !== undefined) {
      let tmp = {};
      Object.keys(field).forEach((k) => {
        tmp[k] = outpatient[k];
        console.log(outpatient[k]);
      });
      setField(tmp);
    }
    if (props.doctor.length <= 0) {
      props.AllDoctor().then(() => {
        console.log(props.doctor);
      });
    } else {
      setDoctor(props.doctor);
    }
    if (props.patient.length <= 0) {
      props.AllPatients().then(() => {
        console.log(props.patient);
      });
    } else {
      setPatient(props.patient);
    }
    if (props.patsche.length <= 0) {
      props.AllPatSchedule().then(() => {
        console.log(props.patsche);
      });
    } else {
      setPatsche(props.patsche);
    }

  }, [outpatient, props]);

  const params = useParams();

  const handleOnChange = (event) => {
    let { name, value } = event.currentTarget;
    setField({ ...field, [name]: value });
  };

  const handleOnchangeNik = (event) => {
    let { name, value } = event.currentTarget;
    setKeySearch({ ...keySearch, ["nik"]: value });
    console.log(patient);
    let found = patient.find((i) => {
      return i.nik === value;
    });
    console.log(found);
    if (found) {
      setAutofill({ ...autofill, patientName: found.name });
      setField({ ...field, patientid: found.id });
    }
  };

  const handleOnchangeNip = (event) => {
    let { name, value } = event.currentTarget;
    setKeySearch({ ...keySearch, ["nip"]: value });
    console.log(doctor);
    let found = doctor.find((i) => {
      return i.nip === value;
    });
    console.log(found);
    if (found) {
      setAutofill({ ...autofill, doctor: found.name, room: found.room });
      setField({ ...field, doctorid: found.id });
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    field.patient = patient.find((i) => {
      return i.id === Number(field.patientid);
    });
    field.doctor = doctor.find((i) => {
      return i.id === Number(field.doctorid);
    });
    field.schedule = patsche.find((i) => {
      return i.id === Number(field.patientscheduleid);
    });
    console.log(field);

    props
      .createOutpatient(field)
      .then((res) => {
        console.log(res);
        history.push("/manage/outpatient");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="outpatient">
      <div className="outpatientContainer">
        <div className="outpatientShow">
          <div className="outpatientShowDetail">
            <span className="outpatientShowTitle">Outpatient Details</span>
            <div className="outpatientShowInfo">
              <PermIdentityIcon className="outpatientShowIcon" />
              <span className="outpatientShowInfoTitle">Margareth Ellie</span>
            </div>
            <div className="outpatientShowInfo">
              <ConfirmationNumberIcon className="outpatientShowIcon" />
              <span className="outpatientShowInfoTitle">Monday</span>
            </div>
            <div className="outpatientShowInfo">
              <CalendarTodayIcon className="outpatientShowIcon" />
              <span className="outpatientShowInfoTitle">29/12/2021</span>
            </div>
            <div className="outpatientShowInfo">
              <AccessAlarmIcon className="outpatientShowIcon" />
              <span className="outpatientShowInfoTitle">10.00 - 10.50</span>
            </div>
            <div className="outpatientShowInfo">
              <AssignmentIndIcon className="outpatientShowIcon" />
              <span className="outpatientShowInfoTitle">
                dr.Thomas Harianja
              </span>
            </div>
            <div className="outpatientShowInfo">
              <MeetingRoomIcon className="outpatientShowIcon" />
              <span className="outpatientShowInfoTitle">A27</span>
            </div>
            <div className="outpatientShowInfo">
              <LocalHospitalIcon className="outpatientShowIcon" />
              <span className="outpatientShowInfoTitle">
                Gatal-gatal, sesak nafas, demam, batuk, pilek, mata berair,
                lorem ipsum dolor sit amet narmis
              </span>
            </div>
            <div className="outpatientShowInfo">
              <FindInPageIcon className="outpatientShowIcon" />
              <span className="outpatientShowInfoTitle">Asam Lambung</span>
            </div>
            <div className="outpatientShowInfo">
              <FilterFramesIcon className="outpatientShowIcon" />
              <span className="outpatientShowInfoTitle">
                Antasid Menetralkan efek asam lambung. 2 kali sehari setelah
                makan
              </span>
            </div>
            <div className="outpatientShowInfo">
              <AssignmentTurnedInIcon className="outpatientShowIcon" />
              <span className="outpatientShowInfoTitle">On Progress</span>
            </div>
          </div>
        </div>
        <div className="outpatientUpdate">
          <span className="outpatientUpdateTitle">Edit</span>
          <form className="outpatientUpdateForm" onSubmit={handleOnSubmit}>
            <div className="outpatientUpdateLeft">
              <div className="outpatientUpdateItem">
                <label> NIK</label>
                <input
                  type="text"
                  value={keySearch.nik}
                  className="outpatientUpdateInput"
                  placeholder="Enter Full NIK"
                  onChange={handleOnchangeNik}
                />
              </div>
              <div className="outpatientUpdateItem">
                <label>Patient Name</label>
                <input
                  type="text"
                  value={autofill.patientName}
                  disabled
                  placeholder="Enter Name"
                  className="outpatientUpdateInput"
                />
              </div>
              <div className="outpatientUpdateItem">
                <label>Schedule</label>
                <select
                  className="outpatientUpdateInput"
                  value={field.patientscheduleid}
                  onChange={handleOnChange}
                  name="patientscheduleid"
                >
                  <option value={0} selected disabled>
                    Pilih Jadwal
                  </option>
                  {patsche.map((item) => (
                    <option value={item.id} key={item.id}>
                      {item.day + " , " + item.time}
                    </option>
                  ))}
                </select>
              </div>
              <div className="outpatientUpdateItem">
                <label>Date</label>
                <DatePicker
                  selected={field.date}
                  onChange={handleChangeDate}
                  value={field.date}
                  dateFormat="dd/MM/yyyy"
                  filterDate={(date) =>
                    date.getDay() !== 6 && date.getDay() !== 0
                  }
                  isClearable
                  showYearDropdown
                  scrollableMonthYearDropdown
                  name="date"
                  className="outpatientUpdateInput"
                ></DatePicker>
              </div>
              <div className="outpatientUpdateItem">
                <label> NIP</label>
                <input
                  type="text"
                  value={keySearch.nip}
                  onChange={handleOnchangeNip}
                  className="outpatientUpdateInput"
                  placeholder="Enter NIP"
                />
              </div>
              <div className="outpatientUpdateItem">
                <label>Doctor</label>
                <input
                  type="text"
                  value={autofill.doctor}
                  disabled
                  className="outpatientUpdateInput"
                  placeholder="Enter Doctor Name"
                />
              </div>
              <div className="outpatientUpdateItem">
                <label>Room</label>
                <input
                  type="text"
                  className="outpatientUpdateInput"
                  value={autofill.room}
                  disabled
                  placeholder="Enter Rooms"
                />
              </div>
            </div>
            <div className="outpatientUpdateRight">
              <div className="outpatientUpdateItem">
                <label>Symptoms</label>
                <textarea
                  type="text"
                  name="symptoms"
                  value={field.symptoms}
                  onChange={handleOnChange}
                  placeholder="Enter Detail Symptoms"
                  className="outpatientUpdateInput"
                />
              </div>
              <div className="outpatientUpdateItem">
                <label>Diagnosis</label>
                <textarea
                  type="text"
                  value={field.title}
                  name="title"
                  onChange={handleOnChange}
                  className="outpatientUpdateInput"
                  placeholder="Enter Diagnosis"
                />
              </div>
              <div className="outpatientUpdateItem">
                <label>Medicine Recipe</label>
                <textarea
                  type="text"
                  name="detailrecipe"
                  value={field.detailrecipe}
                  onChange={handleOnChange}
                  placeholder="Enter Recipe"
                  className="outpatientUpdateInput"
                />
              </div>
              <div className="outpatientUpdateItem">
                <label>Status</label>
                <div className="newDoctorStatus">
                  <select
                    className="form-control"
                    value={field.status}
                    name="status"
                    onChange={handleOnChange}
                  >
                    <option selected disabled value={""}>
                      Pilih Status
                    </option>
                    <option value="waiting">Waiting</option>
                    <option value="onprogress">On Progress</option>
                    <option value="done">Done</option>
                  </select>
                </div>
              </div>
              <button className="outpatientUpdateButton" disabled={isLoading}>
                {isLoading ? <img src={Loading} alt="" width="40px" /> : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
const reduxState = (state) => ({
  outpatient: state.outpatient,
  patient: state.patient,
  patsche: state.patsche,
  doctor: state.doctor,
});
const reduxDispatch = (dispatch) => ({
  updateOutpatient: (data) => dispatch(actionUpdateOutpatient(data)),
  AllPatSchedule: (data) => dispatch(actionGetAllPatientSchedule(data)),
  AllPatients: (data) => dispatch(actionGetAllPatients(data)),
  AllDoctor: (data) => dispatch(actionGetAllDoctors(data)),
});

export default connect(reduxState, reduxDispatch)(Outpatient);
