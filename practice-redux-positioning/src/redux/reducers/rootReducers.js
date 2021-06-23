import { combineReducers as combiner } from 'redux'

import counterReducer from './counterReducer'

const rootReducers = combiner({
    counter: counterReducer,
})

export default rootReducers