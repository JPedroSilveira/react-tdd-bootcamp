import Enzyme , { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from './App'
import { findByTestAttribute } from './test/TestUtils'

Enzyme.configure({
    adapter: new EnzymeAdapter()
})

const setup = () => {
    return shallow(<App />)
}

test('renders without error', () => {
  const wrapper = setup()
  const mainElement = findByTestAttribute(wrapper, 'app')
  expect(mainElement.length).toBe(1)
});

test('renders title', () => {
    const wrapper = setup()
    const titleElement = findByTestAttribute(wrapper, 'app-title')
    expect(titleElement.text().length).not.toBe(0)
});