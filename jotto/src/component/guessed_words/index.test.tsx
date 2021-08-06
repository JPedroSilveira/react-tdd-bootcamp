import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttribute } from '../../test/Utils'
import GuessedWords, { GuessedWordsProps } from '.'
import { ShallowWrapper } from 'enzyme'

const oneGuessedWordProps: GuessedWordsProps = {
	words: [{ value: 'test', letterMatchCount: 3 }],
}

const threeGuessedWordProps: GuessedWordsProps = {
	words: [
		{ value: 'blueberry', letterMatchCount: 3 },
		{ value: 'watermelon', letterMatchCount: 3 },
		{ value: 'sugar', letterMatchCount: 3 },
	],
}

const emptyProps: GuessedWordsProps = {
	words: [],
}

const setup = (props: GuessedWordsProps) => {
	return shallow(<GuessedWords {...props} />)
}

describe('if there are no words guessed', () => {
	let wrapper: ShallowWrapper
	beforeEach(() => {
		wrapper = setup(emptyProps)
	})
	test('render without error', () => {
		const mainElement = findByTestAttribute(wrapper, 'guessed-words')
		expect(mainElement.length).toBe(1)
	})
	test('render instructions text to guess a word', () => {
		const instructionElement = findByTestAttribute(
			wrapper,
			'guessed-words-instruction',
		)
		expect(instructionElement.text().length).not.toBe(0)
	})
	test('render without table', () => {
		const tableElement = findByTestAttribute(wrapper, 'guessed-words-table')
		expect(tableElement.length).toBe(0)
	})
})

describe('if there are words guessed', () => {
	test('render without error', () => {
		const wrapper = setup(oneGuessedWordProps)
		const mainElement = findByTestAttribute(wrapper, 'guessed-words')
		expect(mainElement.length).toBe(1)
	})
	test('render guessed words section', () => {
		const wrapper = setup(oneGuessedWordProps)
		const guessedWordsSectionElement = findByTestAttribute(
			wrapper,
			'guessed-words-guessed-section',
		)
		expect(guessedWordsSectionElement.length).toBe(1)
	})
	test('correct number of guessed words (1)', () => {
		const wrapper = setup(oneGuessedWordProps)
		const guessedWordsTableItemElement = findByTestAttribute(
			wrapper,
			'guessed-words-guessed-section-table-item',
		)
		expect(guessedWordsTableItemElement.length).toBe(1)
	})
	test('correct number of guessed words (3)', () => {
		const wrapper = setup(threeGuessedWordProps)
		const guessedWordsTableItemElement = findByTestAttribute(
			wrapper,
			'guessed-words-guessed-section-table-item',
		)
		expect(guessedWordsTableItemElement.length).toBe(3)
	})
})
