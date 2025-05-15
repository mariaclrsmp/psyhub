// src/pages/Patient.jsx
function Patient() {
    const patients = [
      { id: 1, name: 'Rita da Silva', email: 'rita.silva@email.com', phone: '(11) 98765-4321' },
      { id: 2, name: 'João Pereira', email: 'joao.pereira@email.com', phone: '(11) 91234-5678' },
      { id: 3, name: 'Maria Santos', email: 'maria.santos@email.com', phone: '(11) 99876-5432' }
    ];
  
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">Pacientes</h2>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="py-3 px-6 text-left text-gray-500">Nome</th>
                <th className="py-3 px-6 text-left text-gray-500">Email</th>
                <th className="py-3 px-6 text-left text-gray-500">Telefone</th>
                <th className="py-3 px-6 text-left text-gray-500">Ações</th>
              </tr>
            </thead>
            <tbody>
              {patients.map(patient => (
                <tr key={patient.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6">{patient.name}</td>
                  <td className="py-4 px-6">{patient.email}</td>
                  <td className="py-4 px-6">{patient.phone}</td>
                  <td className="py-4 px-6">
                    <button className="text-cyan-500 hover:underline">Ver detalhes</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default Patient;