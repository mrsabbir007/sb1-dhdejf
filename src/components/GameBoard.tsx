import React from 'react'
import PlayerHand from './PlayerHand'
import CenterArea from './CenterArea'
import OpponentHand from './OpponentHand'

const GameBoard: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col justify-between p-4 relative">
      <OpponentHand name="Nova" cardCount={7} position="top" />
      <div className="flex justify-between items-center flex-1 my-4">
        <OpponentHand name="Kiara" cardCount={5} position="left" />
        <CenterArea />
        <OpponentHand name="Nash" cardCount={5} position="right" />
      </div>
      <PlayerHand />
    </div>
  )
}

export default GameBoard