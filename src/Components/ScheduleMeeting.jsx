import React, { useState } from 'react';
import { LuCalendarClock } from "react-icons/lu";


// Main App component
export default function ScheduleMeeting() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Constants for month and day names
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Handler for navigating to the previous month
  const handlePrevMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  // Handler for navigating to the next month
  const handleNextMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  // Handler for clicking on a date
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  // Function to render the calendar grid
  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    const calendarDays = [];

    // Add empty cells for days before the first of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= lastDayOfMonth; day++) {
      const dayDate = new Date(year, month, day);
      const isToday = dayDate.toDateString() === today.toDateString();
      const isSelected = selectedDate && dayDate.toDateString() === selectedDate.toDateString();

      let dayClasses = "p-2 rounded-md hover:bg-gray-100 cursor-pointer";
      if (isToday) {
        dayClasses += " border-2 border-orange-500 font-bold";
      }
      if (isSelected) {
        dayClasses += " bg-orange-200"; // Highlight selected day
      }

      calendarDays.push(
        <div
          key={day}
          className={dayClasses}
          onClick={() => handleDateClick(dayDate)}
        >
          {day}
        </div>
      );
    }

    return calendarDays;
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg py-5 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center mb-4">
        {/* Title Icon */}
        <LuCalendarClock className="h-6 w-6 text-gray-600 mr-2"/>
        <h2 className="text-xl font-semibold">Schedule a Meeting</h2>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Calendar Section */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <button onClick={handlePrevMonth} className="text-gray-500 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <h3 className="text-lg font-bold text-gray-800">{months[currentDate.getMonth()]} {currentDate.getFullYear()}</h3>
            <button onClick={handleNextMonth} className="text-gray-500 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Days of the week */}
          <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium text-gray-500 mb-2">
            {daysOfWeek.map(day => <div key={day}>{day}</div>)}
          </div>

          {/* Calendar Dates */}
          <div className="grid grid-cols-7 gap-1 text-center text-gray-800">
            {renderCalendar()}
          </div>

          {/* Legend */}
          <div className="flex justify-center mt-4 text-xs font-medium text-gray-500 space-x-4">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-400 mr-1"></div>
              Available
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-red-400 mr-1"></div>
              Busy
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-orange-500 mr-1"></div>
              Today
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-64 mt-8 md:mt-0 md:ml-8 p-6 bg-gray-50 rounded-lg flex flex-col items-center justify-center text-center">
          {/* Large Calendar Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 className="mt-4 text-lg font-bold text-gray-800">Select a Date</h3>
          <p className="mt-2 text-sm text-gray-500">
            Choose an available date from the calendar to see available time slots.
          </p>
        </div>
      </div>
    </div>
  );
}
