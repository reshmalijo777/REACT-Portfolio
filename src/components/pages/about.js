import React from "react";
import ProfilePic from "../../assets/IMG_20230124_092330_088 (1).jpg"
import "../../style/about.css"


function About(){
    return(
        <div className="card mb-3">
            <div className="card-body">
            <input type="image" img src={ProfilePic} className="profile-pic mx-4 mt-4" alt="Profile-Picture"/>
            <h5 className="card-title">About Me</h5>
            <p className="card-text">
              I am an ambitious, detail-oriented full-stack web developer. A recent graduate of the full-stack web development bootcamp at GeorgiaTech
              University, I am equally proficient in and have an affinity for both front-end and back-end development. Front-end proficiencies include React, JavaScript, CSS,
              Bootstrap, jQuery, HTML, APIs, responsive design, Git. Back-end proficiencies include Node, Express, MySQL/Sequelize, MongoDB/Mongoose, REST, and GraphQL.</p>
            <p className="card-text">
              My career objective is to work in a challenging environment that provides an opportunity to learn key technology areas, and to be an asset for the organization 
              by delivering to the best of my capabilities. I firmly believe that quality in work is achievable through sincerity, devotion, and dedication.
            </p>
            </div>
            </div>
    )
}
export default About;