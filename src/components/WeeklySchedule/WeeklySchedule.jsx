import React from 'react';
import { Check, FileText } from 'lucide-react';;
import './WeeklySchedule.css'

const WeeklySchedule = () => {
  const days = [
    { day: 'D', date: '30', current: false },
    { day: 'S', date: '31', current: false },
    { day: 'T', date: '01', current: false },
    { day: 'Q', date: '02', current: true },
    { day: 'Q', date: '03', current: false },
    { day: 'S', date: '04', current: false },
    { day: 'S', date: '05', current: false },
  ];
  
  return (
          <div className="bg-white p-6 rounded-lg shadow-sm col-span-2">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-semibold">Sessões de quarta</h3>
                <p className="text-gray-500 text-sm">1 sessão esta semana</p>
              </div>
              <button className="bg-schedule bg-800 text-white px-4 py-2 rounded-full text-sm">Agenda</button>
            </div>
            
            <div className="flex justify-between mt-6 mb-8">
              {days.map((day, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col items-center justify-center w-12 h-12 rounded-full ${
                    day.current ? 'current-day bg-500 text-white' : 'text-gray-600'
                  }`}
                >
                  <span className="text-xs">{day.day}</span>
                  <span className="font-medium">{day.date}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-700">18:00 às 19:00</p>
                  <p className="text-gray-600">Rita da Silva</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="patient-status text-500 text-sm">Agendado</span>
                  <span className="p-1 bg-gray-100 rounded">
                    <Check size={16} className="text-gray-500" />
                  </span>
                  <span className="p-1 bg-gray-100 rounded">
                    <FileText size={16} className="text-gray-500" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      };

export default WeeklySchedule