import React, { useContext } from 'react'
import Login from './pages/Login'
import { Routes,Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointment from './pages/Admin/AllAppointment';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorList from './pages/Admin/DoctorList';
import { DoctorContext } from './context/DoctorContext';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorAppointment from './pages/Doctor/DoctorAppointment';
import DoctorProfile from './pages/Doctor/DoctorProfile';
import {Link} from 'react-router-dom'
const App = () => {
  const {aToken}=useContext(AdminContext)
  const {dToken}=useContext(DoctorContext)
  return aToken || dToken?(
    <div className='bg-[#fffaff99]'>
<ToastContainer/>
<Navbar/>
<div className='flex items-start'>
  <SideBar/>
  <Routes>{/*Admin Route*/}
    <Route path='/admin-dashboard' element={<Dashboard/>} />
    <Route path='/allappointments' element={<AllAppointment/>} />
    <Route path='/add-doctor' element={<AddDoctor/>} />
    <Route path='/doctor-list' element={<DoctorList/>} />
    {/* Doctor Route*/}
    <Route path='/doctor-dashboard' element={<DoctorDashboard/>} />
    <Route path='/doctor-appointments' element={<DoctorAppointment/>} />
    <Route path='/doctor-profile' element={<DoctorProfile/>} />
  </Routes>
</div>
    </div>
  ):(
    <>
         <Login/>
         <ToastContainer/>
    </>
  )
}

export default App
