import React, { useState } from "react";
import DoctorCard from "./components/DoctorCard";
import DoctorProfile from "./components/DoctorProfile";
import "./App.css";

// Inline Doctor type
interface Doctor {
  id: number;
  name: string;
  specialization: string;
  available: boolean;
  image: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialization: "Cardiologist",
    available: true,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Dr. Rahul Mehta",
    specialization: "Dermatologist",
    available: false,
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    id: 3,
    name: "Dr. Neha Verma",
    specialization: "Neurologist",
    available: true,
    image: "https://randomuser.me/api/portraits/women/47.jpg"
  }
];

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const handleSelectDoctor = (id: number) => {
    const doctor = doctors.find(doc => doc.id === id) || null;
    setSelectedDoctor(doctor);
  };

  const handleBookAppointment = () => {
    alert("Appointment booked successfully!");
  };

  const handleBack = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="App">
      <h1>Doctor Appointment Portal</h1>
      {selectedDoctor ? (
        <DoctorProfile
          doctor={selectedDoctor}
          onBook={handleBookAppointment}
          onBack={handleBack}
        />
      ) : (
        <div className="doctor-list">
          {doctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} onSelect={handleSelectDoctor} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
