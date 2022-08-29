import React,{useState} from "react"
import './Login.css'
import studarr from './slogininfo';
import {Link} from 'react-router-dom';
let count=0;
function Login(){
  
  const initial={
    email:"",
    password:""
  }
  
  const [loginDetails,setLoginDetails]=useState(initial);
  function checkLogin(){
    
    count=0;
    for(let i=0;i<studarr.length;i++){
        if(loginDetails.email===studarr[i].email && loginDetails.password===studarr[i].password){
          
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
    setLoginDetails({...loginDetails,[name]:value});
        console.log(loginDetails);
      e.preventDefault();
  }

  return (
    <div className="cards">
      
      <form className="card-student">
      <h1>Student Login</h1>
        <input onChange={handleChange} required className="card-info" type="email" name="email" placeholder="enter your email" value={loginDetails.email}/>
        <input onChange={handleChange} required className="card-info" type="password" name="password" placeholder="enter password" value={loginDetails.password} />
        
        <Link to="/login/student"><input onClick={checkLogin}  className="card-btn" type="submit"/></Link>
        <div>reference:</div>
        <div>email: mohan@gmail.com</div>
        <div>password: mohan</div>
        
        
      </form>
      
    </div>
  )
}
export default Login;