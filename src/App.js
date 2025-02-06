import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminSingup from './Components/Admin/AdminSignup';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminAddProduct from './Components/Admin/AdminAddProduct';
import CustomerSignup from './Components/Customer/CustomerSignup';
import CustomerLogin from './Components/Customer/CustomerLogin';
import UpdateCustomerDetails from './Components/Customer/UpdateCustomerDetails';
import Home from './Components/Pages/Home';
import CottonSaree from  './Components/Basics/CottonSaree';
import OfficeWear from './Components/Basics/OfficeWear';
import ReadytoWear from './Components/Basics/ReadytoWear';
import PartyWear from './Components/Basics/PartyWear';
import OrganzaSaree from './Components/Basics/OrganzaSaree';
import About from './Components/Basics/About';
import Cart from './Components/Customer/Cart';
import Navbar from './Components/Customer/Navbar';



const App = () => {
  return (

    <Router>
       <Navbar /> 
      <Routes>
        <Route exact path='/'element={< Home />} />  
        <Route exact path='/About'element={< About />} />  
        <Route exact path='/Cart' element={< Cart />} />
        <Route exact path="/CottonSaree" element={<CottonSaree />} />
        <Route exact path="/OfficeWear" element={<OfficeWear />} />
        <Route exact path="/ReadytoWear" element={<ReadytoWear />} />
        <Route exact path="/PartyWear" element={<PartyWear />} /> 
        <Route exact path="/OrganzaSaree" element={<OrganzaSaree/>} /> 
        <Route exact path='/AdminSignup' element={< AdminSingup />} />
        <Route exact path='/AdminLogin' element={< AdminLogin />} />
        <Route exact path='/AdminAddProduct' element={< AdminAddProduct />} />
        <Route exact path='/CustomerSignup' element={< CustomerSignup />} />
        <Route exact path='/CustomerLogin' element={< CustomerLogin />} />
        <Route exact path='/UpdateCustomerDetails' element={< UpdateCustomerDetails />} />
      </Routes>
    </Router>


  )
}

export default App;

