import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 data-testid="web__title">Stefanus Airlangga</h1>
      <div className="card gap-4">
        <p>+1 Like Button & -1 Like Button</p>
        {/* Plus */}
        <button 
          data-testid="button__counter" 
          onClick={() => setCount((count) => count + 1)}
          style={{ marginRight: '16px' }}
        >
          {count}
        </button>

        <button 
          data-testid="button__minus" 
          onClick={() => setCount((count) => count - 1)}
        >
          {count}
        </button>
      </div>
    </>
  )
}

export default App
