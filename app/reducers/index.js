import { combineReducers } from 'redux'
import exercisesReducer from './exercises'
import isFetchingReducer from './isFetching'

const rootReducer = combineReducers({
  exercises: exercisesReducer,
  isFetching: isFetchingReducer
})

export default rootReducer
