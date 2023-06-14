import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../components/Error/Error";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClass from "../pages/Dashboard/MyClass/MyClass";
import MySelectedClass from "../pages/Dashboard/MySeclectedClass/MySelectedClass";
import MyEnrolledClases from "../pages/Dashboard/MyEnrolledClasses/MyEnrolledClases";
import Instructors from "../pages/Instructors/Instructors";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'approved-classes',
          element: <Classes></Classes>
        },
        {
          path: 'instructors',
          element: <Instructors></Instructors>
        }
      ],
    },
    {
      path: 'dashboard',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children: [
        {
          path: 'allusers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'manageclasses',
          element:<AdminRoute> <ManageClass></ManageClass></AdminRoute>
        },
        {
          path: 'addClass',
          element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        {
          path: 'myClass',
          element: <InstructorRoute><MyClass></MyClass></InstructorRoute>
        },
        {
          path: 'myselectedclass',
          element: <MySelectedClass></MySelectedClass>
        },
        {
          path: 'myenrolledclass',
          element: <MyEnrolledClases></MyEnrolledClases>
        },
        {
          path: 'payment/:id',
          element: <Payment></Payment>
        },
        {
          path: "paymenthistory",
          element: <PaymentHistory></PaymentHistory>
        }
      ]
    },
    {
        path: "*",
        element: <Error></Error>
    }
  ]);