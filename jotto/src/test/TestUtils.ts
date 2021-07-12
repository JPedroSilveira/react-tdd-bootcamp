import Enzyme, { ShallowWrapper } from 'enzyme'

export const findByTestAttribute = (wrapper: Enzyme.ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>, val: String) => {
    return wrapper.find(`[data-test='${val}']`)
}

export const clickEventArgs = {
    preventDefault() {}
}

export const inputEventArgs = (value: string) => ({ target: { value: value } })

export type ReactUseState = {
    <S>(initialState: S | (() => S)): [S, React.Dispatch<React.SetStateAction<S>>];
    <S = undefined>(): [S | undefined, React.Dispatch<React.SetStateAction<S | undefined>>];
}

export type EnzymeShallowWrapper = ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>