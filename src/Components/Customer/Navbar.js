import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {

    const navigate = useNavigate;

    const handleLogout = (e) => {
        e.preventDefault();
    
        const token = localStorage.removeItem('token');

        if(!token){
            alert('You must be Loggedin to Logout!');
            return;
        }

        navigate('/Login');

    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">MyApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/CartPage">Cart:</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link active" to="/VeiwOrder" role="button" data-bs-toggle="dropdown" aria-expanded="false">Orders</Link>
                            </li>
                            <li className="nav-item">
                                <div className="container mt-4">
                                    <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
