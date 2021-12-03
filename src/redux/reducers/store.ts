import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

const initState={}

export default function makeStore(initialState=initState){

    const middlewares={thunk}
}