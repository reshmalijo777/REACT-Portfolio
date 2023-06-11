import React from "react";
import "../../style/footer.css"

function Footer(){
    return(
        <footer className= "footer d-flex">
            <div>
                <a href ="https://github.com/reshmalijo777" target="_blank" rel="noreferrer">
                  <img alt="Github" className="footer-img " src={require("../../assets/icons8-github-24.png")} /></a>
                <a href ="https://www.linkedin.com/in/reshma-paul-84bb53104/" target="_blank" rel="noreferrer">
                  <img alt="Linkedin" className="footer-img" src={require("../../assets/icons8-linkedin-30.png")}/></a>
                <a href ="https://www.facebook.com/reshma.paul.12" target="_blank" rel="noreferrer">
                  <img alt="Facebook" className="footer-img" src={require("../../assets/icons8-facebook-30.png")}/></a>
                
            </div>

            <div className="footer-copy">
            <p>&copy; {new Date().getFullYear()} - Reshmapaul</p>
      </div>
    </footer>
  );
};

export default Footer;