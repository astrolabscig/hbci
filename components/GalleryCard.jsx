import { Calendar } from 'lucide-react';
import React from 'react'

const GalleryCard = () => {
  return (
    <div 
        className="relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
      >
        <div className="overflow-hidden">
          <img src='/hero.png' alt='img' className="w-full h-full object-cover transition-transform duration-700 " />
        </div>
    </div>
  );
}

export default GalleryCard