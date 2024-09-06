import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><strong>Home</strong></li>
          <li><strong>Weather</strong></li>
          <li><strong>News</strong></li>
          <li><strong>Calendar</strong></li>
          <li><strong>Tasks</strong></li>
        </ul>
      </nav>
      {/* <div className="theme-switcher">
        <button>Switch Theme</button>
      </div> */}
    </aside>
  );
}

export default Sidebar;
