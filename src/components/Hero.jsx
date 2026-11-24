import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-tag">
          ⚡ EDITION XXVIII · IIT BOMBAY
        </p>

        <p className="hero-subtitle">
          ASIA'S LARGEST SCIENCE & TECH EXTRAVAGANZA
        </p>

        <h1>
          TRANSCENDING
          <span> DIMENSIONS</span>
        </h1>

        <p className="hero-description">
          Join 175,000+ innovators, 2,500+ colleges,
          and planetary research pioneers across 3 days
          of robotics, quantum technology and innovation.
        </p>

        <div className="countdown">
          <div>
            <h2>24</h2>
            <span>DAYS</span>
          </div>

          <div>
            <h2>14</h2>
            <span>HOURS</span>
          </div>

          <div>
            <h2>32</h2>
            <span>MINUTES</span>
          </div>

          <div>
            <h2>09</h2>
            <span>SECONDS</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="primary-btn">
            Claim Student Pass
          </button>

          <button className="secondary-btn">
            Explore 60+ Events →
          </button>
        </div>

        <p className="free-entry">
          ✓ Free Entry with Student ID
        </p>

      </div>

      <div className="hero-image">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBY-2LF3Pl1L02gKv9SbQqW8DVnQnNf5BKXkiSUvU7GDxCMakDXUir_PR05Y-IWmjwZE5ibG4mfBNFknVjsB_liyabrqoxWYEiq2TkKwq82vebS5OkzJvXq4NdqT4_0oWQB4AzeSoM91O-9ItMWDlcLKTGneKd0KrSPI0YjehSjdQNiWln7alZD2Lz--X5b2DcP07B2X9tmHlpC91-dOHlktKIb8RG5gp8cR-RdhTJ"
          alt="Futuristic robotic technology"
        />
      </div>

    </section>
  );
}

export default Hero;