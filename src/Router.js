import React from "react";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";


import {
    Signup,
    Signin,
    HomePage,
    Dashboard,
    Appointments,
    Doctors,
    DoctorProfilePage,
    Departments,
    Patients,
    PatientProfilePage,
    Payments
} from './pages'


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/sign-in" element={<Signin />} />
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Appointments" element={<Appointments />} />
                <Route path="/Doctors" element={<Doctors />} />
                <Route path="/DoctorProfilePage/:id" element={<DoctorProfilePage />} />
                <Route path="/Departments" element={<Departments />} />
                <Route path="/Patients" element={<Patients />} />
                <Route path="/PatientProfilePage/:id" element={<PatientProfilePage />} />

                <Route path="/Payments" element={<Payments />} />
            </Routes>
        </BrowserRouter>
    );
}