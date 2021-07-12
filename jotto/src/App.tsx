import './App.css';
import Congrats from './component/congrats'
import GuessedWords from './component/guessed_words'

function App() {
  return (
    <div className="app" data-test='app'>
      <h1 data-test="app-title">Jotto</h1>
      <Congrats success={false} />
      <GuessedWords words={[
        {value: 'test', letterMatchCount: 1}
      ]} />
    </div>
  );
}

export default App;
