import { useState } from 'react';
import { gradients } from './data/gradients';
import { searchGradients } from './utils/searchUtils';
import { NoResults } from './components/NoResults';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { GradientInfo } from './components/GradientInfo';
import './App.css';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCopied, setShowCopied] = useState(false);

  const filteredGradients = searchGradients(gradients, searchTerm);
  const hasResults = filteredGradients.length > 0;
  const currentGradient = hasResults ? filteredGradients[currentIndex] : gradients[0];

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => 
      prev === filteredGradients.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => 
      prev === 0 ? filteredGradients.length - 1 : prev - 1
    );
  };

  const copyCSS = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(
      `background: ${currentGradient.colors[0]};
background: linear-gradient(to right, ${currentGradient.colors.join(', ')});`
    );
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentIndex(0);
  };

  const handleAppClick = (e) => {
    // Only trigger fullscreen if it's a direct click on the app container
    if (e.target === e.currentTarget && !isFullscreen) {
      setIsFullscreen(true);
    }
  };

  return (
    <div 
      className={`app ${isFullscreen ? 'fullscreen' : ''}`}
      style={{
        background: `linear-gradient(to right, ${currentGradient.colors.join(', ')})`
      }}
      onClick={handleAppClick}
    >
      {!isFullscreen && (
        <Header 
          searchTerm={searchTerm} 
          onSearch={handleSearch}
        />
      )}

      {!hasResults && searchTerm && (
        <NoResults searchTerm={searchTerm} />
      )}

      {hasResults && (
        <>
          <Navigation 
            onPrev={handlePrev}
            onNext={handleNext}
          />
          <GradientInfo 
            gradient={currentGradient}
            showCopied={showCopied}
            onCopy={copyCSS}
          />
        </>
      )}

      {isFullscreen && (
        <button 
          className="exit-fullscreen"
          onClick={(e) => {
            e.stopPropagation();
            setIsFullscreen(false);
          }}
        >
          Exit Fullscreen
        </button>
      )}
    </div>
  );
}