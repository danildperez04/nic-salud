import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'

export function AuthLayout() {
  return (
    <div>
      <Outlet />
      <ToastContainer />
    </div>
  )
}
