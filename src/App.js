import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Components/Views/SignIn";
import SignUp from "./Components/Views/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
