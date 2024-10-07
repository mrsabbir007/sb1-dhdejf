import React from 'react'
import { Clock, Settings, Wifi } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-2 flex justify-between items-center">
      <div className="flex items-center">
        <Clock className="w-6 h-6 mr-2" />
        <span>03:53</span>
      </div>
      <div className="text-xl font-bold">UNO</div>
      <div className="flex items-center">
        <Wifi className="w-6 h-6 mr-2" />
        <Settings className="w-6 h-6" />
      </div>
    </header>
  )
}

export default Header