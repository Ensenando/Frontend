import { createBrowserRouter } from "react-router-dom";
import { RouteObject } from "react-router-dom";
import { MainLayout } from "../pages/main/layout";

import { AuthLayout } from "../pages/auth/layout";
import { Login } from "../pages/auth/login";
import { Register } from "../pages/auth/register";
import { Root } from "../pages/main/root";

const routes: RouteObject[] = [
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export { router };
