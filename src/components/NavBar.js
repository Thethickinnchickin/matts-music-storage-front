import React from 'react';
import { Link } from 'react-router-dom';
import '../components/NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar-cus" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="navbar-container-cus">
        <Link to="/" className="navbar-logo-cus">
          Matts Music
        </Link>
        <ul className="nav-menu-cus">
          <li className="nav-item-cus">
            <Link to="/home" className="nav-link-cus">
              Home
            </Link>
          </li>
          <li className="nav-item-cus">
            <Link to="/songs" className="nav-link-cus">
              Songs
            </Link>
          </li>
          <li className="nav-item-cus">
            <Link to="/play/song" className="nav-link-cus">
              Artists
            </Link>
          </li>
          <li className="nav-item-cus">
            <Link to="/genres" className="nav-link-cus">
              Genres
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
