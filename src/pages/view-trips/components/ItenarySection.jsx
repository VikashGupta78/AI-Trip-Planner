import React from 'react';
import PlaceCard from './PlaceCard';

function ItenarySection({ trip }) {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-primary mb-6">Places to Visit</h2>
      <div className="space-y-8">
        {trip?.tripData?.itinerary?.map((item, ind) => (
          <div key={ind} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-primary">{`Day ${item?.day}`}</h2>
            <p className="text-gray-600 mb-4">{`Best Time: ${item?.bestTime}`}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {item.plan.map((place, index) => (
                <PlaceCard key={index} place={place} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItenarySection;
