import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Announcements from "./pages/Announcements";
import UserEditInfo from "./user/UserEditInfo";
import AddAnnouncements from "./pages/AddAnnouncements";
import Terms from "./pages/Terms";
import UserProfile from "./user/UserProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/announcements/:inSubject" element={<Announcements />} />
        <Route path="/userinfo" element={<UserProfile />} />
        <Route path="/useredit" element={<UserEditInfo />} />
        <Route path="/termsofuse" element={<Terms />} />
        <Route path="/addAnnouncements" element={<AddAnnouncements />} />
      </Routes>
    </Router>
  );
}

export default App;
