import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./Components/SideNav";

const App = () => {
  return (
    <div>
      <Router>
        <SideBar />
      </Router>
    </div>
  );
};

export default App;
