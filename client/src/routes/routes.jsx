import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/shared/Home";
import { Signup } from "../pages/shared/Signup";
import { Login } from "../pages/shared/Login";
import { Lab } from "../pages/employee/Lab";
import { Doctor } from "../pages/employee/doctor";
import { EmployeeLayout } from "../layout/EmployeeLayout";
import { ErrorPage } from "../pages/shared/ErrorPage";
import { PatientSearch } from "../pages/shared/PatientSearch";


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
          path: "lab",
          element: <Lab/>,
        },
        {
          path: "doctor",
          element: <Doctor/>,
        },
        {
          path: "patient",
          element: <PatientSearch/>,
        },
      ]
    }
  ]); 