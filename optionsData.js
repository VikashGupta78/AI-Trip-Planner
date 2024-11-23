export const TravellingOptions = [
  {
    id: 1,
    title: 'Just Me',
    desc: 'A sole traveler in exploration',
    icon: '🛩️',
    people: '1',
  },
  {
    id: 2,
    title: 'A Couple',
    desc: 'Two travelers in tandem',
    icon: '🥂',
    people: '2 People',
  },
  {
    id: 3,
    title: 'Family',
    desc: 'A group of fun-loving adventurers',
    icon: '🏠',
    people: '3 to 5 People',
  },
  {
    id: 4,
    title: 'Friends',
    desc: 'A bunch of thrill-seekers',
    icon: '🚗',
    people: '5 to 10 People',
  },
];

export const BudgetOptions = [
  {
    id: 1,
    title: 'Cheap',
    desc: 'Stay conscious of costs',
    icon: '💵',
  },
  {
    id: 2,
    title: 'Moderate',
    desc: 'Keep cost on the average side',
    icon: '💰',
  },
  {
    id: 3,
    title: 'Luxury',
    desc: "Don't worry about cost",
    icon: '💸',
  },
];

export const AI_PROMPT = `
Generate a detailed travel plan for Location: {location}, Traveler: {traveler}, Total Days: {totalDays}, and Budget: {budget}. Provide the following:  

1. **Hotel Options**:  
   - Include:  
     - Hotel Name: {hotelName}  
     - Hotel Address: {hotelAddress}  
     - Price Range: {price}  
     - Hotel Image URL: {hotelImageUrl}  
     - Geo Coordinates: {geoCoordinates} (latitude, longitude)  
     - Rating: {rating} (out of 5)  
     - Description: {description} (brief overview of the hotel amenities or unique features)  

2. **Day-Wise Itinerary**:  
   - For each day:  
     - Theme: {theme} (e.g., Exploring, Relaxation, Sightseeing)  
     - Plan: A list of places to visit:  
       - Place Name: {placeName}  
       - Place Details: {placeDetails} (short description of the place)  
       - Place Image URL: {placeImageUrl}  
       - Geo Coordinates: {geoCoordinates} (latitude, longitude)  
       - Ticket Pricing: {ticketPricing} (mention if free or approximate cost)  
       - Rating: {rating} (out of 5)  
       - Travel Time: {travelTime} (estimated time to reach the place from the previous location)  
       - Best Time to Visit: {bestTime} (for the entire day)  

Output the response in **structured JSON format**, optimized for direct use. Focus on providing cost-effective options for a budget-friendly plan.  
`;


