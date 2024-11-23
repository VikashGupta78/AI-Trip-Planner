import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

function PlaceCard({ place }) {
  return (
    <Link
      to={`https://www.google.com/maps/search/?api=1&query=${place?.placeName}`}
      target="_blank"
      className="block bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transform transition"
    >
      <img
        src="https://aitrip.tubeguruji.com/placeholder.jpg"
        alt={place?.placeName}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-primary">{place?.placeName}</h2>
        <p className="text-gray-600">{place?.placeDetails}</p>
        <p className="text-success">{place?.ticketPricing}</p>
        <p className="text-yellow-500">⭐ {place?.rating}</p>
        <button className="btn btn-sm btn-outline btn-primary mt-2">
          <FaMapMarkerAlt className="mr-2" />
          View on Map
        </button>
      </div>
    </Link>
  );
}

export default PlaceCard;
