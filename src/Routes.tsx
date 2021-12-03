import React from "react";
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Country from './pages/Country/Country'

const Router = () => (

    <Routes>
        <Route path='/pages/Home' element={<Home/>} />
        <Route path='/pages/Country:name' element={<Country/>}/>
    
    </Routes>
)

export default Router