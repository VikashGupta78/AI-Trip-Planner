import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateTrip from './pages/CreateTrip'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ViewTrip from './pages/view-trips/[tripId]/ViewTrip'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen bg-gray-100'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-trip' element={<CreateTrip />} />
        <Route path='/view-trip/:tripId' element={<ViewTrip />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
 