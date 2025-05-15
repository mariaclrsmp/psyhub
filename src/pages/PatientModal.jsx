// src/pages/PatientModal.jsx
function PatientModal({ onClose }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Cadastrar Paciente</h3>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                &times;
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Nome completo</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Digite o nome do paciente"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="email@exemplo.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">Telefone</label>
                <input 
                  type="tel" 
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="(00) 00000-0000"
                />
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
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default PatientModal;