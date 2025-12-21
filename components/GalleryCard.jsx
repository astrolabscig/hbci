import { Calendar } from 'lucide-react';
import React from 'react'

const GalleryCard = () => {
  return (
    <div 
        className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
      >
        <div className="aspect-[4/3] overflow-hidden w-96">
          <img src='/hero.png' alt='img' className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="p-6">
          <div className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-2">Cat</div>
          <h3 className="serif text-xl font-bold text-slate-800 mb-2">title</h3>
          <p className="text-slate-500 text-sm line-clamp-2">description</p>
          <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center space-x-1"><Calendar className="w-3 h-3" /><span>date</span></div>
          </div>
        </div>
    </div>
  );
}

export default GalleryCard