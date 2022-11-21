import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Announcements from "./pages/Announcements";
import UserInfo from "./user/Userinfo";
import UserEditInfo from "./user/UserEditInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/useredit" element={<UserEditInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
