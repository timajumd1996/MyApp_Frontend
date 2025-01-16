import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const CustomerSignup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // const navigate = useNavigate;

    const onSubmit = async (e) => {
        e.preventDefault();

        if(password !== confirmPassword){
            alert('Password does not match');
            return;
        }
        try {
            if(password === confirmPassword){
                const response = await axios.post('http://localhost:5000/customer/signup',{
                    name, email, phone, password, confirmPassword

                });

                console.log('Signup Succesful:',response);
                alert('Signup Successful!');

            }else {
                console.log('Password mismatch!');
                alert('Password mismatch!');
            }

        } catch(error) {
            console.log('Signup Error:', error);

        }

    }

    return (
        <div className='container'>
            <h1 className='my-3'><u>Create an Account</u></h1>
            <form onSubmit={onSubmit}>
                <div className="my-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        aria-describedby="customerNameHelp"
                        placeholder="Enter username"
                        required
                    />
                </div>
                <div className="my-3">
                    <label htmlFor="username" className="form-label">Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        required
                    />
                </div>
                <div className="my-3">
                    <label htmlFor="username" className="form-label">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        aria-describedby="customerPhoneHelp"
                        placeholder="Enter phone"
                        required
                    />
                </div>
                <div className="my-3">
                    <label htmlFor="username" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        aria-describedby="customerPasswordHelp"
                        placeholder="Set Password"
                        minLength={5}
                        required
                    />
                </div>
                <div className="my-3">
                    <label htmlFor="username" className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="conPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        aria-describedby="customerNameHelp"
                        placeholder="Confirm Password"
                        minLength={5}
                        required
                    />
                </div>
                <div className='grid text-center'>
                   <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>

        </div>
    )
}

export default CustomerSignup;
