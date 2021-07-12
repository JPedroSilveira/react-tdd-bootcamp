import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, {shallow} from 'enzyme'
import App from './App';

Enzyme.configure({
  adapter: new EnzymeAdapter()
})

const setup = () => shallow(<App/>)

const findByTestAttribute = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('render without error', () => {
  const wrapper = setup()
  const app = findByTestAttribute(wrapper, 'app')
  expect(app.length).toBe(1)

})

test('render increment button', () => {
  const wrapper = setup()
  const incrementButton = findByTestAttribute(wrapper, 'app-increment-button')
  expect(incrementButton.length).toBe(1)
})

test('render counter display', () => {
  const wrapper = setup()
  const appCounter = findByTestAttribute(wrapper, 'app-counter')
  expect(appCounter.length).toBe(1)
})

test('counter display starts with zero', () => {
  const wrapper = setup()
  const appCounterValue = findByTestAttribute(wrapper, 'app-counter-value')
  expect(appCounterValue.text()).toBe("0")
})

test('clicking increment button increments counter display', () => {
  const wrapper = setup()

  const button = findByTestAttribute(wrapper, 'app-increment-button')
  button.simulate('click')

  const appCounterValue = findByTestAttribute(wrapper, 'app-counter-value')
  expect(appCounterValue.text()).toBe("1")
})

test('render decrement button', () => {
  const wrapper = setup()

  const button = findByTestAttribute(wrapper, 'app-decrement-button')
  expect(button.length).toBe(1)
})

test('clicking decrement button decreases counter display', () => {
  const wrapper = setup()

  const incrementButton = findByTestAttribute(wrapper, 'app-increment-button')
  incrementButton.simulate('click')

  const decrementButton = findByTestAttribute(wrapper, 'app-decrement-button')
  decrementButton.simulate('click')

  const appCounterValue = findByTestAttribute(wrapper, 'app-counter-value')
  expect(appCounterValue.text()).toBe("0")
})

test('clicking decrement button with zero value does not decrement display counter', () => {
  const wrapper = setup()

  const decrementButton = findByTestAttribute(wrapper, 'app-decrement-button')
  decrementButton.simulate('click')

  const appCounterValue = findByTestAttribute(wrapper, 'app-counter-value')
  expect(appCounterValue.text()).toBe("0")
})

test('clicking decrement button with zero value shows error message', () => {
  const wrapper = setup()

  const decrementButton = findByTestAttribute(wrapper, 'app-decrement-button')
  decrementButton.simulate('click')

  const errorMessage = findByTestAttribute(wrapper, 'app-error-message')
  expect(errorMessage.length).toBe(1)
})

test('decrement non-zero value does not show erro message', () => {
  const wrapper = setup()
  
  const incrementButton = findByTestAttribute(wrapper, 'app-increment-button')
  incrementButton.simulate('click')
  incrementButton.simulate('click')

  const decrementButton = findByTestAttribute(wrapper, 'app-decrement-button')
  decrementButton.simulate('click')

  const errorMessage = findByTestAttribute(wrapper, 'app-error-message')
  expect(errorMessage.length).toBe(0)
})

test('remove non-negative error when increment button is clicked', () => {
  const wrapper = setup()
  
  const decrementButton = findByTestAttribute(wrapper, 'app-decrement-button')
  decrementButton.simulate('click')

  const incrementButton = findByTestAttribute(wrapper, 'app-increment-button')
  incrementButton.simulate('click')

  const errorMessage = findByTestAttribute(wrapper, 'app-error-message')
  expect(errorMessage.length).toBe(0)
})