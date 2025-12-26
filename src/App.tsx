import { useState } from 'react'
import roseLogo from '/rose.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={roseLogo} className="logo" alt="Rose logo" />
      </div>
      <h1>About Rose Lindauer</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
