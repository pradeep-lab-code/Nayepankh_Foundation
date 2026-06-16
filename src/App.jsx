import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Impact from './components/Impact';
import Programs from './components/Programs';
import Volunteer from './components/Volunteer';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Programs />
      <Impact/>
      <Volunteer/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;