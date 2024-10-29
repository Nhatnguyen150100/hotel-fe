import { createBrowserRouter } from "react-router-dom";
import TheLayout from "../components/layout/TheLayout";
import TheLandingPage from "../modules/landing-page/TheLandingPage";
import ErrorPage from "../pages/not-found";
import AdminPage from "../modules/admin/AdminPage";
import TheLayoutAdmin from "../modules/admin/layout/TheLayoutAdmin";
import { DEFINE_ROUTE, DEFINE_ROUTERS_ADMIN } from "../constants/route-mapper";
import LoginAdmin from "../modules/admin/auth/LoginAdmin";
import FacilitiesManager from "../modules/admin/menu/facilities/FacilitiesManager";
import RoomManager from "../modules/admin/menu/room/RoomManager";
import CreateRoom from "../modules/admin/menu/room/CreateRoom";
import EditRoom from "../modules/admin/menu/room/EditRoom";

const router = createBrowserRouter([
  {
    path: DEFINE_ROUTE.home,
    errorElement: <ErrorPage />,
    Component: TheLayout,
    children: [
      {
        index: true,
        element: <TheLandingPage />,
      },
    ],
  },
  {
    path: DEFINE_ROUTERS_ADMIN.home,
    errorElement: <ErrorPage />,
    Component: TheLayoutAdmin,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
      {
        path: DEFINE_ROUTERS_ADMIN.roomManager,
        element: <RoomManager />,
      },
      {
        path: DEFINE_ROUTERS_ADMIN.editRoom,
        element: <EditRoom />,
      },
      {
        path: DEFINE_ROUTERS_ADMIN.newRoom,
        element: <CreateRoom />,
      },
      {
        path: DEFINE_ROUTERS_ADMIN.facilitiesManager,
        element: <FacilitiesManager />,
      },
    ],
  },
  {
    path: DEFINE_ROUTERS_ADMIN.loginAdmin,
    element: <LoginAdmin />,
  },
]);

export default router;
