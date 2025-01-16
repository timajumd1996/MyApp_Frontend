import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const CustomerLogin = () => {

    const [email,  setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    const onSubmit = async(e) => {
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:5000/customer/signin',{
                email:email,
                phone:phone,
                password:password
            });
            console.log('Login successful:', response);
            alert('Login successful');

        }catch(error){
            console.log("Login Error", error)
            alert('Login Error:',error);
        };
    };

    const handleCustomerSignup = () => {
        navigate('/CustomerSignup');
    }

  return (
    <div className='container'>
        <h2 className='mb-3'><u>Customer Login</u></h2>
      <form onSubmit={onSubmit}>
        <div>
            <label className='form-label' htmlFor='email'>Email</label>
            <input
            type='email'
            className='form-control'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Customer Email'
            aria-describedby='customerEmailHelp'
            required
            />
        </div>
        <div>
            <label className='form-label' htmlFor='phone'>Phone</label>
            <input
            type='text'
            className='form-control'
            id='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder='Enter Password'
            aria-describedby='customerPhoneHelp'
            required
            />
        </div>
        <div>
            <label className='form-label' htmlFor='Password'>Password</label>
            <input
            type='password'
            className='form-control'
            id='inputPassword'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
            aria-describedby='customerPasswordHelp'
            required
            />
        </div>
       <div className='text-center my-3'>
        <button className='btn btn-primary' type='submit'>Submit</button>
       </div>
       <div className='grid text-center col-md-1'>
        <button className='btn btn-primary' type='button' onClick={handleCustomerSignup}>Signup</button>
       </div>
      </form>
    </div>
  )
}

export default CustomerLogin
