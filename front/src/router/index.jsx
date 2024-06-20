import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/side-menu/Main";
import SimpleMenu from "../layouts/simple-menu/Main";
import TopMenu from "../layouts/top-menu/Main";
import DashboardOverview1 from "../views/dashboard-overview-1/Main";
import DashboardOverview4 from "../views/dashboard-overview-4/Main";
import UserList from "../views/users-list/Main";
import Login from "../views/login/Main";
import Register from "../views/register/Main";
import ErrorPage from "../views/error-page/Main";
import UserMenu from "../views/user-menu/Main"

function Router() {
  const routes = [
    {
      path: "/",
      element: <SideMenu />,
      children: [
        {
          path: "/",
          element: <DashboardOverview1 />,
        },
        {
          path: "dashboard-overview-1",
          element: <DashboardOverview1 />,
        },
        {
          path: "user-menu",
          element: <UserMenu />,
        },
        {
          path: "social-media-insights",
          element: <DashboardOverview4 />,
        },
        {
          path: "user-list",
          element: <UserList />,
        },
      ],
    },
    {
      path: "/simple-menu",
      element: <SimpleMenu />,
      children: [
        {
          path: "dashboard-overview-1",
          element: <DashboardOverview1 />,
        },
        {
          path: "user-menu",
          element: <UserMenu />,
        },
        {
          path: "social-media-insights",
          element: <DashboardOverview4 />,
        },
        {
          path: "user-list",
          element: <UserList />,
        },
      ],
    },
    {
      path: "/top-menu",
      element: <TopMenu />,
      children: [
        {
          path: "dashboard-overview-1",
          element: <DashboardOverview1 />,
        },
        {
          path: "user-menu",
          element: <UserMenu />,
        },
        {
          path: "social-media-insights",
          element: <DashboardOverview4 />,
        },
        {
          path: "user-list",
          element: <UserList />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/error-page",
      element: <ErrorPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
