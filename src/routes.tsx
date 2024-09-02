import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/main-layout";
import AuthLayout from "./layouts/auth-layout";
import DashboardPage from "./modules/dashboard/dashboard-page";
import { authRoutes } from "./modules/auth/auth-routes";

export const router = createBrowserRouter([
      {
        path: "/",
        element: <AuthLayout />,
        children:authRoutes,
      },
      {
        path: "/panel",
        element: <MainLayout />,
        children: [
          {
            index:true,
            element: <DashboardPage />,
          },
        ],
      },
]);