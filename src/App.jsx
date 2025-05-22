

import './App.css'
import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom'
import Firstpage from './components/Firstpage'
import Login from './components/Login'
import ContactUs from './components/Contactus'
import RegistrationForm from './components/RegistrationForm'
import About from './components/About'
import Otp from './components/Otp'
import OtpInput from './components/Otp'
import DataInput from './components/DataInput'

const App = () => {
  return (
    <div>
      <div>
        <Router>
            <Routes>
               <Route path="/" element={<Firstpage/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<RegistrationForm/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<ContactUs/>}></Route> 
                <Route path="/otp" element={<Otp/>}></Route>
                <Route path="/datainput" element={<DataInput/>}></Route>
            </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App;
