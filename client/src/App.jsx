import Login from "./components/Login/Login"
import {BrowserRouter as Router ,  Routes, Route} from 'react-router-dom'
import SignUp from "./components/Signup/Singup"

function App() {
  return (

    <Router>
        <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    </Router>
   
  )
}

export default App
