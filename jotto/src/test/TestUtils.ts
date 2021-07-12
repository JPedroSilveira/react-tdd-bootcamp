import Enzyme from 'enzyme'

export const findByTestAttribute = (wrapper: Enzyme.ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>, val: String) => {
    return wrapper.find(`[data-test='${val}']`)
}