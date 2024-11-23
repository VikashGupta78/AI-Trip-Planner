import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../../service/FirebaseConfig';
import { toast } from 'react-toastify';
import InfoSection from '../components/InfoSection';
import HotelSection from '../components/HotelSection';
import ItenarySection from '../components/ItenarySection';
import Footer from '../components/Footer';

function ViewTrip() {
    const {tripId} = useParams();
    const [trip, setTrip] = useState([]);

    useEffect(() => {
        tripId && getTripData();
    }, [tripId])

    const getTripData = async() => {
        const docRef = doc(db, 'AITrips', tripId);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            console.log("document", docSnap.data());
            setTrip(docSnap.data());
        }
        else{
            console.log("no such document");
            toast.error("No Trip Found");
        }
    }
  return (
    <div className="bg-base-100 text-base-content">
        <InfoSection trip={trip} />
        <HotelSection trip={trip} />
        <ItenarySection trip={trip} />
        <Footer />
    </div>
  )
}

export default ViewTrip