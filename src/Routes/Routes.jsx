import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Layout/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import AddClasses from "../Pages/Dashboard/InstructorDashboard/AddClasses/AddClasses";

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
    ],
  },
]);

export default router;
