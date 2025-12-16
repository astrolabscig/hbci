import React from 'react';

const PastorCard = ({ name, title, imageUrl }) => {
  return (
    <div className=" shrink-0 snap-center md:w-1/2 lg:w-1/4 p-4">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden text-center transition-transform duration-300 hover:scale-[1.03] border-t-4 border-gold-500">
        {/* Pastor Image */}
        <div className="p-4 pt-8">
          <img
            src={imageUrl}
            alt={`Picture of ${name}`}
            className="w-40 h-40 object-cover rounded-lg mx-auto"
            loading="lazy"
          />
        </div>
        
        {/* Pastor Info */}
        <div className="py-6 px-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-sm font-semibold text-gold-500 uppercase tracking-wider">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default PastorCard;