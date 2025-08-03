
import "./DoctorProfile.css";

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
  onBook: () => void;
  onBack: () => void;
}

const DoctorProfile = ({ doctor, onBook, onBack }: Props) => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={doctor.image} alt={doctor.name} className="profile-image" />
        <h2>{doctor.name}</h2>
        <p><strong>Specialty:</strong> {doctor.specialization}</p>
        <p><strong>Status:</strong> {doctor.available ? "Available" : "Unavailable"}</p>
        <div className="button-group">
          <button onClick={onBook}>Book Appointment</button>
          <button onClick={onBack}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
