import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import FetchDoc from "../components/alldoc/FetchDoc";
import NewDoc from "../components/alldoc/NewDoc.jsx";
import Hero from "../components/Herosection/Hero.jsx";
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import Otp from "../components/CreateUser/Otp.jsx";
import Login from "../components/CreateUser/Login.jsx";
import Signup from "../components/CreateUser/Signup.jsx";


export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>

        <Route path="" element={<Hero />} />
        <Route path="/otp" element={<PublicRoute><Otp /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/newdoc" element={<ProtectedRoute><NewDoc /></ProtectedRoute>} />
        <Route path="/fetchdoc" element={<ProtectedRoute><FetchDoc /></ProtectedRoute>} />
    </Route>
))