import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopHeader from "./utils/TopHeader/TopHeader"

function App() {
  return (
    <Router>
      <TopHeader/>
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
