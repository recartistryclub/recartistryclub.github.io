import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import InteractiveCanvas from '../components/InteractiveCanvas';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <InteractiveCanvas />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Events />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
