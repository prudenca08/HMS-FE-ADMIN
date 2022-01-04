import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarTop from "./components/NavbarTop/NavbarTop";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import PatientsList from "./pages/patientsList/PatientsList";
import Patient from "./pages/patient/Patient";
import NewPatient from "./pages/newPatient/NewPatient";
import DoctorsList from "./pages/doctorList/DoctorsList";
import Doctor from "./pages/doctor/Doctor";
import NewDoctor from "./pages/newDoctor/NewDoctor";
import ManageDrSchedule from "./pages/manageDrSchedule/ManageDrSchedule";
import ManagePatientSchedule from "./pages/managePatientSchedule/ManagePatientSchedule";
import ManageOutpatient from "./pages/manageOutpatient/ManageOutpatient";
import NewOutpatient from "./pages/newOutpatient/NewOutpatient";
import Outpatient from "./pages/outpatient/Outpatient";
import Form from "./pages/login/Form";

function App() {
  return (
    <Router>
      <NavbarTop />
      <div className="containers">
        <Sidebar
          onCollapse={(inactive) => {
            console.log(inactive);
          }}
        />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/patients">
            <PatientsList />
          </Route>
          <Route path="/patient/:patientId">
            <Patient />
          </Route>
          <Route path="/newPatient">
            <NewPatient />
          </Route>
          <Route path="/doctors">
            <DoctorsList />
          </Route>
          <Route path="/doctor/:doctorId">
            <Doctor />
          </Route>
          <Route path="/newDoctor">
            <NewDoctor />
          </Route>
          <Route path ="/manage/drschedule">
            <ManageDrSchedule />
          </Route>
          <Route path ="/manage/patientschedule">
            <ManagePatientSchedule />
          </Route>
          <Route path ="/manage/outpatient">
            <ManageOutpatient />
          </Route>
          <Route path="/outpatient/:outpatientId">
            <Outpatient/>
          </Route>
          <Route path="/newOutpatient">
            <NewOutpatient />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
