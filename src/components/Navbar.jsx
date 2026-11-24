import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <div className="brand-logo">TF</div>

        <div>
          <h2>TECHFEST</h2>
          <span>ED. XXVIII | DEC 27-29, 2025</span>
        </div>
      </div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#competitions">Competitions</a>
        <a href="#speakers">Keynotes & Lectures</a>
        <a href="#workshops">Workshops</a>
        <a href="#schedule">Schedule</a>
      </nav>

      <button className="register-btn">
        Register / Pass Portal
      </button>
    </header>
  );
}

export default Navbar;