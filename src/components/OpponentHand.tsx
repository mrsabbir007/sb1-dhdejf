import React from 'react'
import { User } from 'lucide-react'

interface OpponentHandProps {
  name: string
  cardCount: number
  position: 'top' | 'left' | 'right'
}

const OpponentHand: React.FC<OpponentHandProps> = ({ name, cardCount, position }) => {
  const containerClass = {
    top: 'flex flex-col items-center',
    left: 'flex flex-col items-center h-full justify-center',
    right: 'flex flex-col items-center h-full justify-center',
  }[position]

  const cardsClass = {
    top: 'flex space-x-[-30px] mb-4',
    left: 'flex space-x-[-30px] mb-4 -rotate-90',
    right: 'flex space-x-[-30px] mb-4 rotate-90',
  }[position]

  const cardClass = 'w-24 h-36'

  const nameClass = {
    top: 'mb-2',
    left: 'mb-2 -rotate-90',
    right: 'mb-2 rotate-90',
  }[position]

  const avatarClass = {
    top: 'mb-2',
    left: 'mb-2 -rotate-90',
    right: 'mb-2 rotate-90',
  }[position]

  return (
    <div className={containerClass}>
      <div className={`flex flex-col items-center ${position !== 'top' ? 'mb-4' : ''}`}>
        <div className={`bg-yellow-400 rounded-full p-2 ${avatarClass}`}>
          <User className="w-10 h-10 text-white" />
        </div>
        <div className={`text-white font-bold text-xl ${nameClass}`}>{name}</div>
      </div>
      <div className={cardsClass}>
        {Array.from({ length: cardCount }).map((_, index) => (
          <div
            key={index}
            className={`${cardClass} bg-gray-800 rounded-xl border-4 border-white shadow-lg transform transition-transform hover:scale-105`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-3xl font-extrabold text-yellow-400">UNO</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OpponentHand