import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./utils/Header/Header";
import Sidebar from "./utils/Sidebar/Sidebar";
import HomePage from "./components/HomePage/HomePage";


function App() {
  return (
    <Router>
        <Header />
        {/* <Sidebar /> */}
      <Routes>
        {/* <Route path="/" element={ <HomePage/ }/> */}
      </Routes>
    </Router>
  );
}

export default App;
