import React, { useState } from 'react';

function CalendarWidget() {
  const [events, setEvents] = useState([
    { id: 1, name: "React Workshop", date: "2024-09-10" },
    { id: 2, name: "JavaScript Conference", date: "2024-09-20" },
    { id: 3, name: "NextJS MeetUp", date: "2024-9-30" }
  ]);

  return (
    <div className="widget calendar-widget">
      <h3>Upcoming Events</h3>
      {events.length > 0 ? (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              {event.name} - {event.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>No events scheduled</p>
      )}
    </div>
  );
}

export default CalendarWidget;
