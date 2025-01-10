import Login from "./components/Login/Login"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from "./components/Signup/Singup"
import UsersDashboard from "./components/Dashboard/UsersDashboard"
import axios from 'axios'



axios.defaults.baseURL = 'https://national-project-backend.onrender.com';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<UsersDashboard />} />

      </Routes>
    </Router>

  )
}

export default App
