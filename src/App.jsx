import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./utils/Header/Header";
import HomePage from "./components/HomePage/HomePage";


function App() {
  return (
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
      </Routes>
    </Router>
  );
}

export default App;
