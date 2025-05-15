import { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Clock, Settings, Edit, Save, Lock, CreditCard, Shield, Bell } from 'lucide-react';

export default function UserProfilePage() {
  // Mock dados do usuário
  const [userData, setUserData] = useState({
    name: 'Dr. Amanda Silva',
    email: 'amanda.silva@psyhub.com',
    phone: '(11) 98765-4321',
    address: 'Rua Augusta, 1500, Sala 302 - São Paulo/SP',
    specialty: 'Psicologia Clínica',
    license: 'CRP 06/12345',
    workingHours: [
      { day: 'Segunda', start: '09:00', end: '18:00' },
      { day: 'Terça', start: '09:00', end: '18:00' },
      { day: 'Quarta', start: '14:00', end: '20:00' },
      { day: 'Quinta', start: '09:00', end: '18:00' },
      { day: 'Sexta', start: '09:00', end: '16:00' }
    ],
    sessionDuration: 50,
    planType: 'Premium',
    planExpiration: '2025-12-31'
  });

  const [editing, setEditing] = useState({
    personalInfo: false,
    professionalInfo: false,
    workingHours: false
  });

  const [tempUserData, setTempUserData] = useState({ ...userData });

  const handleEditToggle = (section) => {
    // Se estiver ativando a edição, guarda os dados atuais em tempUserData
    if (!editing[section]) {
      setTempUserData({ ...userData });
    }
    // Se estiver desativando a edição, restaura os dados originais
    else {
      setTempUserData({ ...userData });
    }
    
    setEditing({
      ...editing,
      [section]: !editing[section]
    });
  };

  const handleSave = (section) => {
    setUserData({
      ...userData,
      ...tempUserData
    });
    
    setEditing({
      ...editing,
      [section]: false
    });
    
    // Em um aplicativo real, aqui você enviaria os dados para uma API
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempUserData({
      ...tempUserData,
      [name]: value
    });
  };

  const handleWorkingHoursChange = (index, field, value) => {
    const updatedHours = [...tempUserData.workingHours];
    updatedHours[index] = {
      ...updatedHours[index],
      [field]: value
    };
    
    setTempUserData({
      ...tempUserData,
      workingHours: updatedHours
    });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Meu Perfil</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Coluna da esquerda - Informações pessoais e profissionais */}
        <div className="md:col-span-2 space-y-6">
          {/* Informações pessoais */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold flex items-center">
                <User size={20} className="mr-2 text-cyan-600" />
                Informações Pessoais
              </h2>
              <button 
                onClick={() => handleEditToggle('personalInfo')}
                className="text-cyan-600 hover:text-cyan-800"
              >
                {editing.personalInfo ? (
                  <Save size={18} />
                ) : (
                  <Edit size={18} />
                )}
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-500 mb-1">Nome completo</label>
                {editing.personalInfo ? (
                  <input
                    type="text"
                    name="name"
                    value={tempUserData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  <p className="font-medium">{userData.name}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm text-gray-500 mb-1">E-mail</label>
                {editing.personalInfo ? (
                  <input
                    type="email"
                    name="email"
                    value={tempUserData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  <div className="flex items-center">
                    <Mail size={16} className="text-gray-400 mr-2" />
                    <p className="font-medium">{userData.email}</p>
                  </div>
                )}
              </div>
              
              <div>
                <label className="block text-sm text-gray-500 mb-1">Telefone</label>
                {editing.personalInfo ? (
                  <input
                    type="tel"
                    name="phone"
                    value={tempUserData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  <div className="flex items-center">
                    <Phone size={16} className="text-gray-400 mr-2" />
                    <p className="font-medium">{userData.phone}</p>
                  </div>
                )}
              </div>
              
              <div>
                <label className="block text-sm text-gray-500 mb-1">Endereço</label>
                {editing.personalInfo ? (
                  <input
                    type="text"
                    name="address"
                    value={tempUserData.address}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  <div className="flex items-center">
                    <MapPin size={16} className="text-gray-400 mr-2" />
                    <p className="font-medium">{userData.address}</p>
                  </div>
                )}
              </div>
            </div>
            
            {editing.personalInfo && (
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => handleSave('personalInfo')}
                  className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600"
                >
                  Salvar alterações
                </button>
              </div>
            )}
          </div>

          {/* Informações profissionais */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold flex items-center">
                <Settings size={20} className="mr-2 text-cyan-600" />
                Informações Profissionais
              </h2>
              <button 
                onClick={() => handleEditToggle('professionalInfo')}
                className="text-cyan-600 hover:text-cyan-800"
              >
                {editing.professionalInfo ? (
                  <Save size={18} />
                ) : (
                  <Edit size={18} />
                )}
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-500 mb-1">Especialidade</label>
                {editing.professionalInfo ? (
                  <input
                    type="text"
                    name="specialty"
                    value={tempUserData.specialty}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  <p className="font-medium">{userData.specialty}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm text-gray-500 mb-1">Registro profissional</label>
                {editing.professionalInfo ? (
                  <input
                    type="text"
                    name="license"
                    value={tempUserData.license}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  <p className="font-medium">{userData.license}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm text-gray-500 mb-1">Duração padrão da sessão (minutos)</label>
                {editing.professionalInfo ? (
                  <input
                    type="number"
                    name="sessionDuration"
                    value={tempUserData.sessionDuration}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    min="15"
                    step="5"
                  />
                ) : (
                  <div className="flex items-center">
                    <Clock size={16} className="text-gray-400 mr-2" />
                    <p className="font-medium">{userData.sessionDuration} minutos</p>
                  </div>
                )}
              </div>
            </div>
            
            {editing.professionalInfo && (
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => handleSave('professionalInfo')}
                  className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600"
                >
                  Salvar alterações
                </button>
              </div>
            )}
          </div>

          {/* Horários de atendimento */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold flex items-center">
                <Calendar size={20} className="mr-2 text-cyan-600" />
                Horários de Atendimento
              </h2>
              <button 
                onClick={() => handleEditToggle('workingHours')}
                className="text-cyan-600 hover:text-cyan-800"
              >
                {editing.workingHours ? (
                  <Save size={18} />
                ) : (
                  <Edit size={18} />
                )}
              </button>
            </div>
            
            <div className="space-y-3">
              {(editing.workingHours ? tempUserData : userData).workingHours.map((schedule, index) => (
                <div key={index} className="grid grid-cols-3 gap-2 border-b pb-2 last:border-0">
                  <div className="font-medium">{schedule.day}</div>
                  
                  {editing.workingHours ? (
                    <>
                      <div>
                        <input
                          type="time"
                          value={schedule.start}
                          onChange={(e) => handleWorkingHoursChange(index, 'start', e.target.value)}
                          className="w-full p-1 border rounded text-sm"
                        />
                      </div>
                      <div>
                        <input
                          type="time"
                          value={schedule.end}
                          onChange={(e) => handleWorkingHoursChange(index, 'end', e.target.value)}
                          className="w-full p-1 border rounded text-sm"
                        />
                      </div>
                    </>
                  ) : (
                    <div className="col-span-2 text-gray-700">
                      {schedule.start} - {schedule.end}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {editing.workingHours && (
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => handleSave('workingHours')}
                  className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600"
                >
                  Salvar horários
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Coluna da direita - Assinatura e configurações */}
        <div className="space-y-6">
          {/* Foto de perfil */}
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center overflow-hidden">
              <User size={64} className="text-gray-400" />
            </div>
            <h3 className="font-bold text-lg">{userData.name}</h3>
            <p className="text-gray-600">{userData.specialty}</p>
            <button className="mt-4 px-4 py-2 border border-cyan-500 text-cyan-500 rounded-md hover:bg-cyan-50">
              Alterar foto
            </button>
          </div>
          
          {/* Assinatura */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <CreditCard size={20} className="mr-2 text-cyan-600" />
              Minha Assinatura
            </h2>
            
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-4 text-white mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-lg">{userData.planType}</span>
                <span className="bg-white text-cyan-600 px-2 py-1 rounded-full text-xs font-bold">Ativo</span>
              </div>
              <p className="text-sm">Expira em: {new Date(userData.planExpiration).toLocaleDateString('pt-BR')}</p>
            </div>
            
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 flex items-center justify-center">
                <CreditCard size={16} className="mr-2" />
                Gerenciar assinatura
              </button>
            </div>
          </div>
          
          {/* Configurações adicionais */}
          <div className="bg-white rounded-lg shadow divide-y">
            <div className="p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center">
                <Lock size={18} className="text-gray-500 mr-3" />
                <span className="font-medium">Segurança e Privacidade</span>
              </div>
            </div>
            <div className="p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center">
                <Bell size={18} className="text-gray-500 mr-3" />
                <span className="font-medium">Notificações</span>
              </div>
            </div>
            <div className="p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center">
                <Shield size={18} className="text-gray-500 mr-3" />
                <span className="font-medium">Termos e Políticas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}