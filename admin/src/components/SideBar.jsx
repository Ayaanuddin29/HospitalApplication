import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets_admin/assets'
import { DoctorContext } from '../context/DoctorContext'

const SideBar = () => {
    const {aToken}=useContext(AdminContext)
    const {dToken}=useContext(DoctorContext)
  return (
    <div className='min-h-screen bg-white border-r'>
      {
        aToken  && <ul className='text-[#515151] mt-5'>
             <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-3 md:min-w-72 cursor-pointer ${isActive?'bg-[#b1b6f5] border-r-4 border-primary':''}`} to='/admin-dashboard'>
                <img src={assets.home_icon}/>
                <p className='hidden md:block'>DashBoard</p>
             </NavLink>
             <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-3 md:min-w-72 cursor-pointer ${isActive?'bg-[#b1b6f5] border-r-4 border-primary':''}`} to='/allappointments'>
                <img src={assets.appointment_icon}/>
                <p className='hidden md:block'>Appointment</p>
             </NavLink>
             <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-3 md:min-w-72 cursor-pointer ${isActive?'bg-[#b1b6f5] border-r-4 border-primary':''}`} to='/add-doctor'>
                <img src={assets.add_icon}/>
                <p className='hidden md:block'>Add Doctor</p>
             </NavLink>
             <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-3 md:min-w-72 cursor-pointer ${isActive?'bg-[#b1b6f5] border-r-4 border-primary':''}`} to='/doctor-list'>
                <img src={assets.people_icon}/>
                <p className='hidden md:block'>Doctor List</p>
             </NavLink>
        </ul>
      }
       {
        dToken  && <ul className='text-[#515151] mt-5'>
             <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-3 md:min-w-72 cursor-pointer ${isActive?'bg-[#b1b6f5] border-r-4 border-primary':''}`} to='/doctor-dashboard'>
                <img src={assets.home_icon}/>
                <p className='hidden md:block'>DashBoard</p>
             </NavLink>
             <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-3 md:min-w-72 cursor-pointer ${isActive?'bg-[#b1b6f5] border-r-4 border-primary':''}`} to='/doctor-appointments'>
                <img src={assets.appointment_icon}/>
                <p className='hidden md:block'>Appointments</p>
             </NavLink>
             <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-3 md:min-w-72 cursor-pointer ${isActive?'bg-[#b1b6f5] border-r-4 border-primary':''}`} to='/doctor-profile'>
                <img src={assets.people_icon}/>
                <p className='hidden md:block'>Doctor Profile</p>
             </NavLink>
        </ul>
      }
    </div>
  )
}

export default SideBar
