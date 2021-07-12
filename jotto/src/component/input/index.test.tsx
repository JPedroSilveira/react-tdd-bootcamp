import { shallow } from 'enzyme'
import Input from '.'
import { findByTestAttribute } from '../../test/TestUtils'

const setup = () => {
    return shallow(
        <Input />
    )
}
test('render without error', () => {
    const wrapper = setup()
    const mainElement = findByTestAttribute(wrapper, 'input')
    expect(mainElement.length).toBe(1)
})