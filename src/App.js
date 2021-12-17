import NavbarTop from "./components/NavbarTop/NavbarTop";
import Sidebar from "./components/Sidebar/Sidebar";
import "./app.css";

function App() {
  return (
    <div>
      <NavbarTop />
      <div className="container">
        <Sidebar />
        <div className="others">other Pages</div>
      </div>
    </div>
  );
}

export default App;
