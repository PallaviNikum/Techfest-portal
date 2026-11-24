import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        <div className="footer-brand">
          <h2><span>TF</span> TECHFEST</h2>
          <p className="footer-edition">IIT BOMBAY | ED. XXVIII</p>
          <p>
            Celebrating innovation, technology and creativity.
            Bringing together brilliant minds to shape the future.
          </p>
        </div>

        <div className="footer-links">
          <h3>QUICK LINKS</h3>
          <a href="#home">Home</a>
          <a href="#events">Events</a>
          <a href="#speakers">Speakers</a>
          <a href="#schedule">Schedule</a>
          <a href="#workshops">Workshops</a>
          <a href="#register">Register</a>
        </div>

        <div className="footer-contact">
          <h3>CONTACT</h3>
          <p>IIT Bombay, Powai</p>
          <p>Mumbai, Maharashtra, India</p>
          <a href="https://www.techfest.org/" target="_blank" rel="noreferrer">
            Official Website ↗
          </a>
        </div>

        <div className="footer-social">
          <h3>FOLLOW US</h3>
          <a href="https://www.instagram.com/techfest_iitb/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://www.facebook.com/techfest.iitb/" target="_blank" rel="noreferrer">Facebook ↗</a>
          <a href="https://www.linkedin.com/school/techfest-iit-bombay/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 TECHFEST. All Rights Reserved.</p>
        <p>DESIGNED WITH INNOVATION.</p>
      </div>
    </footer>
  );
}

export default Footer;