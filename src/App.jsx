import { useState } from 'react'
import './index.css'
import Visualizer from './components/Visualizer'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-4">Sorting Algorithm Visualizer</h1>
      <Visualizer />
    </div>
  )
}

export default App
