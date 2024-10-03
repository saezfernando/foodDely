import React from 'react'
import { Truck } from 'lucide-react'

const DeliveryList: React.FC = () => {
  // Mock data for deliveries
  const deliveries = [
    { id: 1, name: 'John Doe', address: '123 Main St', status: 'In Progress' },
    { id: 2, name: 'Jane Smith', address: '456 Elm St', status: 'Delivered' },
    { id: 3, name: 'Bob Johnson', address: '789 Oak St', status: 'Pending' },
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Deliveries</h2>
      <ul className="divide-y divide-gray-200">
        {deliveries.map((delivery) => (
          <li key={delivery.id} className="py-4 flex items-center">
            <Truck className="mr-3 text-blue-500" size={24} />
            <div>
              <p className="text-sm font-medium text-gray-900">{delivery.name}</p>
              <p className="text-sm text-gray-500">{delivery.address}</p>
            </div>
            <span className={`ml-auto px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              delivery.status === 'Delivered' ? 'bg-green-100 text-green-800' :
              delivery.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {delivery.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DeliveryList