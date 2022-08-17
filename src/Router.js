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
    Appointments
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
            </Routes>
        </BrowserRouter>
    );
}