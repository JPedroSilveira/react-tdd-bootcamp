import { shallow } from 'enzyme'
import Congrats, { CongratsProps } from './index'
import { findByTestAttribute } from '../../test/TestUtils'

const setup = (props: CongratsProps) => {
    return shallow(<Congrats {...props} />)
}

test('renders without error', () => {
    const wrapper = setup({
        success: true
    })
    const congratsElement = findByTestAttribute(wrapper, 'congrats')
    expect(congratsElement.length).toBe(1)
})

test('renders empty congrats message when success prop is false', () => {
    const wrapper = setup({
        success: false
    })
    const textElement = findByTestAttribute(wrapper, 'congrats-message')
    expect(textElement.text().length).toBe(0)
})

test('renders non-empty congrats message when success prop is true', () => {
    const wrapper = setup({
        success: true
    })
    const textElement = findByTestAttribute(wrapper, 'congrats-message')
    expect(textElement.text().length).not.toBe(0)
})



