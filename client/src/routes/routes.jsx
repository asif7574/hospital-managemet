import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/shared/Home";
import { Signup } from "../pages/shared/Signup";
import { Login } from "../pages/shared/Login";
import { Lab } from "../pages/employee/Lab";
import { Doctor } from "../pages/employee/doctor";
import { EmployeeLayout } from "../layout/EmployeeLayout";
import { ErrorPage } from "../pages/shared/ErrorPage";
import { PatientSearch } from "../pages/shared/PatientSearch";
import { ProfilePage } from "../pages/shared/ProfilePage";
import { CreatePatient } from "../pages/other/CreatePatient";
import { UserSearch } from "../pages/shared/UserSearch";
import { Pharmacy } from "../pages/employee/Pharmacy";

import { PatientDetails } from "../pages/shared/PatientDetails";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <EmployeeLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "",
          element: <Home/>,
        },
        {
          path: "signup",
          element: <Signup/>,
        },
        {
          path: "login",
          element: <Login/>,
        },
        {
          path: "profile",
          element: <ProfilePage/>,
        },
        {
          path: "lab",
          element: <Lab/>,
        },
        {
          path: "doctor",
          element: <Doctor/>,
        },
        {
          path: "create-patient",
          element: <CreatePatient/>,
        },
        {
          path: "user",
          element: <UserSearch/>,
        },
        {
          path: "pharmacy",
          element: <Pharmacy/>,
        },
        {
          path: "patient",
          element: <PatientSearch/>,
        },
        {
          path: "patientDetails/:id",
          element: <PatientDetails/>,
        },
        
      ]
    }
  ]); 