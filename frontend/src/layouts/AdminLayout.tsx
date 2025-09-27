import { DashboardLayout } from "./DashboardLayout";

export function AdminLayout() {
  const menu = [
    { label: 'Doctores', path: '/admin/doctors' },
    { label: 'Configuracion', path: '/admin/config' }
  ]
  return <DashboardLayout title="Admin Dashboard" menu={menu} schema='admin' />
}
