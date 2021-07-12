import React, { useState } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [withError, setWithError] = useState(false)

  const handleIncrementCounter = () => {
    removeError()
    setCount(count + 1)
  }

  const handleDecrementCounter = () => {
    removeError()
    if (count > 0) {
      setCount(count - 1)
    } else {
      setWithError(true)
    }
  }

  const removeError = () => {
    setWithError(false)
  }

  return (
    <div className="App" data-test="app">
      <h1 data-test="app-counter"> The counter is current <span data-test="app-counter-value">{count}</span></h1>
      {withError && <p data-test="app-error-message">Cannot decrement to negative values</p>}
      <button data-test="app-increment-button" onClick={handleIncrementCounter}>Increment</button>
      <button data-test="app-decrement-button" onClick={handleDecrementCounter}>Decrement</button>
    </div>
  );
}

export default App;
