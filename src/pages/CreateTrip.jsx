import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import logo from "../assets/react.svg";
import { AI_PROMPT, BudgetOptions, TravellingOptions } from "../../optionsData";
import { chatSession } from "../service/AiModal";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../service/FirebaseConfig";
import { useNavigate } from "react-router-dom";

function CreateTrip() {
    // States for active selection
    const navigate = useNavigate();
    const [place, setPlace] = useState()
    const [formData, setFormData] = useState([]);
    const [openDiolog, setOpenDiolog] = useState(false);
    const [loading, setLoading] = useState(false);

    const changeHandler = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const loginHandler = useGoogleLogin({
        onSuccess: (codeResp) => {
            console.log('Login Success:', codeResp);
            getProfileDetails(codeResp.access_token);
        },
        onError: (err) => console.error('Login Error:', err),
    });

    const getProfileDetails = async (accessToken) => {
        try {
            const response = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            console.log('Profile Details:', response.data);
            localStorage.setItem('user', JSON.stringify(response.data));
            setOpenDiolog(false);
            onGenerateTrip();

        } catch (error) {
            console.error('Error fetching profile details:', error);
        }
    };

    const onGenerateTrip = async () => {
        if (formData?.noOfDays > 5) {
            toast.error("Please enter number of days less than 5");
            return;
        }
        if (!formData?.place || !formData?.noOfDays || !formData?.budget || !formData?.noOfPeople) {
            toast.error("Please fill all the details", {
                position: 'top-center'
            })
            return;
        }
        console.log(formData);

        const user = localStorage.getItem('user');
        if (!user) {
            setOpenDiolog(true);
            console.log("openDiolog", openDiolog);
            return;
        }

        setLoading(true);
        const FINAL_PROMPT = AI_PROMPT
            // .replace('{location}', formData?.place?.label)
            .replace('{location}', formData?.place)
            .replace('{traveler}', formData?.noOfPeople)
            .replace('{totalDays}', formData?.noOfDays)
            .replace('{budget}', formData?.budget)
            // .replace('{totalDays}', formData?.noOfDays)

        console.log(FINAL_PROMPT);

        const result = await chatSession.sendMessage(FINAL_PROMPT);
        // console.log(result); 
        console.log("--", result?.response?.text());

        setLoading(false);
        saveTrip(result?.response?.text());
    }

    const saveTrip = async (tripData) => {
        setLoading(true);
        const user = JSON.parse(localStorage.getItem('user'));
        const docId = Date.now().toString();
        // Add a new document in collection "cities"
        await setDoc(doc(db, "AITrips", docId), {
            userSelection: formData,
            tripData: JSON.parse(tripData),
            userEmail: user?.email,
            id: docId
        });
        setLoading(false);
        navigate('/view-trip/'+docId);
    }


    useEffect(() => {
        console.log(formData);
    }, [formData])

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Tell us your travel preferences 🏡🌴
                </h1>
                <p className="text-gray-600 text-lg">
                    Just provide some basic information, and our trip planner will
                    generate a customized itinerary based on your preferences.
                </p>
            </div>

            {/* Destination Input */}
            <div className="max-w-2xl mx-auto mt-10">
                <label
                    htmlFor="destination"
                    className="block text-lg font-semibold text-gray-700"
                >
                    What is your destination of choice?
                </label>
                <div className="mt-4">
                    {/* <GooglePlacesAutocomplete
                        apiKey="AlzaSyLprd6lflH_iL2k4ZBjdQ4JKloP1mVYnbo"
                        placeholder="Search for your destination..."
                        className="w-full"
                        selectProps={{
                            place,
                            onChange: (v) => { setPlace(v); changeHandler('place', v)}
                        }}
                    /> */}
                    <input type="text"
                        placeholder="Search for your destination..."
                        className="w-full"
                        onChange={(e) => changeHandler('place', e.target.value)}
                    />
                </div>
            </div>

            {/* Trip Duration */}
            <div className="max-w-2xl mx-auto mt-10">
                <label
                    htmlFor="days"
                    className="block text-lg font-semibold text-gray-700"
                >
                    How many days are you planning your trip?
                </label>
                <input
                    type="number"
                    onChange={(e) => changeHandler('noOfDays', e.target.value)}
                    placeholder="Ex. 3"
                    className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            {/* Budget Section */}

            <div className="max-w-4xl mx-auto mt-12">
                <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
                <div className="grid grid-cols-3 gap-5 mt-5">
                    {BudgetOptions.map((item, ind) => {
                        return <div key={ind}
                            onClick={() => changeHandler('budget', item.title)}
                            className={`p-6 border rounded-lg shadow-md bg-white hover:shadow-lg cursor-pointer
                            ${formData?.budget === item.title && 'shadow-lg border-black'}`}
                        >
                            <h2 className="text-4xl">{item.icon}</h2>
                            <h2 className="font-bold text-lg">{item.title}</h2>
                            <h2 className="text-sm text-gray-500">{item.desc}</h2>
                        </div>
                    })}
                </div>
            </div>

            {/* Travel Companions */}
            <div className="max-w-4xl mx-auto mt-12">
                <h2 className="text-xl my-3 font-medium">Who do you plan on traveling with on your next adventure?</h2>
                <div className="grid grid-cols-3 gap-5 mt-5">
                    {TravellingOptions.map((item, ind) => {
                        return <div key={ind}
                            onClick={() => changeHandler('noOfPeople', item.people)}
                            className={`p-6 border rounded-lg shadow-md bg-white hover:shadow-lg cursor-pointer
                        ${formData?.noOfPeople === item.people && 'shadow-lg border-black'}`}
                        >
                            <h2 className="text-4xl">{item.icon}</h2>
                            <h2 className="font-bold text-lg">{item.title}</h2>
                            <h2 className="text-sm text-gray-500">{item.desc}</h2>
                        </div>
                    })}
                </div>
            </div>

            {/* Generate Trip Button */}
            <div className="my-10 justify-end flex">
                <button
                    className="btn btn-primary"
                    disabled={loading}
                    onClick={onGenerateTrip}
                >
                    {loading ? (
                        <span className="loading loading-spinner loading-lg"></span>
                    ) : (
                        "Generate Trip"
                    )}
                </button>
            </div>


            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* DaisyUI Modal */}
            {openDiolog && (
                <dialog className="modal" open>
                    <div className="modal-box">
                        {/* Close Button */}
                        <button
                            onClick={() => setOpenDiolog(false)}
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                            ✕
                        </button>

                        {/* Modal Content */}
                        <div>
                            <img src={logo} alt="" />
                            <p>AI Trip Planner</p>
                        </div>
                        <h3 className="font-bold text-lg">Sign In With Google</h3>
                        <p className="py-4">
                            Sign in to the App with Google authentication securely
                        </p>
                        <button onClick={loginHandler} className="btn btn-primary"><span><FcGoogle />
                        </span>Sign In With Google</button>
                    </div>
                </dialog>
            )}
        </div>
    );
}

export default CreateTrip;
