import { useState } from 'react';
import './Events.css';

const events = [
  {
    title: 'International Robowars 60kg & 15kg',
    category: 'robowars',
    tag: 'HEAVYWEIGHT COMBAT LEAGUE',
    badge: 'ARENA LIVE STREAM',
    prize: '₹15,00,000',
    description: 'Asia’s fiercest combat robotics tournament. Watch powerful combat robots battle inside a shatterproof arena.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCypfSNfBozYUtPoSae-h_vvLfI1jRlfB1T4_4fJr3ijxlXrLfGt0EyJtvjfqesEczI_AOII4GuXMl8JdC3chk4Ra7gFSX9kr6o06LFfClRLBOxtQ4VPQ0XVGQoA_IHu233cg4K2yhubOIRLs0K7mUYQpOLAlJ8-TQLOiGHk9_EEuPDOzsxtGt8AuX6YH_M6OByauMstVDES4mIRCQ25d7fsxrB_t1lB5bP9ci_zwZm'
  },
  {
    title: 'Quantum & AI Summit',
    category: 'summits',
    tag: 'FRONTIER COMPUTE',
    badge: 'WORLD TECH SUMMIT',
    prize: 'DEC 27-28',
    description: 'Explore neuromorphic processing, quantum computing and advanced AI technologies.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLp0bct03j5EL93dOHQkDMT4a5PcSjBglzaxot2FL3H_2zM6mHAV8fUuMYZKCuALOrm3fZeGnGDXK9pyP0emkQg-xxs_7t9x8OoZ-UKPFBV6c3803xOSC5K4dzvIjjJlFB1B5647nPStzXYdyfd_QpsXYXEtTGdDAotSqdw7YOVfVzYBf6JtuhhT7tfkSkeaUi5TmWLUGc0ZS8iDSwp1LGd63H_wfa8kFKOoHqCTKC'
  },
  {
    title: 'Technoholix Nights',
    category: 'technoholix',
    tag: '20,000+ AUDIENCE CAPACITY',
    badge: 'NIGHT SPECTACLE',
    prize: 'GYMKHANA GROUND',
    description: 'Experience drone shows, laser lights, projection mapping and international EDM performances.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt_IFcsqCvf3sg46Qx-D6G7UyZvr2JnMCfd6rg_iyU8hvfZ1OQFQz7WlQ7PvSpWNJsyWTi1AcpHM-O85DenA-N3hPj_obfUlncihJJyo5MjnJ1f4M5gkymG2GsJEHEM4AYyam5jVRY_18H14ITlbvs5sHkFTp8SGemFymXOx2U90fNli_iIZiq4EQtS7yH0gXq5ImqwqRR9vMrvgjzcrgTwJ4u02mtyAB9UaBl8Nhx'
  },
  {
    title: 'International Exhibits',
    category: 'exhibits',
    tag: 'GLOBAL PROTOTYPES',
    badge: 'GLOBAL TECH EXPO',
    prize: 'HALL 1 & 2',
    description: 'Discover exoskeleton technology, lunar rovers and futuristic robotics prototypes.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYVBrc4VcrF_K6sJZT3HhImzb6lE9Ri5YEY6K0oXMZwPyTfIKgLrfw9C87QSXCqYS0O9htN3zqynvu6_LGOXZlsL-6kQ2M-XjJeMS2ZUBT5Jt5a6-3dQGvSKepASjokM6ITXLavjpwLpRteKmCyeP8SPO33vJ_TBOuJ3nWFZrowWrKgRkaCTiDdmUoo1BXVMFVhwyPPhDUhJj8h4QTPfu7TiUZturOfStVMGWNtRAB'
  },
  {
    title: 'Workshops & Hackathons',
    category: 'competitions',
    tag: 'PRACTICAL MASTERY',
    badge: '36-HR HACK SPRINT',
    prize: 'CERTIFIED BOOTCAMPS',
    description: 'Build solutions in Edge AI, Satellite Avionics and Autonomous Swarms with expert guidance.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4Vr6Q6H82siqwjft_ztMB1PPMiTodVm6gNx9kePpT2Y0mIEsFLHAoFLIJvBQ3rD_jzKOw0iMmO8bAWzhpEbDT5_qxR6o3EF5f0N9I8i93JLKQA55Cc04HLhpa57e-powhcOU8Ocbd7gZeCubE0iQ1T1NGjNVSv9FAo-E2q_Cl7emUQNd0zEV3c3HzOTJmeBZNz2NoAsFGa2R9s1-6SQd7CuYRBxvkypenlVtUlIgL'
  }
];

function Events() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filters = [
    { label: 'All Verticals', value: 'all' },
    { label: 'Robowars Arena', value: 'robowars' },
    { label: 'Quantum & AI', value: 'summits' },
    { label: 'Competitions', value: 'competitions' },
    { label: 'Exhibitions', value: 'exhibits' },
    { label: 'Technoholix Nights', value: 'technoholix' }
  ];

  const filteredEvents = events.filter((event) => {
    const matchesFilter =
      activeFilter === 'all' || event.category === activeFilter;

    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <section className="events-section" id="competitions">

      <div className="events-heading">
        <span>PROGRAM CORE // ARCHITECTURE</span>
        <h2>FLAGSHIP ARENA VERTICALS</h2>
        <p>
          Battlegrounds engineered for extreme kinetic force,
          high-compute simulations and mind-bending experiences.
        </p>
      </div>

      <div className="event-controls">
        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={
                activeFilter === filter.value ? 'active' : ''
              }
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="events-grid">
        {filteredEvents.map((event) => (
          <article className="event-card" key={event.category}>

            <img src={event.image} alt={event.title} />

            <div className="event-overlay"></div>

            <div className="event-top">
              <span>{event.badge}</span>
              <span>{event.prize}</span>
            </div>

            <div className="event-content">
              <small>{event.tag}</small>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <a href="#schedule">Explore Event →</a>
            </div>

          </article>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <p className="no-events">No events found.</p>
      )}

    </section>
  );
}

export default Events;