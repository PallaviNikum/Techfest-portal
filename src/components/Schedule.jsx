import { useState } from 'react';
import './Schedule.css';

const schedule = {
  DAY1: [
    { time: '09:00 AM', title: 'Opening Ceremony', type: 'CEREMONY', desc: 'Welcome address and inauguration of Techfest.' },
    { time: '11:00 AM', title: 'Robowars Championship', type: 'COMPETITION', desc: 'Watch powerful robots compete in an exciting battle.' },
    { time: '02:00 PM', title: 'AI & Technology Summit', type: 'SUMMIT', desc: 'Explore the future of artificial intelligence.' },
    { time: '05:00 PM', title: 'Innovation Showcase', type: 'EXHIBITION', desc: 'Discover creative projects and new technologies.' },
  ],
  DAY2: [
    { time: '09:30 AM', title: 'Coding Challenge', type: 'COMPETITION', desc: 'Test your programming and problem-solving skills.' },
    { time: '11:30 AM', title: 'Robotics Workshop', type: 'WORKSHOP', desc: 'Learn the fundamentals of robotics.' },
    { time: '02:30 PM', title: 'Tech Talks', type: 'TALK', desc: 'Get inspired by technology and innovation.' },
    { time: '06:00 PM', title: 'Technoholix Night', type: 'ENTERTAINMENT', desc: 'Experience an exciting evening of entertainment.' },
  ],
  DAY3: [
    { time: '10:00 AM', title: 'Hackathon Finale', type: 'COMPETITION', desc: 'Final round of the innovation challenge.' },
    { time: '12:30 PM', title: 'Project Exhibition', type: 'EXHIBITION', desc: 'Explore innovative student projects.' },
    { time: '03:00 PM', title: 'Prize Distribution', type: 'CEREMONY', desc: 'Celebrate the winners and participants.' },
    { time: '05:00 PM', title: 'Closing Ceremony', type: 'CEREMONY', desc: 'A memorable conclusion to Techfest.' },
  ],
};

function Schedule() {
  const [activeDay, setActiveDay] = useState('DAY1');

  return (
    <section className="schedule-section" id="schedule">
      <div className="schedule-heading">
        <span>PLAN YOUR EXPERIENCE</span>
        <h2>EVENT SCHEDULE</h2>
        <p>Three days. Endless possibilities. Explore the journey.</p>
      </div>

      <div className="schedule-tabs">
        {Object.keys(schedule).map((day, index) => (
          <button
            key={day}
            className={activeDay === day ? 'active' : ''}
            onClick={() => setActiveDay(day)}
          >
            DAY 0{index + 1}
          </button>
        ))}
      </div>

      <div className="schedule-list">
        {schedule[activeDay].map((event, index) => (
          <div className="schedule-card" key={index}>
            <div className="schedule-time">{event.time}</div>

            <div className="schedule-line">
              <span></span>
            </div>

            <div className="schedule-details">
              <span className="schedule-type">{event.type}</span>
              <h3>{event.title}</h3>
              <p>{event.desc}</p>
            </div>

            <div className="schedule-number">
              0{index + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Schedule;