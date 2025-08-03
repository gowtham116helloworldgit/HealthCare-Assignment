import React from "react";
import "./DoctorCard.css";

// Inline Doctor type
interface Doctor {
  id: number;
  name: string;
  specialization: string;
  available: boolean;
  image: string;
}

interface Props {
  doctor: Doctor;
  onSelect: (id: number) => void;
}

const DoctorCard = ({ doctor, onSelect }: Props) => {
  return (
    <div className={`doctor-card ${doctor.available ? "available" : "unavailable"}`}>
      <img src={doctor.image} alt={doctor.name} />
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>
      <button onClick={() => onSelect(doctor.id)}>View Profile</button>
    </div>
  );
};

export default DoctorCard;
