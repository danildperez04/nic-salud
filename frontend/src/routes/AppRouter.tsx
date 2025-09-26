import { BrowserRouter, Route, Routes } from 'react-router'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { AppLayout } from '../layouts/AppLayout'
import { AuthLayout } from '../layouts/AuthLayout'
import { RegisterPage } from '../pages/RegisterPage'
import { RegisterPatientPage } from '../pages/patient/RegisterPatientPage'
import { PatientProfilePage } from '../pages/patient/PatientProfilePage'
import { AppointmentsPage } from '../pages/AppointmentsPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='' element={<HomePage />} index />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path='login' element={<LoginPage />} />
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