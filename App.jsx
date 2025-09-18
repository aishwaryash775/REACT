import { useState } from 'react'

import './App.css'

function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <body
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        padding: "20px",
        textAlign: "center",
      
      }}
    >
      {!showDashboard ? (
       <button onClick={() => setShowDashboard(true)}>
          Open Dashboard
        </button>
      ) : (
        <div>
          <h1 >My Dashboard</h1>
          <button onClick={() => setDark(!dark)}>
            {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>

        </div>
      )}
    </body>
  
  );
}

export default App;
