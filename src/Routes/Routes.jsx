import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Layout/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import AddClasses from "../Pages/Dashboard/InstructorDashboard/AddClasses/AddClasses";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import Classes from "../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import Instructor from "../Pages/Instructor/Instructor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/manage-users",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "/add-class",
        element: <AddClasses></AddClasses>,
      },
      {
        path: "/manage-classes",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/instructors",
        element: <Instructor></Instructor>,
      },
    ],
  },
]);

export default router;
