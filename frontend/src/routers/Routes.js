import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import FetchDoc from "../components/alldoc/FetchDoc";
import NewDoc from "../components/alldoc/NewDoc.jsx";
import Hero from "../components/Herosection/Hero.jsx";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>

        <Route path="" element={<Hero/>}/>
        <Route path="/dashboard" element={<Home/>}/>
        <Route path="/newdoc" element={<NewDoc/>}/>
        <Route path="/fetchdoc" element={<FetchDoc/>}/>
    </Route>
))