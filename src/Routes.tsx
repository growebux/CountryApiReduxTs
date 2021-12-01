import React from "react";
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Country from './pages/Country/Country'

const Router = () => (

    <Routes>
        <Route path='/pages/home' element={<Home/>} />
        <Route path='/pages/country' element={<Country/>}/>
    
    </Routes>
)

export default Router