const initialState = {
    name: "",
    picture: "",
    ingredients: "",
    directions: "",
    cookTime: "",
}

export default (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_DISH_FORM":
            const returnVal = {
                ...state,
                [action.formData.name]: action.formData.value
              }
              return returnVal
        case "RESET_DISH_FORM":
            return initialState
        case "SET_FORM_DATA_FOR_EDIT":
            return action.dishFormData
      default:
        return state
    }
  }
  