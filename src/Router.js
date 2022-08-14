import React from "react";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";


import {
    Signup,
    Signin
} from './pages'


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/sign-in" element={<Signin />} />
            </Routes>
        </BrowserRouter>
    );
}