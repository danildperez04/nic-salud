import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'

export function DashboardLayout() {
  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  )
}
