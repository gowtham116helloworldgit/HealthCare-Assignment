import { useState } from "react"

interface Props {
  doctorName: string
  onSubmit: () => void
}

const AppointmentForm = ({ doctorName, onSubmit }: Props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [datetime, setDatetime] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Appointment booked with ${doctorName}!`)
    onSubmit()
  }

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h2>Book Appointment with {doctorName}</h2>
      <input type="text" placeholder="Patient Name" value={name} onChange={e => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="datetime-local" value={datetime} onChange={e => setDatetime(e.target.value)} required />
      <button type="submit">Confirm Booking</button>
    </form>
  )
}

export default AppointmentForm
