import { UserCircle } from 'lucide-react';
import { Link, Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
interface DashboardLayoutProps {
  title: string;
  menu: { path: string; label: string }[];
  schema?: "admin" | "doctor"
}

export function DashboardLayout({ title, menu, schema }: DashboardLayoutProps) {
  const colorSchema = schema === 'admin' ?
    {
      background: 'bg-slate-700',
      aside: 'bg-slate-900',
      text: 'text-white',
      header: 'bg-slate-900',
      hover: 'bg-slate-100'
    } :
    {
      background: 'bg-gray-100',
      aside: 'bg-white',
      header: 'bg-white',
      text: 'text-blue-600',
      hover: 'bg-gray-100'
    }

  return (
    <div className={`flex h-screen ${colorSchema.background}`}>
      {/* Sidebar */}
      <aside className={`w-64 ${colorSchema.aside} shadow-lg flex flex-col`}>
        <div className={`p-6 text-2xl font-bold border-b ${colorSchema.text}`}>{title}</div>
        <nav className="flex-1 p-4 space-y-2">
          {
            menu.map((item) => (
              <Link
                to={item.path}
                className={`block p-2 rounded ${colorSchema.text} hover:${colorSchema.hover}`}
              >
                {item.label}
              </Link>
            ))
          }
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className={`h-16 ${colorSchema.header} shadow flex items-center justify-between px-6`}>
          <h1 className={`text-xl font-semibold ${colorSchema.text}`}>{title}</h1>
          <div className="flex items-center space-x-3">
            <span className="text-gray-700 font-medium">Dr. Juan Pérez</span>
            <UserCircle className={`w-8 h-8 ${colorSchema.text}`} />
          </div>
        </header>

        {/* Content */}
        <main className="h-screen flex justify-center items-center overflow-y-auto p-6">
          <Outlet />
          <ToastContainer />
        </main>
      </div>
    </div>
  )
}
