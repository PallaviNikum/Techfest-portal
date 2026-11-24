import './Stats.css';

function Stats() {
  const stats = [
    { number: '175K+', title: 'Innovators', description: 'Global participants' },
    { number: '2,500+', title: 'Colleges', description: 'Across the world' },
    { number: '60+', title: 'Events', description: 'Technology challenges' },
    { number: '3 Days', title: 'Innovation', description: 'Unforgettable experience' }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2>{item.number}</h2>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;