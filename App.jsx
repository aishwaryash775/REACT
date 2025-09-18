import { useState } from 'react'
import './App.css'

function App() {
  const [color1, setColor1] = useState("#ff0000")  // default red
  const [color2, setColor2] = useState("#0000ff")  // default blue

  return (
    <div 
      style={{ 
        backgroundImage: `linear-gradient(90deg, ${color1}, ${color2})`,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div>
        <input 
          type="color" 
          value={color1} 
          onChange={(val)=>setColor1(val.target.value)} 
        />
        <input 
          type="color" 
          value={color2} 
          onChange={(val)=>setColor2(val.target.value)} 
        />
      </div>

      <h1>{color1} | {color2}</h1>
    </div>
  )
}

export default App
