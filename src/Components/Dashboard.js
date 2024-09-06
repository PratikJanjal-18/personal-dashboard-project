import React from 'react';
import WeatherWidget from './WeatherWidget';
import NewsWidget from './NewsWidget';
import CalendarWidget from './CalendarWidget';
import TaskWidget from './TaskWidget';
import Header from './Header';

function Dashboard() {
  return (
    <>
    <div>
      <Header/>
    </div>
    <div className="dashboard">
      <WeatherWidget />
      <NewsWidget />
      <CalendarWidget />
      <TaskWidget />
    </div>
    </>
  );
}

export default Dashboard;
