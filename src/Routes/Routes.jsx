import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Layout/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AddClasses from "../Pages/Dashboard/InstructorDashboard/AddClasses/AddClasses";
import Classes from "../Pages/Classes/Classes";
import Instructor from "../Pages/Instructor/Instructor";
import ManageUsers from "../Pages/Dashboard/AdminDashBoard/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/Dashboard/AdminDashBoard/ManageClasses/ManageClasses";
import MySelectedClasses from "../Pages/Dashboard/StudentDashBoard/MySelectedClasses";

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
      {
        path: "/selected-classes",
        element: <MySelectedClasses></MySelectedClasses>,
      },
    ],
  },
]);

export default router;
