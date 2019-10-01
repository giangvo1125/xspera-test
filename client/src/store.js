import React from 'react'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import * as reducers from './reducers'
import logger from 'redux-logger'

const env = process.env.NODE_ENV || 'development'

export function configureStore(history, initialState) {

    const reducer = combineReducers({
        ...reducers,
        routing: routerReducer,
    })

    function getCompose() {
        if(env == 'production') {
            return compose(
                applyMiddleware(
                    thunkMiddleware,
                    routerMiddleware(history),
                )
            )
        } 
        else {
            return compose(
                applyMiddleware(
                    thunkMiddleware,
                    routerMiddleware(history),
                    logger
                )
            )
        }
    }

    const store = createStore(
        reducer,
        initialState,
        getCompose()
    )

  return store
}
