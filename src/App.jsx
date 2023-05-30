import { Outlet } from "react-router-dom";
import {NavBar} from './components/Navbar'

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar>
      <h2>Movies Lib</h2>
      </NavBar>
      <Outlet />
    </div>
  );
}

export default App;
