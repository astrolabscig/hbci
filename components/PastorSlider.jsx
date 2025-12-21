'use client'
import PastorCard from './PastorCard';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Using lucide-react for modern icons
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef } from 'react';

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

  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
          
            {/* The main sliding track */}
            <Swiper
      // 1. Core Config
              modules={[Autoplay, Navigation]}
              spaceBetween={20} // Space between cards in pixels
              slidesPerView={1}  // Default (Mobile)
              loop={true}       // Infinite scrolling
              onInit={(swiper) => {
                // Link the custom buttons to Swiper
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              
              // 2. Auto-sliding Logic
              autoplay={{
                delay: 3000,
                disableOnInteraction: false, // Keeps sliding after manual click
              }}

              // 4. Responsive Breakpoints
              breakpoints={{
                // When window width is >= 768px (md)
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                // When window width is >= 1024px (lg)
                1024: {
                  slidesPerView: 3, // Optional: 3 cards on larger screens
                },
              }}
          
            >

              {pastorsData.map((pastor, index) => (
                <SwiperSlide>
                  <PastorCard 
                  key={index}
                  name={pastor.name}
                  title={pastor.title}
                  imageUrl={pastor.imageUrl}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            
        {/* --- CUSTOM NAVIGATION BUTTONS --- */}
      <button 
        ref={prevRef}
        className="absolute -left-12.5 top-1/2 -translate-y-1/2 z-10 p-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all disabled:opacity-20"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        ref={nextRef}
        className="absolute -right-12.5 top-1/2 -translate-y-1/2 z-10 p-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all disabled:opacity-20"
      >
        <ChevronRight size={24} />
      </button>
        </div>


      </div>
    </section>
  );
};

export default PastorSlider;