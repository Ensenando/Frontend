import { createBrowserRouter } from "react-router-dom";
import { RouteObject } from "react-router-dom";
import { MainLayout } from "../pages/main/layout";

import { AuthLayout } from "../pages/auth/layout";
import { PlatformLayout } from "../pages/platform/layout";
import { ProfileLayout } from "../pages/profile/layout";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { Root } from "../pages/main/root";

import { Lection } from "../pages/platform/Lection";
import { MenuActivity } from "../pages/platform/Lection/MenuActivity";
import { AC1 } from "../pages/platform/Lection/AC1";
import { AC2 } from "../pages/platform/Lection/AC2";
import { AC3 } from "../pages/platform/Lection/AC3";

import { Inicio } from "../pages/profile/Inicio";
import { Personalizacion } from "../pages/profile/Personalizacion";

import { Notificaciones } from "../pages/profile/Notificaciones";
import { Alumnos } from "../pages/profile/Alumnos";

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
        path: "Login",
        element: <Login />,
      },
      {
        path: "Register",
        element: <Register />,
      },
    ],
  },
  {
    path: "Platform",
    element: <PlatformLayout />,
    children: [
      {
        path: "Lection/:lectionId/Menu",
        element: <MenuActivity />,
      },
      {
        path: "Lection/:lectionId/AC1",
        element: <AC1 />,
      },
      {
        path: "Lection/:lectionId/AC2",
        element: <AC2 />,
      },
      {
        path: "Lection/:lectionId/AC3",
        element: <AC3 />,
      },
    ],
  },
  {
    path: "Perfil",
    element: <ProfileLayout />,
    children: [
      {
        path: "Inicio",
        element: <Inicio/>
      },
      {
        path: "Personalizacion",
        element: <Personalizacion/>
      },
      {
        path: "Notificaciones",
        element: <Notificaciones/>
      },
      {
        path: "Alumnos",
        element: <Alumnos/>
      }
    ]
  }
];

const router = createBrowserRouter(routes);

export { router };
