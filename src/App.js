import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./screens/Home";
import About from "./screens/About";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import Question from "./screens/Question";
import NavElement from "./Components/Navbar/NavElement";

function App() {
  return (
    <Router>
      <NavElement/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Question" element={<Question />} />
      </Routes>
    </Router>
  );
}

export default App;