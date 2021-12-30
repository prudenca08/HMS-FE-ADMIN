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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
