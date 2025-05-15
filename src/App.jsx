import { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import PatientModal from './pages/PatientModal';
import AppointmentModal from './pages/AppointmentModal';
import { Outlet } from 'react-router';

// Componente principal do aplicativo
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showPatientModal, setShowPatientModal] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  
  // Funções para controlar modais
  const openPatientModal = () => setShowPatientModal(true);
  const closePatientModal = () => setShowPatientModal(false);
  const openAppointmentModal = () => setShowAppointmentModal(true);
  const closeAppointmentModal = () => setShowAppointmentModal(false);

  // Função para navegar entre páginas
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar para navegação */}
      <Sidebar currentPage={currentPage} navigateTo={navigateTo} />
      
      <div className="flex-1 overflow-y-auto">
        {/* Header com busca e botões de ação */}
        <Header 
          openPatientModal={openPatientModal}
          openAppointmentModal={openAppointmentModal}
        />

        {/* Conteúdo principal - páginas */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>

      {/* Modais */}
      {showPatientModal && <PatientModal onClose={closePatientModal} />}
      {showAppointmentModal && <AppointmentModal onClose={closeAppointmentModal} />}
    </div>
  );
}

export default App;