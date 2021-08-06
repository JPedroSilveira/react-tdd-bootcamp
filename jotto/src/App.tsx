import GuessBox from './component/guess_box'
import GuessedWords from './component/guessed_words'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CombinedReducers } from './reducer'
import GuessedWord from './type/GuessedWord'
import { secretWordAction } from './action'
import './App.css'

const App: React.FC = () => {
	const dispatch = useDispatch()
	const guessedWords = useSelector<CombinedReducers, GuessedWord[]>(
		state => state.guessedWords,
	)

	useEffect(() => {
		const load = async () => {
			dispatch(await secretWordAction())
		}
		load()
	}, [dispatch])

	return (
		<div className='app' data-test='app'>
			<h1 data-test='app-title'>Jotto</h1>
			<GuessBox data-test='app-guess-box' />
			<GuessedWords words={guessedWords} data-test='app-guessed-words' />
		</div>
	)
}

export default App
