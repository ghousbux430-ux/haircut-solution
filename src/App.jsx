import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Gallery from './sections/Gallery';
import Reviews from './sections/Reviews';
import Contact from './sections/Contact';
import Appointment from './sections/Appointment';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
      <Appointment />
      <Footer />
    </>
  );
}

export default App;