import './Workshops.css';

const workshops = [
  {
    number: '01',
    title: 'Artificial Intelligence',
    category: 'AI & MACHINE LEARNING',
    description: 'Explore AI concepts, machine learning fundamentals and real-world applications.',
    level: 'BEGINNER FRIENDLY',
    duration: '2 HOURS',
  },
  {
    number: '02',
    title: 'Robotics & Automation',
    category: 'ROBOTICS',
    description: 'Discover robotics, automation systems and hands-on engineering concepts.',
    level: 'INTERMEDIATE',
    duration: '3 HOURS',
  },
  {
    number: '03',
    title: 'Web Development',
    category: 'DEVELOPMENT',
    description: 'Learn the fundamentals of modern websites and interactive web experiences.',
    level: 'BEGINNER FRIENDLY',
    duration: '2 HOURS',
  },
];

function Workshops() {
  return (
    <section className="workshops-section" id="workshops">
      <div className="workshops-heading">
        <span>LEARN. BUILD. INNOVATE.</span>
        <h2>EXPLORE WORKSHOPS</h2>
        <p>
          Upgrade your skills through interactive sessions
          and hands-on learning experiences.
        </p>
      </div>

      <div className="workshops-grid">
        {workshops.map((workshop) => (
          <div className="workshop-card" key={workshop.number}>
            <div className="workshop-top">
              <span className="workshop-number">{workshop.number}</span>
              <span className="workshop-category">{workshop.category}</span>
            </div>

            <div className="workshop-content">
              <h3>{workshop.title}</h3>
              <p>{workshop.description}</p>
            </div>

            <div className="workshop-meta">
              <span>{workshop.level}</span>
              <span>{workshop.duration}</span>
            </div>

            <a href="#register" className="workshop-link">
              EXPLORE WORKSHOP <span>↗</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Workshops;