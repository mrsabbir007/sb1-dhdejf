import React from 'react'

interface CardProps {
  color: string
  value: string
  isBack?: boolean
}

const Card: React.FC<CardProps> = ({ color, value, isBack = false }) => {
  const bgColor = {
    red: 'bg-red-600',
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    yellow: 'bg-yellow-500',
    black: 'bg-gray-800',
  }[color]

  const textColor = color === 'yellow' ? 'text-gray-800' : 'text-white'

  return (
    <div
      className={`w-32 h-48 ${
        isBack ? 'bg-gray-800' : bgColor
      } rounded-xl border-8 border-white flex items-center justify-center ${textColor} font-bold text-5xl shadow-2xl transform transition-transform hover:scale-105`}
    >
      {isBack ? (
        <div className="text-4xl font-extrabold text-yellow-400">UNO</div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="text-6xl mb-2">{value}</div>
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <div className={`text-4xl ${bgColor} ${textColor}`}>{value}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card