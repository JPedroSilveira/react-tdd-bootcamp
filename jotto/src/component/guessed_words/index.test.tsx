import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttribute } from '../../test/TestUtils'
import GuessedWords, { GuessedWordsProps } from '.'
import { ShallowWrapper } from 'enzyme'

const defaultProps: GuessedWordsProps = {
    words: [
        { value: 'test', letterMatchCount: 3 }
    ]
}

const emptyProps: GuessedWordsProps = {
    words: []
}

const setup = (props?: GuessedWordsProps) => {
    if (props) {
        return shallow(<GuessedWords {...props} />)
    }

    return shallow(<GuessedWords {...defaultProps} />)
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
        const instructionElement = findByTestAttribute(wrapper, 'guessed-words-instruction')
        expect(instructionElement.length).toBe(1)
    })
    test('render without table', () => {
        const tableElement = findByTestAttribute(wrapper, 'guessed-words-table')
        expect(tableElement.length).toBe(0)
    })
})

describe('if there are words guessed', () => {

})