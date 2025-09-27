import { AppLayout, AuthLayout } from '@/layouts'
import { ActivatePage, AppointmentsPage, HomePage, LoginPage, NotFoundPage, PatientProfilePage, RegisterPage, RegisterPatientPage } from '@/pages'
import { BrowserRouter, Route, Routes } from 'react-router'


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='' element={<HomePage />} index />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='activate' element={<ActivatePage />} />
          <Route path='register'>
            <Route path='' element={<RegisterPage />} />
            <Route path='patient' element={<RegisterPatientPage />} />
          </Route>
          <Route path='forgot-password' element={<h1>Forgot Password</h1>} />
          <Route path='appointments' element={<AppointmentsPage />} />
        </Route>
        <Route path=':username'>
          <Route path='profile' element={<PatientProfilePage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}