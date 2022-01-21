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
    id: 0,
  });
  const params = useParams();
  const [outPatient, setOutPatient] = useState({});
  const id = Number(params.outpatientId);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const [patient, setPatient] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [patsche, setPatsche] = useState([]);

  const [detail, setDetail] = useState([
    {
      icon: PermIdentityIcon,
      value: "Empty",
      name: "patientName",
    },
    {
      icon: ConfirmationNumberIcon,
      value: "",
      name: "day",
    },
    {
      icon: CalendarTodayIcon,
      value: "",
      name: "date",
    },
    {
      icon: AccessAlarmIcon,
      value: "",
      name: "time",
    },
    {
      icon: AssignmentIndIcon,
      value: "",
      name: "doctor",
    },
    {
      icon: MeetingRoomIcon,
      value: "room",
      name: "room",
    },
    {
      icon: FindInPageIcon,
      value: "",
      name: "symptoms",
    },
    {
      icon: FilterFramesIcon,
      value: "",
      name: "title",
    },
    {
      icon: AssignmentTurnedInIcon,
      value: "",
      name: "status",
    },
  ]);
  const handleOnChange = (event) => {
    let { name, value } = event.currentTarget;
    setField({ ...field, [name]: value });
  };
  const handleOnchangeNik = (event) => {
    let { name, value } = event.currentTarget;
    setKeySearch({ ...keySearch, ["nik"]: value });
    let found = patient.find((i) => {
      return i.nik === value;
    });
    if (found) {
      setAutofill({ ...autofill, patientName: found.name });
      setField({ ...field, patientid: found.id });
    }
  };

  const handleChangeDate = (date) => {
    setField({ ...field, date: date });
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

  const handleOnchangeNip = (event) => {
    let { name, value } = event.currentTarget;
    setKeySearch({ ...keySearch, ["nip"]: value });
    let found = doctor.find((i) => {
      return i.nip === value;
    });
    if (found) {
      setAutofill({ ...autofill, doctor: found.name, room: found.room });
      setField({ ...field, doctorid: found.id });
    }
  };
  const [autofill, setAutofill] = useState({
    patientName: "",
    doctor: "",
    room: "",
  });

  const [keySearch, setKeySearch] = useState({
    nik: "",
    nip: "",
  });

  useEffect(
    (before) => {
      if (props.doctor.length <= 0) {
        props.AllDoctor().then(() => {});
      } else {
        let foundDoctor = props.doctor.find((i) => {
          return i.nip === outPatient.nip;
        });
        console.log(foundDoctor);
        if (foundDoctor) {
          console.log(foundDoctor);
          setAutofill({
            ...autofill,
            doctor: foundDoctor.name,
            room: foundDoctor.room,
          });
        }
        setDoctor(props.doctor);
      }
      if (props.patient.length <= 0) {
        props.AllPatients().then(() => {});
      } else {
        let foundPatient = props.patient.find((i) => {
          return i.nik === outPatient.nik;
        });
        if (foundPatient) {
          setAutofill({ ...autofill, patientName: foundPatient.name });
          setField({ ...field, patientid: foundPatient.id });
        }
        setPatient(props.patient);
      }
      if (props.patsche.length <= 0) {
        props.AllPatSchedule().then(() => {});
      } else {
        setPatsche(props.patsche);
      }

      if (
        props.outpatient.length !== 0 &&
        outPatient.patientName === undefined
      ) {
        let found = props.outpatient.find((i) => i.id === id);
        let temp = [...detail];
        temp.forEach((i) => {
          i.value = found[i.name];
        });

        let tempField = { ...field };
        let pass = ["doctorid", "patientid"];
        Object.keys(tempField).forEach((k) => {
          if (!pass.includes(k)) {
            tempField[k] = found[k];
          }
          if (k === "patientscheduleid") {
            tempField[k] = found.patsche["id:"];
          }
        });
        let tempKeySearch = { ...keySearch };

        tempKeySearch.nik = found.nik;
        tempKeySearch.nip = found.nip;
        console.log(tempField);
        console.log(found);
        setKeySearch(tempKeySearch);
        setField(tempField);
        setOutPatient(found);
        setDetail(temp);
      }
    },
    [props, patient, patsche, patient]
  );
  return (
    <div className="outpatient">
      {field.example + " " + field.patientid}
      <div className="outpatientContainer">
        <div className="outpatientShow">
          <div className="outpatientShowDetail">
            <span className="outpatientShowTitle">Outpatient Details</span>
            {detail.map((item, index) => (
              <div key={index} className="outpatientShowInfo">
                <item.icon className="outpatientShowIcon" />
                <span className="outpatientShowInfoTitle">{item.value}</span>
              </div>
            ))}
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
              <div className="newOutpatientItem">
                <label>Schedule</label>
                <select
                  className="form-control"
                  value={field.patientscheduleid}
                  onChange={handleOnChange}
                  name="patientscheduleid"
                >
                  <option value={0} disabled>
                    Pilih Jadwal
                  </option>
                  {patsche.map((item) => (
                    <option value={item.id} key={item.id}>
                      {item.day + " , " + item.time}
                    </option>
                  ))}
                </select>
              </div>
              <div className="newOutpatientItem">
                <label>Date</label>
                <DatePicker
                  selected={new Date()}
                  onChange={handleChangeDate}
                  // value={field.date}
                  dateFormat="dd/MM/yyyy"
                  filterDate={(date) =>
                    date.getDay() !== 6 && date.getDay() !== 0
                  }
                  isClearable
                  showYearDropdown
                  scrollableMonthYearDropdown
                  name="date"
                  className="form-control"
                ></DatePicker>
              </div>
              <div className="newOutpatientItem">
                <label> NIP</label>
                <input
                  type="text"
                  value={keySearch.nip}
                  onChange={handleOnchangeNip}
                  className="form-control"
                  placeholder="Enter NIP"
                />
              </div>
              <div className="newOutpatientItem">
                <label>Doctor</label>
                <input
                  type="text"
                  value={autofill.doctor}
                  disabled
                  className="form-control"
                  placeholder="Enter Doctor Name"
                />
              </div>
              <div className="newOutpatientItem">
                <label>Rooms</label>
                <input
                  type="text"
                  className="form-control"
                  value={autofill.room}
                  disabled
                  placeholder="Enter Rooms"
                />
              </div>
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
