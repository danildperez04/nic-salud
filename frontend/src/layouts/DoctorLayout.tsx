import { DashboardLayout } from './DashboardLayout';


export function DoctorLayout() {
  const menu = [
    { label: 'Pacientes', path: '/doctor/patients' },
    { label: 'Citas', path: '/doctor/appointments' }
  ]

  return <DashboardLayout title='Doctor Dashboard' menu={menu} />;
}