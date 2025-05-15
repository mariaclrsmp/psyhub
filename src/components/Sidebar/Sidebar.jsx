import { Home, Calendar, Users } from 'lucide-react';
import './Sidebar.css';
import { NavLink } from 'react-router';

function Sidebar({ currentPage }) {
  return (
    <div className="sidebar w-16 bg-white shadow-md flex flex-col items-center py-6 space-y-8">
      <NavLink className={`p-3 rounded-lg ${currentPage === 'home' ? 'bg-blue-100 text-blue-500' : 'text-gray-500'}`} to="/" end>
        <Home size={24} />
      </NavLink>
      
      <NavLink className={`p-3 rounded-lg ${currentPage === 'calendar' ? 'bg-blue-100 text-blue-500' : 'text-gray-500'}`} to="/agenda" end>
        <Calendar size={24} />
      </NavLink>
      <NavLink className={`p-3 rounded-lg ${currentPage === 'patients' ? 'bg-blue-100 text-blue-500' : 'text-gray-500'}`} to="/pacientes" end>
        <Users size={24} />
      </NavLink>
    </div>
  );
}

export default Sidebar;