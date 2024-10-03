import React, { useState } from 'react'

const ReservationForm: React.FC = () => {
  const [reservation, setReservation] = useState({
    name: '',
    date: '',
    meal: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Reservation submitted:', reservation)
    // Here you would typically send the reservation to your backend
    setReservation({ name: '', date: '', meal: '' })
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            value={reservation.name}
            onChange={(e) => setReservation({ ...reservation, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            id="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            value={reservation.date}
            onChange={(e) => setReservation({ ...reservation, date: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="meal" className="block text-sm font-medium text-gray-700">Meal</label>
          <select
            id="meal"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            value={reservation.meal}
            onChange={(e) => setReservation({ ...reservation, meal: e.target.value })}
            required
          >
            <option value="">Select a meal</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Make Reservation
        </button>
      </form>
    </div>
  )
}

export default ReservationForm