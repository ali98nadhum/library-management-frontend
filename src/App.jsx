import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Outline from "./components/outline/Outline";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Outline />}>
        <Route index element={<HomePage/>} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
