import './App.css';
import Navbar from './components/navbar.jsx';
import Hero from './components/Hero';
import Stats from './components/Stats.jsx';
import Events from './components/Events.jsx';
import Speakers from './components/Speakers.jsx';
import Schedule from './components/Schedule.jsx';
import Workshops from './components/Workshops.jsx';
import Registration from './components/Registration.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Stats />
      <Events />
      <Speakers />
      <Schedule />
      <Workshops />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;