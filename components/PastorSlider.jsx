'use client'
import React, { useState, useMemo } from 'react';
import PastorCard from './PastorCard';
// Import icons (you'll need to install react-icons: npm install react-icons)
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Using lucide-react for modern icons

const pastorsData = [
  { 
    id: 1, 
    name: "Pastor John Doe", 
    title: "Senior Pastor", 
    // Placeholder image URLs
    imageUrl: "/hero.png" 
  },
  { 
    id: 2, 
    name: "Pastor Jane Smith", 
    title: "Associate Pastor", 
    imageUrl: "/hero.png" 
  },
  { 
    id: 3, 
    name: "Michael Rodriguez", 
    title: "Youth Pastor", 
    imageUrl: "/hero.png" 
  },
  { 
    id: 4, 
    name: "Dr. Ben Johnson", 
    title: "Teaching Pastor", 
    imageUrl: "/hero.png" 
  },
  { 
    id: 5, 
    name: "Sarah Williams", 
    title: "Worship Leader", 
    imageUrl: "/hero.png" 
  },
  // Add more pastors here
];

const PastorSlider = () => {
  // State to track the index of the first visible card
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculates the CSS transformation value to slide the cards
  const transformStyle = useMemo(() => {
    // We assume 4 cards are visible on large screens (lg:w-1/4), 2 on medium (md:w-1/2), and 1 on small.
    // Let's target a full slide of 1 card at a time for simplicity across all screens.
    // Each card takes up 100% of the visible container before responsive breakpoints.
    return {
      transform: `translateX(-${currentIndex * 100}%)`,
    };
  }, [currentIndex]);

  const handleNext = () => {
    // Calculate the maximum possible index to prevent sliding past the last card
    const maxIndex = pastorsData.length - 1; 
    
    // Move to the next card, or loop back to 0 if at the end
    setCurrentIndex(prevIndex => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  const handlePrev = () => {
    const maxIndex = pastorsData.length - 1;
    // Move to the previous card, or loop to the end if at the start
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };
  
  // Note: For a more complex, multi-card-slide approach, you would need to calculate 
  // the number of *visible* cards based on screen size (e.g., using a resize listener) 
  // and adjust the `maxIndex` and the `transform` calculation accordingly. 
  // The current setup is the simplest, one-card-at-a-time slide.

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-gold-500 uppercase tracking-widest">Our Leadership</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">Meet Our Pastors & Staff</p>
        </div>

        {/* Slider Wrapper */}
        <div className="relative">
          <div className="overflow-hidden">
            {/* The main sliding track */}
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={transformStyle}
            >
              {pastorsData.map((pastor, index) => (
                <PastorCard 
                  key={index}
                  name={pastor.name}
                  title={pastor.title}
                  imageUrl={pastor.imageUrl}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons (Absolute Positioning) */}
          <button
            onClick={handlePrev}
            aria-label="Previous Pastor"
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 z-10 -ml-2 sm:ml-0 focus:outline-none focus:ring-4 focus:ring-gold-500/50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          
          <button
            onClick={handleNext}
            aria-label="Next Pastor"
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 z-10 -mr-2 sm:mr-0 focus:outline-none focus:ring-4 focus:ring-gold-500/50"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
          
          {/* Dot Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {pastorsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-gold-500 scale-110' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PastorSlider;