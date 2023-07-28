import React from 'react'
import Layout from '../Pages/Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Books from '../Components/Books';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import DashboardLayout from '../Pages/DashboardLayout';
import Login from '../Components/Login/Login';
import ProtectedRoute from './ProtectedRoute';
import ProductProtectedRoute from './ProductProtectedRoute';
import NotFound from '../Pages/NotFound';
import ServiceProtectedRoute from './ServiceProtectedRoute';
import Services from '../Pages/Services';
import AdminDashboard from '../Pages/AdminDashboard';
import UserDashboard from '../Pages/UserDashboard';
import NotAuthorized from '../Pages/NotAuthorized';
import Authorized from './Authorized';
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products/:product_name' element={<ProductProtectedRoute Component={Products} Products={["electronics", "clothing", "books"]} />} />
          <Route path='/services/:service_name' element={<ServiceProtectedRoute Component={Services} Services={["web_development", "graphic_design", "marketing"]} />} />
          {/* <Route path='/products' element={<Products/>}>
          <Route path='/products/books' index element={<Books/>}/>
          <Route path='/products/electronics'  element={<Books/>}/>
          <Route path='/products/clothing'  element={<Books/>}/>
          </Route> */}
          <Route path='/about_us' element={<About />} />
          <Route path='/contact_us' element={<Contact />} />
        </Route>

        <Route path='/dashboard' element={<ProtectedRoute Component={DashboardLayout} />} />
        <Route path='/dashboard/admin' element={<Authorized Component={AdminDashboard} auth={["admin", "owner"]} />} />
        <Route path='/dashboard/user' element={<Authorized Component={UserDashboard} auth={["user", "owner"]} />} />
        {/* <Route path='/dashboard' element={<ProtectedRoute><DashboardLayout/></ProtectedRoute>}>
        </Route> */}
        <Route path='/not_authorized' element={<NotAuthorized />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing