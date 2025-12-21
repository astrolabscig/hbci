import React from 'react';

const PastorCard = ({ name, title, imageUrl }) => {
  return (
    <div 
    className="w-full h-100 rounded-lg overflow-hidden relative flex items-end p-8 bg-gray-900 transition-all"
  > 
    {/* Background Image with Overlay */}
    <div className="absolute inset-0">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
      />
      {/* Gradient for text readability */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-lg">
      <h2 className="text-white text-4xl font-bold mt-4 mb-2 leading-tight">
        {title}
      </h2>

    </div>
  </div>
  );
};

export default PastorCard;