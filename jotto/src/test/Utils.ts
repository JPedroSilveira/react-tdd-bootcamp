import { ReactWrapper, ShallowWrapper } from 'enzyme'
import { AnyAction, applyMiddleware, createStore, EmptyObject, Store } from 'redux'
import rootReducer, { CombinedReducers } from '../reducer'
import { middlewares } from '../reducer/ConfigureStore'

export const storeFactory = (initialState: CombinedReducers): Store<EmptyObject & CombinedReducers, AnyAction> => {
    return createStore(rootReducer, initialState, applyMiddleware(...middlewares))
}

export const findByTestAttribute = (wrapper: EnzymeShallowWrapper | EnzymeMountWrapper, val: string) => {
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

export type EnzymeMountWrapper = ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>