import React from 'react'
import Navbar from '../Navigation';
// Import React Router Link component for internal hyperlinks
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex flex-row  h-100 justify-content-between'>
         {/* Use Link component to create a link that returns to the homepage on click */}
        <Link className='custom-header' to='/'>
          <h1 className="m-0" style={{ fontSize: '3rem' }}> Reshma Paul </h1>
        </Link>
        <Navbar />
        </div>
    )
};
export default Header;