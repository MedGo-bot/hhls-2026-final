import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Speakers from './components/Speakers';
import Sponsorship from './components/Sponsorship';
import Vision from './components/Vision';
import WhyAttend from './components/WhyAttend';

function App() {
  return (
    <div className="min-h-screen">
      <Footer />
      <Header />
      <Hero />
      <Pricing />
      <Speakers />
      <Sponsorship/>
      <Vision/>
      <WhyAttend />
    </div>
  );
}

export default App;

