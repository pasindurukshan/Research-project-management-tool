import React from "react";
import Home from './Home/home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './student/register';
import StudentDashboard from './student/studentDashboard';
import RequestSupervisor from './student/requestSupervisor';
import RequestCoSupervisor from './student/requestCoSupervisor';


const App = () => { 
   

    return (

      
     

<Router>

  <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/st" element={<StudentDashboard />} />
    <Route path="/rc" element={<RequestSupervisor />} />
    <Route path="/rcs" element={<RequestCoSupervisor />} />


  </Routes>

</Router>

);

}
    
export default App;