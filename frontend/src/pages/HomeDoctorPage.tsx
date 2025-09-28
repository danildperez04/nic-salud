import { Users, CalendarDays, ClipboardList } from "lucide-react";
import { Link } from "react-router";

export function HomeDoctorPage() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold">Doctor Dashboard</h1>
      <p className="text-gray-600">
        Welcome back, <span className="font-medium">Dr. John Doe</span>
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-xl p-4 flex items-center space-x-4">
          <Users className="w-10 h-10 text-blue-600" />
          <div>
            <p className="text-gray-500 text-sm">Total Patients</p>
            <p className="text-xl font-semibold">128</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-4 flex items-center space-x-4">
          <CalendarDays className="w-10 h-10 text-green-600" />
          <div>
            <p className="text-gray-500 text-sm">Appointments Today</p>
            <p className="text-xl font-semibold">7</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-4 flex items-center space-x-4">
          <ClipboardList className="w-10 h-10 text-purple-600" />
          <div>
            <p className="text-gray-500 text-sm">Pending Tasks</p>
            <p className="text-xl font-semibold">4</p>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            to="/doctor/patients"
            className="p-4 border rounded-xl text-center hover:bg-gray-100"
          >
            Manage Patients
          </Link>
          <Link
            to="/doctor/appointments"
            className="p-4 border rounded-xl text-center hover:bg-gray-100"
          >
            View Appointments
          </Link>
          <Link
            to="/doctor/history"
            className="p-4 border rounded-xl text-center hover:bg-gray-100"
          >
            Patient History
          </Link>
        </div>
      </div>
    </div>
  );
}
