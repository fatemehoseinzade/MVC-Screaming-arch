import { Navigate, RouteObject } from "react-router-dom";
import LoginPage from "./login/login-page";
import { OtpPage } from "./register";
import RegisterPage from "./register/pages/register-page";

export const authRoutes : Array<RouteObject> =  [
    {
      path: "/", 
      element: <Navigate to="/login" replace />,
    },
    {
      path: "login", 
      element: <LoginPage />, 
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
    {
      path: "otp",
      element: <OtpPage />,
    },
]