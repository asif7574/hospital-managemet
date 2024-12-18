import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/shared/Home";
import { Signup } from "../pages/shared/Signup";
import { Login } from "../pages/shared/Login";

import { Doctor } from "../pages/employee/doctor";
import { EmployeeLayout } from "../layout/EmployeeLayout";
import { ErrorPage } from "../pages/shared/ErrorPage";
import { PatientSearch } from "../pages/shared/PatientSearch";
import { ProfilePage } from "../pages/shared/ProfilePage";
import { CreatePatient } from "../pages/other/CreatePatient";
import { UserSearch } from "../pages/shared/UserSearch";
import { Pharmacy } from "../pages/employee/Pharmacy";

import { PatientDetails } from "../pages/shared/PatientDetails";
import { OpDetails } from "../pages/other/OpDetails";
import { ApDetails } from "../pages/other/ApDetails";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { LandingPage } from "../pages/shared/LandingPage";
import { Admin } from "../pages/employee/Admin";
import { Reception } from "../pages/employee/Reception";



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
          element: <ProtectedRoutes />,
          path: "",
          children: [
            {
              path: "doctor",
              element: <Doctor/>,
            },
            {
              path: "admin",
              element: <Admin/>,
            },
            {
              path: "reception",
              element: <Reception/>,
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
            {
              path: "op-details/:id",
              element: <OpDetails/>,
            },
            {
              path: "ap-details/:id",
              element: <ApDetails/>,
            },
            {
              path: "home",
              element: <LandingPage/>,
            },
          ]
        },
        
        
      ]
    }
  ]); 