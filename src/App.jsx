import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopHeader from "./utils/TopHeader/TopHeader"
import Header from "../src/utils/Header/Header"
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <Router>
      <TopHeader/>
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage/> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
