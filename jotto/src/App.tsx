import './App.css';
import GuessBox from './component/guess_box'
import GuessedWords from './component/guessed_words'

function App() {
  return (
    <div className='app' data-test='app'>
      <h1 data-test="app-title">Jotto</h1>
      <GuessBox success={false} data-test='app-guess-box'/>
      <GuessedWords words={[
        {value: 'test', letterMatchCount: 1}
      ]} data-test='app-guessed-words'/>
    </div>
  );
}

export default App;
