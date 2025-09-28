import { DashboardLayout } from './DashboardLayout';

// interface DoctorLayoutProps {
//   username?: string;
// }

export function DoctorLayout() {
  const menu = [
    { label: 'Pacientes', path: '/doctor/patients' },
    { label: 'Citas', path: '/doctor/appointments' }
  ]

  return <DashboardLayout title='Doctor Dashboard' menu={menu} />;
}