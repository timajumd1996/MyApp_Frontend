import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {

    const [email, setAdminEmail] = useState('');
    const [phone, setAdminPhone] = useState('');
    const [password, setAdminPassword] = useState('');

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/admin/signin', {
                email: email,
                phone: phone,
                password: password
            });

            console.log("Login successful:", response);
            alert("Login succcessful!");

            navigate("/AddProduct");

        } catch (error) {
            console.log("Login Error:", error);
            alert("Something went error:", error);
        };
    };

    const handleAdminLogin = () => {
        navigate("/AdminSignup")
    }

    return (
        <div className='container'>
            <h2 className='mb-3'><u>Admi Login</u></h2>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setAdminEmail(e.target.value)}
                        placeholder='Enter Admin email or phone number'
                        aria-describedby='customerEmailHelp'
                        required
                    />
                </div>
                <div className="mb-3 row">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputPhone"
                        value={phone}
                        onChange={(e) => setAdminPhone(e.target.value)}
                        placeholder='Enter Phone number'
                        aria-describedby='customerPhoneHelp'
                        required
                    />
                </div>
                <div className="mb-3 row">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        value={password}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        placeholder='Enter password'
                        aria-describedby='customerPasswordHelp'
                        required
                    />
                </div>
                <div className='text-center'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                <div className="grid text-center col-md-1">
                    <div className="submit"><button type="button" onClick={handleAdminLogin} className="btn btn-primary">Sign up</button></div>
                </div>
            </form>
        </div>
    )
}

export default AdminLogin;


