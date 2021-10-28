//sync actions

export const updateDishForm = ( name, value ) => {
    const formData = { name, value }
    return{
        type: "UPDATE_DISH_FORM",
        formData
    }
}

export const resetDishForm = () => {
    return {
      type: "RESET_DISH_FORM"
    }
  }


export const setFormDataForEdit = dish => {
  const dishFormData = {
    name: dish.attributes.name,
    picture: dish.attributes.picture,
    ingredients: dish.attributes.ingredients,
    directions: dish.attributes.directions,
    cookTime: dish.attributes.cook_time
  }

  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    dishFormData
  }
}