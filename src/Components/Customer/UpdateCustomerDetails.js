import axios from 'axios';
import React, { useState } from 'react';

const UpdateCusterDetails = () => {

    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipCode] = useState('');
    const [landmark, setLandmark] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        if (!token) {
            alert('You must be logged in to update your address.');
            return;
        }

        try {
            const response = await axios.get('http://localhost:5000/customer/updateUserDetails', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.data;

        } catch (error) {
            console.error("Error fetching user details", error);
            return null;
        }
    };

    return (
        <div className='container'>
            <h1 className='my-3'><u>Update Address:</u></h1>
            <form onSubmit={onSubmit}>
                <div className='my-3'>
                    <label>State:</label>
                    <input
                        className="form-control"
                        name='state'
                        type='text'
                        id='state'
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        aria-describedby="customerStateHelp"
                        required
                    />
                </div>
                <div className='my-3'>
                    <label>City:</label>
                    <input
                        className='form-control'
                        name='city'
                        id='city'

                        type='text'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        aria-describedby='customerCityHelp'
                    />
                </div>
                <div className='my-3'>
                    <label>Zip Code:</label>
                    <input
                        className='form-control'
                        name='zipcode'
                        id='zipcode'
                        type='text'
                        value={zipcode}
                        onChange={(e) => setZipCode(e.target.value)}
                        aria-describedby='customerZipCodeHelp'
                        required
                    />
                </div>
                <div className='my-3'>
                    <label>Landmark:</label>
                    <input
                        className='form-control'
                        name='landmark'
                        id='landmark'
                        type='text'
                        value={landmark}
                        onChange={(e) => setLandmark(e.target.value)}
                        aria-describedby='customer'
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

export default UpdateCusterDetails;
