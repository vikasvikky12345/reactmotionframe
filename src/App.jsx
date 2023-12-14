import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Background from './components/Background'
import './App.css'
import Foreground from './components/Foreground'

function App() {
  return (
    <>
    <div className=' realtive w-full h-full bg-zinc-800'>
      <Background/>
      <Foreground/>
    </div>
    </>
  )
}

export default App
