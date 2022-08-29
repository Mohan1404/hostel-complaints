import "./Info.css";
import React from "react";
const sarr=[
  {
    id: 1,
    hname: "Hostel-A",
    issue: "Electricity",
    name: "Ajith",
    avaliablity: "24-10-22",
    roomno: "120",
    phoneno: "9874561230",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, reprehenderit suscipit exercitationem laboriosam rem sequi odio dolorum incidunt eius unde?"
  },

  {
    id: 2,
    hname: "Hostel-B",
    issue: "cleanliness",
    name: "Mohan",
    avaliablity: "22-11-22",
    roomno: "123",
    phoneno: "98745618685",
    description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, reprehenderit suscipit exercitationem laboriosam rem sequi odio dolorum incidunt eius unde?"
  },

  {
    id: 3,
    hname: "Hostel-C",
    issue: "plumber",
    name: "parthu",
    avaliablity: "10-10-22",
    roomno: "120220",
    phoneno: "9874856230",
    description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, reprehenderit suscipit exercitationem laboriosam rem sequi odio dolorum incidunt eius unde?"
  },

  {
    id: 4,
    hname: "Hostel-D",
    issue: "Wifi",
    name: "Bhanu",
    avaliablity: "20-12-22",
    roomno: "252",
    phoneno: "98785521230",
    description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, reprehenderit suscipit exercitationem laboriosam rem sequi odio dolorum incidunt eius unde?"
  },

  {
    id: 5,
    hname: "Hostel-E",
    issue: "electricity",
    name: "murali",
    avaliablity: "04-10-22",
    roomno: "125",
    phoneno: "98785961230",
    description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, reprehenderit suscipit exercitationem laboriosam rem sequi odio dolorum incidunt eius unde?"
  }
]
export default function Complaint(){
  
  function send(){}
  function reject(id) {
   
  }
   const ar = sarr.map((item) => {
    return (
      
      <div className="card-complaint" key={item.id}>
        <div className="hname-issue">
        <div className="hname"> {item.hname}</div>
        <div className="name">{item.name}</div>
        <div className="roomno"><b>Room No.:</b>{item.roomno}</div>
        </div>
        <div className="hname-issue">
          <div></div>
          
        </div>
        <div className="name-phone">
        <div className="issue"><b>Problem : </b>{item.issue}</div>
        <div className="phoneno">{item.phoneno}</div>
        </div>
        <div>
        <div className="availability"><b>Availability :</b> {item.avaliablity}</div>
        </div>
        <div>
        
        </div>
        
        <div>
        <div className="desc"><b>Description:</b> {item.description}</div>
        </div>
        <div className="btns">
        <div className="btn1" onClick={send()}>accept</div>
        <div className="btn1" onClick={reject(item.id)}>reject</div>
        </div>
        
      </div>
    );
  });
  return (
    <div>
      <div>
        <h1>Complaints Available</h1>
      </div>
      <div className="total">
        <div>{ar}</div>
      </div>
    </div>
  );
}

