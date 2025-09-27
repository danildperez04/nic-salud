import { AppLayout, AuthLayout } from '@/layouts'
import { AdminLayout } from '@/layouts/AdminLayout'
import { DoctorLayout } from '@/layouts/DoctorLayout'
import { ActivatePage, AppointmentsPage, HomePage, LoginPage, NotFoundPage, PatientProfilePage, RegisterUserPage, CreatePatientPage } from '@/pages'
import { BrowserRouter, Route, Routes } from 'react-router'


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* App */}
        <Route element={<AppLayout />}>
          <Route path='' element={<HomePage />} index />
        </Route>
        {/* Auth */}
        <Route element={<AuthLayout />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='register'>
            <Route path='' element={<RegisterUserPage />} />
            <Route path='activate' element={<ActivatePage />} />
          </Route>
          {/* <Route path='forgot-password' element={<h1>Forgot Password</h1>} /> */}
        </Route>
        {/* Admin */}
        <Route path='admin' element={<AdminLayout />}>
        </Route>
        {/* Doctor */}
        <Route path='doctor' element={<DoctorLayout />}>
          <Route path='patients'>
            <Route path='add' element={<CreatePatientPage />} />
            {/* <Route path='update' /> */}
          </Route>
          <Route path='appointments' element={<AppointmentsPage />} />
        </Route>
        {/* Patient */}
        <Route path=':username'>
          <Route path='profile' element={<PatientProfilePage />} />
        </Route>
        {/* Not found */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}