import React from "react";
import {Link } from "react-router-dom";


function Home(){
    return(
        <div className="containter-fluid">
            <div class="card-body">
                <h5 class="card-title">Hello!!!</h5>
                <p>My name is Reshma Paul</p>
                <p>I am a web developer from Nashville,Tennessee</p>
                <p> Click the link below to know more about me!</p>
                <Link to = "/about">
                    <button type='button' className='btn custom-btn'>More About Me...</button>
                </Link>
            </div>
          </div> 
    )
}
export default Home;