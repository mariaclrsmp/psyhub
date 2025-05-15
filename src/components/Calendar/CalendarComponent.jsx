import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CalendarComponent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const getMonthName = (monthIndex) => {
    const monthNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return monthNames[monthIndex];
  };

  const prevMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() - 1);
      return newDate;
    });
  };

  const nextMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + 1);
      return newDate;
    });
  };

  const handleDateClick = (day) => {
    const newDate = new Date(currentDate);
    newDate.setDate(day);
    setSelectedDate(newDate);
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth = lastDayOfMonth.getDate();
    
    const days = [];
    
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const calendarDays = generateCalendarDays();

  const isSelectedDate = (day) => {
    if (!selectedDate || !day) return false;
    return selectedDate.getDate() === day && 
           selectedDate.getMonth() === currentDate.getMonth() &&
           selectedDate.getFullYear() === currentDate.getFullYear();
  };

  const isToday = (day) => {
    if (!day) return false;
    const today = new Date();
    return today.getDate() === day && 
           today.getMonth() === currentDate.getMonth() &&
           today.getFullYear() === currentDate.getFullYear();
  };

  const formatSelectedDate = () => {
    if (!selectedDate) return '';
    return `${selectedDate.getDate()} de ${getMonthName(selectedDate.getMonth())} de ${selectedDate.getFullYear()}`;
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center w-full mb-4">
        <button 
          onClick={prevMonth}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft className="h-5 w-5 text-gray-500" />
        </button>
        <h2 className="text-xl font-semibold">
          {getMonthName(currentDate.getMonth())} {currentDate.getFullYear()}
        </h2>
        <button 
          onClick={nextMonth}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronRight className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 w-full mb-2">
        {weekDays.map((day, index) => (
          <div key={index} className="text-center font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 w-full">
        {calendarDays.map((day, index) => (
          <div 
            key={index} 
            className={`
              aspect-square flex items-center justify-center text-sm rounded-full cursor-pointer
              ${!day ? 'text-gray-300' : 'hover:bg-gray-100'}
              ${isToday(day) ? 'border border-blue-500' : ''}
              ${isSelectedDate(day) ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}
            `}
            onClick={() => day && handleDateClick(day)}
          >
            {day}
          </div>
        ))}
      </div>

      {selectedDate && (
        <div className="mt-4 p-2 bg-blue-50 text-blue-800 rounded-md w-full text-center">
          Data selecionada: {formatSelectedDate()}
        </div>
      )}
    </div>
  );
}