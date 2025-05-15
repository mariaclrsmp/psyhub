import { Calendar } from 'lucide-react';
import './SessionStats.css';

function SessionStats({ title, count }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-gray-500">{title}</h3>
          <p className="text-4xl font-bold">{count}</p>
        </div>
        <Calendar className="text-cyan-500" size={24} />
      </div>
    </div>
  );
}

export default SessionStats;