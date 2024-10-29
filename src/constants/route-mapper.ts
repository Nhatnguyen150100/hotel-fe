const DEFINE_ROUTE = {
  home: "/",
};

const DEFINE_ROUTERS_ADMIN = {
  home: "/admin",
  facilitiesManager: "/admin/facilities-manager",
  roomManager: "/admin/room-manager",
  newRoom: "/admin/room-manager/new-room",
  editRoom: "/admin/room-manager/edit-room/:id",
  loginAdmin: "/login-admin",
};

export { DEFINE_ROUTE, DEFINE_ROUTERS_ADMIN };
