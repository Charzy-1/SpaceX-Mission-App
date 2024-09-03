import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 
import planet from '../images/planet.png';  

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={planet} alt="SpaceX Mission App" className="logo-image" />
        <span>SpaceX Mission App</span>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Rockets</Link>
        <Link to="/missions" className="nav-link">Missions</Link>
        <span className="divider">|</span>
        <Link to="/profile" className="nav-link">My Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;
