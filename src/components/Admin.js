
import React,{useState} from "react"
import './admin.css'
import aarr from './aloginfo.js'
import {Link} from 'react-router-dom';

function Admin(){
  const initial={
    email:"",
    password:""
  }
  const [adminDetails,setAdminDetails]=useState(initial);
  function checkLogin(){
    var count=0;  
    for(var i=0;i<aarr.length;i++){
        if(adminDetails.email===aarr[i].email && adminDetails.password===aarr[i].password){
          
          count=1;
          break;

        }
      }
      if(count===0){
        alert("invalid login please check your credentials");
      }
      
  }
  function handleChange(e){
    const {name,value}=e.target;
    setAdminDetails({...adminDetails,[name]:value});
        console.log(adminDetails);
      
  }

  return (
    <div className="cards">
      <form className="card-admin">
        <h1>Admin Login</h1>
        <input onChange={handleChange} required className="card-info" type="email" name="email" placeholder="enter your email" value={adminDetails.email}/>
        <input onChange={handleChange} required className="card-info" type="password" name="password" placeholder="enter password" value={adminDetails.password} />
        
        <Link to="/admin/complaint"><input onClick={checkLogin}  className="card-btn" type="submit"/></Link>
        <div>reference:</div>
        <div>email: admin@gmail.com</div>
        <div>password: admin</div>

        
        
      </form>
      
    </div>
  )
}
export default Admin;