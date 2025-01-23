import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/carousel.css';

const Navbar = () => {
  const navigate = useNavigate();

  // Handle Logout Functionality
  const handleLogout = (e) => {
    e.preventDefault();

    // Remove token from localStorage
    localStorage.removeItem('token');

    // Redirect to login page
    navigate('/CustomerLogin');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top custom-nav">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MyApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/CartPage">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/ViewOrder">
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/ViewOrder">
                About
              </Link>
            </li>
          </ul>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
