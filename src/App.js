import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MasterTem from "./layouts/admin/MasterTem";

function App() {
  return (
    <div >
      <Router>
          <Routes>
              <Route path="/admin/dashboard" component={MasterTem} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
