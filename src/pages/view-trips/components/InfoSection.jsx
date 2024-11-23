import React, { useEffect } from 'react'
// import placeImg from 'D:\Blank\ai-trip-planner\src\assets\landingPage.png'
import { IoIosShareAlt } from "react-icons/io";
import { GetPlaceDetails } from '../../../service/GlobalApi';


function InfoSection({trip}) {

    // const getPlacePhoto = async() => {
    //     const data = {
    //         textQuery: trip?.userSelection?.place
    //     }
    //     const result = await GetPlaceDetails(data)
    //     console.log("result", result.data);
    // }

    // useEffect(()=>{
    //     trip && getPlacePhoto();
    // }, [trip])
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src="https://aitrip.tubeguruji.com/placeholder.jpg"
          alt="Trip Image"
          className="lg:w-1/2 object-cover h-64 lg:h-auto"
        />
        <div className="flex flex-col p-6 lg:w-1/2">
          <h2 className="text-2xl font-bold text-primary">{trip?.userSelection?.place}</h2>
          <div className="mt-4">
            <p className="text-lg">Days: <span className="font-semibold">{trip?.userSelection?.noOfDays}</span></p>
            <p className="text-lg">Budget: <span className="font-semibold">{trip?.userSelection?.budget}</span></p>
            <p className="text-lg">People: <span className="font-semibold">{trip?.userSelection?.noOfPeople}</span></p>
          </div>
          <button className="btn btn-primary mt-6 self-start">
            <IoIosShareAlt className="mr-2" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoSection