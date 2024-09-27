import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./utils/Header/Header";
import Sidebar from "./utils/Sidebar/Sidebar";


function App() {
  return (
    <Router>
      <div className="page-slice">
        <Header />
        <Sidebar />
      </div>
      <Routes></Routes>
    </Router>
  );
}

export default App;
