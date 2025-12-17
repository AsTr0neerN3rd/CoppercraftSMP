import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Chat from './components/Chat';

function App() {
  const [isBlueMode, setIsBlueMode] = useState(false);

  return (
    <>
      <LoadingScreen />
      <div className={`min-h-screen ${isBlueMode ? 'blue-mode' : ''}`}>
        {/* Blue Mode Toggle */}
        <button
          onClick={() => setIsBlueMode(!isBlueMode)}
          className="fixed top-8 right-8 z-50 minecraft-border bg-card hover:bg-card/80 p-4 transition-all hover-lift copper-glow"
          aria-label="Toggle Blue Mode"
          title={isBlueMode ? 'Switch to Copper Mode' : 'Switch to Blue Mode'}
        >
          <div className="text-xl md:text-2xl pixel-text">
            {isBlueMode ? '🔵' : '🟠'}
          </div>
        </button>

        <Hero />
        <About />
        <Features />
        <Footer />
      </div>
      <Chat />
    </>
  );
}

export default App;
