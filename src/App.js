import "./App.css";
import List from "./components/List";
import Create from "./components/Create";
import Edit from "./components/Edit";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
function App() {
  return (
    /*React Router*/
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <ul className="nav navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to={"/"}>
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/create"}>
              Crear empleado
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/edit"}>
              Editar empleado
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<List />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
