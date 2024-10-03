import React, { useState } from 'react'
import { Calendar, Truck, User } from 'lucide-react'
import ReservationForm from './components/ReservationForm'
import DeliveryList from './components/DeliveryList'
import UserList from './components/UserList'

function App() {
  const [activeTab, setActiveTab] = useState('reservations')

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Viandas Management</h1>
      </header>
      <nav className="bg-white shadow-md">
        <ul className="flex">
          <li>
            <button
              className={`flex items-center px-4 py-2 ${activeTab === 'reservations' ? 'bg-blue-100 text-blue-600' : ''}`}
              onClick={() => setActiveTab('reservations')}
            >
              <Calendar className="mr-2" size={20} />
              Reservations
            </button>
          </li>
          <li>
            <button
              className={`flex items-center px-4 py-2 ${activeTab === 'deliveries' ? 'bg-blue-100 text-blue-600' : ''}`}
              onClick={() => setActiveTab('deliveries')}
            >
              <Truck className="mr-2" size={20} />
              Deliveries
            </button>
          </li>
          <li>
            <button
              className={`flex items-center px-4 py-2 ${activeTab === 'users' ? 'bg-blue-100 text-blue-600' : ''}`}
              onClick={() => setActiveTab('users')}
            >
              <User className="mr-2" size={20} />
              Users
            </button>
          </li>
        </ul>
      </nav>
      <main className="container mx-auto mt-8 p-4">
        {activeTab === 'reservations' && <ReservationForm />}
        {activeTab === 'deliveries' && <DeliveryList />}
        {activeTab === 'users' && <UserList />}
      </main>
    </div>
  )
}

export default App