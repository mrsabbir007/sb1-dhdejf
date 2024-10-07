import React, { useState } from 'react'
import Card from './Card'

interface CardType {
  color: string
  value: string
}

const PlayerHand: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>([
    { color: 'red', value: '+4' },
    { color: 'blue', value: '0' },
    { color: 'yellow', value: '9' },
    { color: 'green', value: '0' },
    { color: 'red', value: '9' },
    { color: 'blue', value: '+2' },
  ])
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null)
  const [animationState, setAnimationState] = useState<'initial' | 'top' | 'floor'>('initial')

  const handleCardClick = (card: CardType, index: number) => {
    setSelectedCard(card)
    setAnimationState('top')
    
    // Remove the card from the player's hand
    const newCards = cards.filter((_, i) => i !== index)
    setCards(newCards)

    // Animate to the top of the screen
    setTimeout(() => {
      setAnimationState('floor')
    }, 500)

    // Reset the animation state after the card has moved to the floor
    setTimeout(() => {
      setAnimationState('initial')
      setSelectedCard(null)
    }, 1000)
  }

  return (
    <>
      {selectedCard && (
        <div
          className={`fixed left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out z-50
            ${animationState === 'initial' && 'bottom-20 scale-100 rotate-0'}
            ${animationState === 'top' && 'top-20 scale-150 rotate-12'}
            ${animationState === 'floor' && 'top-1/2 -translate-y-1/2 scale-100 rotate-0'}`}
        >
          <Card color={selectedCard.color} value={selectedCard.value} />
        </div>
      )}
      <div className="flex justify-center items-end space-x-[-60px] mb-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="transform hover:translate-y-[-20px] transition-transform cursor-pointer"
            onClick={() => handleCardClick(card, index)}
          >
            <Card color={card.color} value={card.value} />
          </div>
        ))}
      </div>
    </>
  )
}

export default PlayerHand