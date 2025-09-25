import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

export function AppLayout() {
  return (<>
    <Outlet />
    <ToastContainer />
  </>
  )
}
