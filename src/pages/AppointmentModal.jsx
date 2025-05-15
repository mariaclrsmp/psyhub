function AppointmentModal({ onClose }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Novo Agendamento</h3>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                &times;
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Paciente</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option value="">Selecione um paciente</option>
                  <option value="1">Rita da Silva</option>
                  <option value="2">João Pereira</option>
                  <option value="3">Maria Santos</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">Data</label>
                <input 
                  type="date" 
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">Horário de início</label>
                  <input 
                    type="time" 
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Horário de término</label>
                  <input 
                    type="time" 
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">Observações (opcional)</label>
                <textarea 
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="3"
                  placeholder="Adicione informações relevantes sobre o agendamento"
                ></textarea>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button 
                  type="button" 
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
                >
                  Agendar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default AppointmentModal;