import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" data-test="app">
      <h1 data-test="app-counter"> The counter is current 0</h1>
      <button data-test="app-increment-button">Increment</button>
    </div>
  );
}

export default App;
