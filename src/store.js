import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import usersReducer from './reducers/users'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import myDishes from './reducers/myDishes'
import signupForm from './reducers/signupForm'
import dishForm from './reducers/dishForm'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    users: usersReducer,
    currentUser,
    loginForm,
    myDishes,
    signupForm,
    dishForm
  })
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))
  
  export default store
  