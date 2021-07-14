import { shallow } from 'enzyme'
import Congrats from './index'
import { findByTestAttribute } from '../../test/Utils'

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


