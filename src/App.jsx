import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopHeader from "./utils/TopHeader/TopHeader"
import Header from "../src/utils/Header/Header"

function App() {
  return (
    <Router>
      <TopHeader/>
      <Header />
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
