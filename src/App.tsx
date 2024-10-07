import React from 'react'
import GameBoard from './components/GameBoard'
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-green-400 flex flex-col">
      <Header />
      <GameBoard />
    </div>
  )
}

export default App