import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { Link } from "react-router-dom";

export const PatientSearch = () => {
  const [patients, isLoading, error] = useFetch("/reception/find-all-patients");
  const [val,setVal]=useState('')
console.log("patients==",patients);
console.log("val==",val);

const handleSearch=(value)=>{
setVal(value);
};

  
  return (
    <>
    <div>
      <textarea
  placeholder="Search patient"
  className="text-lg textarea textarea-bordered textarea-xs w-full max-w-md max-h-1" 
  onChange={(e) => handleSearch(e.target.value)}></textarea>
      </div>
    <div className="overflow-x-auto">
      
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Patient id</th>
        <th>Name</th>
        <th>Adress</th>
        <th>Age</th>
        <th>Mobile No.</th>
      </tr>
    </thead>
    <tbody>
     {patients?.filter((item)=>{
      return item.name.toLowerCase().includes(val.toLowerCase())
     }).map((item)=>(
      
      // <Link to={`/patientDetails/${item?._id}`}><td>{item.name}</td></Link>
      <tr key={item._id}>
        <th>{item.patientID}</th>
        <Link to={`/patientDetails/${item?._id}`}><td>{item.name}</td></Link>
        <td>{item.address}</td>
        <td>{item.age}</td>
        <td>{item.mobile}</td>
      </tr>
        
      ))}
    </tbody>
  </table>
</div>
</>
  )
}
