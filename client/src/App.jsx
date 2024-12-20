import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Otp from "./components/auth/Otp";
import Addnewpassword from "./components/auth/Addnewpassword";
import Forgetpassword from "./components/auth/Forgetpassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />{" "}
        {/* Redirect to /login */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/updatepassword" element={<Addnewpassword />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
      </Routes>
    </Router>
  );
};

export default App;
