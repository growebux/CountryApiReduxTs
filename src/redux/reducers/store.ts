import { create } from 'domain'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

const initState={}

export default function makeStore(initialState=initState){

    const middlewares=[thunk]
    let composeEnhancers=compose

    //Redux Dev Tool Script Setup


    const store= createStore(reducer, initialState, compose(applyMiddleware(middlewares)))

    return store
}