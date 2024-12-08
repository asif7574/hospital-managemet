import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../config/axiosInstance,js';

export const PatientSearch = () => {
    const [patients,setPatients]=useState([]);

    const fetchPatients=async ()=>{
        const response=await axiosInstance({
            url: "/reception/find-all-patients",
        });
        console.log();
        
    };
     useEffect(()=>{
        fetchPatients();
     },[])
  return (
    <div>PatientSearch</div>
  )
}
