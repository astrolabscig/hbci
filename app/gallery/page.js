import GalleryCard from '@/components/GalleryCard'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen'>
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop" 
                alt="Church Interior"
                className="w-full h-full object-cover brightness-[0.4]"
              />
            </div>
            <div className="relative z-10 text-center px-4">
              <h1 className="text-5xl md:text-7xl text-white mb-4">Our Family in Moments</h1>
              <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide">
                Capturing the beauty of faith, community, and service at HBCI.
              </p>
            </div>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      </section>

    </div>
  )
}

export default page