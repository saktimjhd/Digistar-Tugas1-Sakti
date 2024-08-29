import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Sakti Hands-On</h1>
      
      <Counter initialCount={0} />
      
    </>
  )
}

export default App
