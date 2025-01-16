import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminSingup from './Components/Admin/AdminSignup';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminAddProduct from './Components/Admin/AdminAddProduct';
import CustomerSignup from './Components/Customer/CustomerSignup';
import CustomerLogin from './Components/Customer/CustomerLogin';
import UpdateUserDetails from './Components/Customer/UpdateUserDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/AdminSignup' element={< AdminSingup />} />
         <Route exact path='/AdminLogin' element={< AdminLogin />} />
         <Route exact path='/AdminAddProduct' element={< AdminAddProduct />} />
         <Route exact path='/CustomerSignup' element={< CustomerSignup />} />
         <Route exact path='/CustomerLogin' element={< CustomerLogin />} />
         <Route exact path='/UpdateUserDetails' element={< UpdateUserDetails />} />
      </Routes>
    </Router>  
    
  )
}

export default App;

