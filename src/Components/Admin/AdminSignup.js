import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminSignup = () => {

  const [name, setAdminName] = useState('');
  const [email, setAdminEmail] = useState('');
  const [phone, setAdminPhone] = useState('');
  const [password, setAdminPassword] = useState('');
  const [confirmPassword, setAdminConfirmPassword] = useState('');

  const navigate = useNavigate();

  const onSubmit = async (e) => {
     e.preventDefault();

     if(password !== confirmPassword){
      alert('Password do not match!');
      return;
     }

     try {
      const response = await axios.post('http://localhost:5000/admin/signup',{
        name, email, phone, password
      });
      console.log('Admin signup successful:', response);
      alert('Admin Signup successful!');
      navigate('/AdminLogin');

     } catch(error){
      console.log('error:',error);
      alert('Admin Signup failed, please try again.');

     }
  }

  return (
    <div className='container my-3'>
      <h2 className='my-3'><u>Admin Create an account</u></h2>
      <form onSubmit={onSubmit}>
        <div className="my-3">
          <label htmlFor="name" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setAdminName(e.target.value)}
            aria-describedby="adminNameHelp"
            placeholder="Enter Username"
            required
          />

        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setAdminEmail(e.target.value)}
            aria-describedby="adminEmailHelp"
            placeholder="Enter Admin Email"
            required
          />

        </div>
        <div className="mb-3">
          <label htmlFor="Phone" className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setAdminPhone(e.target.value)}
            aria-describedby="adminPhoneHelp"
            placeholder="Enter Admin Phone"
            required
          />

        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setAdminPassword(e.target.value)}
            aria-describedby="adminpasswordHelp"
            placeholder="Enter Admin password"
            minLength={5}
            required
          />

        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">Confirm Password</label>
          <input
            type="Confirm password"
            className="form-control"
            id="Confirm password"
            name="Confirm password"
            value={confirmPassword}
            onChange={(e) => setAdminConfirmPassword(e.target.value)}
            aria-describedby="admin Confirm passwordHelp"
            placeholder="Enter Admin Confirm password"
            minLength={5}
            required
          />
        </div>
        <div className='text-center'>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>

      </form>
    </div>
  );
};

export default AdminSignup;


