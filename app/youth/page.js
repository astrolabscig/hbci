import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen">
      <header className="max-w-7xl mx-auto px-6 gap-10 md:gap-15 flex  flex-col md:flex-row mt-30">
        {/* Left content */}
        <div className="">
          <span className="inline-block px-3 py-1 bg-slate-800 text-xs font-medium text-slate-300 mb-6">Latest Message</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Meet Our Leaders <br/><span className="text-gold-500">Gods Warriors</span></h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg">
              Join us as we explore what it means to trust God in every season of life. In this week's message, Pastor John dives into Hebrews 11.
          </p>
        </div>

        {/* Right content */}
        <div className="bg-amber-300 w-xl mx-auto overflow-hidden flex items-center justify-center">
          <img 
            src="/hero.png" 
            className="w-full" 
          />
        </div>
      </header>
    </div>
  )
}

export default page