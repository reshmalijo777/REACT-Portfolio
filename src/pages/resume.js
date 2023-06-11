import React from "react";
import MyResume from "../assets/Resume.pdf"

function Resume(){
    
    return(
        <div class="card">
        <div class="card-header">
        <h3>RESUME</h3>
        </div>
        <div class="card-body">
          <h5 class="card-title">Click the button to download my Resume</h5>
          <button className="button">
            <a className="button" href={MyResume} download>
               Download Resume
            </a>
          </button>
        </div>
      </div>
    )
}

export default Resume;