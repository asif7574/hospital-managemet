import React, { useState } from "react";
import { Header } from '../components/shared/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/shared/Footer'
import { LoginHeader } from '../components/shared/LoginHeader'

export const EmployeeLayout = () => {
  const [isEmployeeLogined, setIsEmployeeLogined] = useState(true);
  return (
    <div>
        
        {isEmployeeLogined ? <LoginHeader/>:<Header/>}
        
        <div className="min-h-lvh">
          <Outlet />
        </div>

        <Footer/>
    </div>
  )
}
