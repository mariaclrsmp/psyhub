import './DashboardHeader.css';

function DashboardHeader() {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-800">
        <span className="text-gray-700">O seu</span> 
        <span className="text-pink-500"> gerenciador</span> 
        <span className="text-gray-700"> de sessões</span>
      </h2>
      <p className="text-gray-500">Página inicial</p>
    </div>
  );
}

export default DashboardHeader;