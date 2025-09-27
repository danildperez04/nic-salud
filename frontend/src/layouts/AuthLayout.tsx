import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'

export function AuthLayout() {
  return (
    <div className='min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gray-50'>
      <Outlet />
      <ToastContainer />
    </div>
  )
}
