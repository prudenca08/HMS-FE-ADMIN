import NavbarTop from "./components/NavbarTop/NavbarTop";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/dashboard/dashboard";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <NavbarTop />
      <div className="containers">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
