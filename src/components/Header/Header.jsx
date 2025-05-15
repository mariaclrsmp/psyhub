import { Search, Plus } from 'lucide-react';
import './Header.css';

function Header({ openPatientModal, openAppointmentModal }) {
  return (
    <header className="bg-white p-4 flex justify-between items-center shadow-sm">
      <div>
        <h1 className="text-2xl font-bold">
          <span className="text-cyan-500">Psy</span>
          <span className="text-cyan-400">Hub</span>
        </h1>
      </div>

      <div className="flex items-center space-x-4">
        {/* Busca de pacientes */}
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar paciente"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-64"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        {/* Botões de ação */}
        <div className="flex space-x-3">
          <button 
            onClick={openPatientModal}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-50"
          >
            <Plus size={18} />
            <span>cadastrar paciente</span>
          </button>
          <button 
            onClick={openAppointmentModal}
            className="flex items-center space-x-2 px-4 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600"
          >
            <Plus size={18} />
            <span>novo agendamento</span>
          </button>
        </div>

        {/* Avatar do usuário */}
        <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
          M
        </div>
      </div>
    </header>
  );
}

export default Header;