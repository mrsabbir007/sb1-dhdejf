import React from 'react'
import Card from './Card'

const CenterArea: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-8xl font-extrabold text-white mb-8 text-shadow">UNO</div>
      <div className="relative">
        <div className="absolute -left-24 -rotate-15 transform hover:scale-105 transition-transform">
          <Card color="red" value="7" />
        </div>
        <div className="absolute -right-24 rotate-15 transform hover:scale-105 transition-transform">
          <Card color="blue" value="1" />
        </div>
        <div className="transform hover:scale-105 transition-transform">
          <Card color="green" value="3" />
        </div>
      </div>
      <div className="mt-8 transform hover:scale-105 transition-transform">
        <Card color="black" value="UNO" isBack />
      </div>
    </div>
  )
}

export default CenterArea