import React from "react";
import MyResume from "../assets/Resume.pdf"

function Resume(){
    const frontEnds =["HTML", "CSS", "JavaScript","JQuery","REACT","Bootstrap"];
    const backEnds= ["APIs","Node","Express","MySQL","Sequelize","MongoDB","Mongoose","REST","GraphQL"];

    return(
        <div class="card">
        <div class="card-header">
        <h3><u>RESUME</u></h3>
        </div>
        <div class="card-body">
          <h5 class="card-title">Click the button to download my Resume</h5>
          <button className="button">
            <a className="button" href={MyResume} download>
               Download Resume
            </a>
          </button>
          <div className="resume-content">
            <h5> Front-End Technologies: </h5>
            <ul>
              {
                frontEnds.map(item =>(
                  <li> {item} </li>
                ))}
            </ul>
            <h5> Back-End Technologies: </h5>
            <ul>
              {
                backEnds.map(item =>(
                  <li>{item}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Resume;