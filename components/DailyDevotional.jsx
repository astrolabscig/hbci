'use client'
import React, { useEffect, useState } from 'react';
import { getDailyDevotional } from '../services/geminiService';
import { Quote } from 'lucide-react';

const DailyDevotional = () => {
  const [devotional, setDevotional] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDevo = async () => {
      const data = await getDailyDevotional();
      setDevotional(data);
      setLoading(false);
    };
    fetchDevo();
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-12 rounded-lg shadow-sm border border-stone-100 flex items-center justify-center h-64">
        <div className="animate-pulse text-stone-400 font-cinzel tracking-widest">Gathering Wisdom...</div>
      </div>
    );
  }

  return (
    <div className="bg-forest-900 text-white p-8 md:p-16 rounded-sm shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Quote size={120} />
      </div>
      <div className="relative z-10">
        <span className="text-gold-500 font-bold tracking-[0.3em] text-xs mb-6 block uppercase">Daily Reflection</span>
        <h3 className="font-serif-church text-2xl md:text-3xl italic mb-6 leading-snug">
          "{devotional.verse}"
        </h3>
        <p className="font-cinzel text-gold-500 tracking-widest text-sm mb-8">
          — {devotional.reference}
        </p>
        <div className="max-w-3xl border-l-2 border-gold-700/50 pl-6 mb-8">
          <p className="text-stone-300 leading-relaxed italic text-lg">
            {devotional.reflection}
          </p>
        </div>
        <div className="bg-white/5 p-4 rounded-sm border border-white/10">
          <p className="text-stone-400 text-sm font-semibold tracking-wide uppercase mb-2">Guided Prayer</p>
          <p className="text-white text-md">
            {devotional.prayer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DailyDevotional;
