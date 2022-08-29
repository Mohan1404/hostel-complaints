import React,{useState} from 'react'
import "./form.css"
import arr from './Info.js'
import {Link} from 'react-router-dom'
function Form() {
    
    const initialvalues={sname:"",hname:"",roomno:"",issue:"",phoneno:"",adate:"",atime:"",description:""}
    const [values,setValues]=useState(initialvalues);
    function handleChange(e){
        const {name,value}=e.target;
        setValues({...values,[name]:value});
        
        
    };
    function handleSubmit(e){
        
            arr.push(values);
            console.log(arr);
        
        
             
    }
    return (
        
    <div className="total">
        
    <div className="c-form">
       
        <h1>Complaint form</h1>
        <form >
            <div className="row">
            <input name="sname" required onChange={handleChange} className="inp" type="text" placeholder='Enter Your Name' value={values.sname}/>
            
            </div>
            <div className="row">
            <select name="hname" required onChange={handleChange} className="inp"  id="cars" value={values.hname}>
                <option value="">Choose Your Hostel</option>
                <option value="Hostel-A">Hostel-A</option>
                <option value="Hostel-B">Hostel-B</option>
                <option value="Hostel-C">Hostel-C</option>
                <option value="Hostel-D">Hostel-D</option>
                <option value="Hostel-E">Hostel-E</option>
                <option value="Hostel-F">Hostel-F</option>
              </select>
              </div>
              <div className="row">
            <input  required onChange={handleChange} className="inp" type="text" placeholder="Enter Room No." name="roomno" value={values.roomno}/>
            </div>
            <div className="row">
            <select required onChange={handleChange} className="inp" name="issue" value={values.issue}>
                <option value="">Choose Your Issue</option>
                <option value="wifi">WIFI</option>
                <option value="electricity">Electricity</option>
                <option value="cleanliness">Cleanliness</option>
                <option value="food">Food</option>
                <option value="plumber">plumber</option>
                <option value="medical">Medical</option>
            </select>
            </div>
            <div className="row">
            <input required onChange={handleChange} className="inp" type="text" name="phoneno" value={values.phoneno} placeholder='Mobile Number'/>
            
            
            </div>
            <div className="inp">
                <label htmlFor="time date">Availability</label>
                <input required onChange={handleChange} name="adate" value={values.adate} type="date" />
                <input required onChange={handleChange} name="atime"value={values.atime} type="time"/>
            </div>
            <div className="row">           
            <textarea required onChange={handleChange} className="inp" name="description" value={values.description} placeholder='Describe your issue[optional]' cols="50" rows="7"></textarea>
            
            </div>
            <Link to="/login/student/form/success"><input className='btn'  onClick={handleSubmit}   type="submit" /></Link>
        </form>
    </div>
    </div>
  )
}

export default Form