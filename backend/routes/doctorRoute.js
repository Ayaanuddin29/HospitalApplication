import express from 'express';
import { appointmentCancel, appointmentComplete, appointmentsDoctor, doctorDashboard, doctorList, doctorProfile, loginDoctor, updateDoctorProfile } from '../controllers/doctorController.js';
import authDoctor from '../middlewares/authDoctor.js';

const doctorRoute=express.Router()

doctorRoute.get('/list',doctorList)
doctorRoute.post('/login',loginDoctor)
doctorRoute.get('/appointments',authDoctor,appointmentsDoctor)
doctorRoute.post('/appointment-completed',authDoctor,appointmentComplete)
doctorRoute.post('/appointment-cancel',authDoctor,appointmentCancel)
doctorRoute.get('/dashboard',authDoctor,doctorDashboard)
doctorRoute.get('/profile',authDoctor,doctorProfile)
doctorRoute.post('/update-profile',authDoctor,updateDoctorProfile)
export default doctorRoute