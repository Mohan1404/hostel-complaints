import React from 'react';
import Login from './Login';
import  './Navigation.css';
import Form from "./Form.js";
import Complaint from "./Complaint.js";
import Admin from './Admin.js';
import Profile from './Profile.js'
import Success from './Success.js';
import Student from './Student.js';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
const Navigation = () => {
  
  return (
    
      <Router>
        <div className="navbar">
        <h1 className="head">MBU Hostel Management</h1>
          <ul className="uls">
              <li className="lis">
                <Link className="lis" to="/login">Student</Link>
              </li>
              <li className="lis">
              <Link className="lis" to="/admin">Admin</Link>
              </li>
          </ul>
        </div>
      <Routes>
          <Route  path="/login" element={<Login/>}/>
          <Route path="/login/student" element={<Student/>}/>
          
          <Route path="/login/student/form" element={<Form/>}/>
          <Route path="/login/student/profile" element={<Profile/>}/>
          
          <Route path="/login/student/form/success" element={<Success/>}/>
          
          <Route  path="/admin" element={<Admin/>}/>
          <Route  path="/admin/complaint" element={<Complaint/>}/>
           
      </Routes>
      

      </Router>
      
   
  )
};

export default Navigation;
