import './Speakers.css';

const speakers = [
  {
    name: 'Featured Speaker 01',
    role: 'Technology & Innovation',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500',
  },
  {
    name: 'Featured Speaker 02',
    role: 'Artificial Intelligence',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500',
  },
  {
    name: 'Featured Speaker 03',
    role: 'Entrepreneurship',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500',
  },
];

function Speakers() {
  return (
    <section className="speakers-section" id="speakers">
      <div className="speakers-heading">
        <span>LEARN FROM THE BEST</span>
        <h2>VISIONARIES & MINDS</h2>
        <p>
          Meet inspiring minds shaping the future of technology,
          innovation and entrepreneurship.
        </p>
      </div>

      <div className="speakers-grid">
        {speakers.map((speaker, index) => (
          <div className="speaker-card" key={index}>
            <div className="speaker-image">
              <img src={speaker.image} alt={speaker.name} />
              <span>GUEST SPEAKER</span>
            </div>

            <div className="speaker-info">
              <h3>{speaker.name}</h3>
              <p>{speaker.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Speakers;