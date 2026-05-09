import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Perks from './components/Perks';
import Sponsors from './components/Sponsors';
import Mission from './components/Mission';
import Protocol from './components/Protocol';
import Roster from './components/Roster';
import FAQ from './components/FAQ';
import Network from './components/Network';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-canvas selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <Perks />
      <Mission />
      <Protocol />
      <Roster />
      <Network />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
