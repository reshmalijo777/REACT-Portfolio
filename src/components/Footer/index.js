import React from "React";

function Footer(){
    return(
        <footer className= "footer d-flex">
            <div>
                <a href ="https://github.com/reshmalijo777"><i className="fa-brands fa-github fa-xl px-3"></i></a>
                <a href ="https://www.linkedin.com/in/reshma-paul-84bb53104/"><i className="fa-brands fa-linkedin fa-xl"></i></a>
            </div>

            <div className="footer-copy">
            <p>&copy; {new Date().getFullYear()} - Reshma Paul</p>
      </div>
    </footer>
  );
};

export default Footer;