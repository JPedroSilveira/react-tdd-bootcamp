import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, {shallow} from 'enzyme'
import App from './App';

Enzyme.configure({
  adapter: new EnzymeAdapter()
})

test('render without error', () => {
  const wrapper = shallow(<App/>)
  const app = wrapper.find("[data-test='app']")
  expect(app.length).toBe(1)

})

test('render increment button', () => {
  const wrapper = shallow(<App/>)
  const incrementButton = wrapper.find("[data-test='app-increment-button']")
  expect(incrementButton.length).toBe(1)
})

test('render counter display', () => {
  const wrapper = shallow(<App/>)
  const appCounter = wrapper.find("[data-test='app-counter']")
  expect(appCounter.length).toBe(1)
})

test('counter display starts with zero', () => {
  
})

test('clicking increment button increments counter display', () => {

})
