const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
      case "SET_MY_DISHES":
        return action.dishes
      case "ADD_DISH":
        return state.concat(action.dish)
      case "UPDATE_DISH":
        return state.map(dish => dish.id === action.dish.id ? action.dish : dish)
      case "DELETE_DISH":
        return state.filter(dish => dish.id === action.dishId ? false : true)
      case "CLEAR_DISHES":
        return initialState
      default:
        return state
    }
  }
  