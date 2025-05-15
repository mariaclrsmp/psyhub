import React from 'react';
import './SidebarItem.css'

const SidebarItem = ({ icon, active }) => {
  return (
    <div className={`flex flex-col items-center justify-center w-full py-4 text-xs ${active ? 'text-purple-800' : 'text-gray-400'}`}>
      <div className="sidebar-item">{icon}</div>
    </div>
  )
}

export default SidebarItem