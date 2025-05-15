import { Check } from 'lucide-react';
import SessionStats from '../components/SessionStats/SessionStats';
import DashboardHeader from '../components/DashboardHeader/DashboardHeader';

function Homepage() {
  const today = new Date();
  const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  const currentDay = 2; // Quarta-feira (índice 3)
  
  return (
    <div className="space-y-6">
      {/* Cabeçalho da Dashboard */}
      <DashboardHeader />

      <div className="grid grid-cols-3 gap-6">
        {/* Sessões do dia atual */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Sessões de quarta</h3>
            <button className="bg-pink-500 text-white px-4 py-1 rounded-full">
              Agenda
            </button>
          </div>
          <p className="text-gray-500 mb-6">1 sessão esta semana</p>

          {/* Calendário semanal */}
          <div className="flex justify-between mb-6">
            {weekdays.map((day, index) => {
              const isActive = index === currentDay;
              return (
                <div 
                  key={index} 
                  className={`flex flex-col items-center ${isActive ? 'text-white' : 'text-gray-700'}`}
                >
                  <div className={`text-sm mb-1 ${isActive ? 'text-white' : 'text-gray-500'}`}>
                    {day}
                  </div>
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full text-lg ${isActive ? 'bg-yellow-400' : ''}`}>
                    {30 + index > 31 ? index - 1 : 30 + index}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detalhes da sessão */}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-700">18:00 às 19:00</p>
                <p className="font-medium">Rita da Silva</p>
              </div>
              <div className="flex items-center space-x-2 text-cyan-500">
                <span>Agendado</span>
                <Check size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* Estatísticas de sessões */}
        <SessionStats title="Sessões hoje" count={1} />
        <SessionStats title="Sessões este mês" count={5} />
      </div>
    </div>
  );
}

export default Homepage;