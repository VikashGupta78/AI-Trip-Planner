import React from 'react';
import { Link } from 'react-router-dom';

function HotelSection({ trip }) {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-primary mb-6">Hotel Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trip?.tripData?.hotels?.map((hotel, ind) => (
          <Link
            to={`https://www.google.com/maps/search/?api=1&query=${hotel?.hotelName},${hotel?.hotelAddress}`}
            target="_blank"
            key={ind}
            className="block bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition"
          >
            <img
              src="https://aitrip.tubeguruji.com/placeholder.jpg"
              alt={hotel?.hotelName}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-primary">{hotel?.hotelName}</h2>
              <p className="text-sm text-gray-600">{hotel?.hotelAddress}</p>
              <p className="text-lg font-bold text-success">{hotel?.priceRange}</p>
              <p className="text-yellow-500 text-sm">⭐ {hotel?.rating}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HotelSection;
