import { resetDishForm } from "./dishForm"
// synchronout actions 

export const setMyDishes = dishes => {
    return {
        type: "SET_MY_DISHES", 
        dishes
    }
}

export const clearDishes = () => {
    return {
      type: "CLEAR_DISHES"  
    }
}

export const addDish = dish => {
    return {
        type: "ADD_DISH",
        dish
    }
}

export const deleteDishSuccess = dishId => {
  return {
    type: "DELETE_DISH",
    dishId
  }
}

export const updateDishSuccess = dish => {
    return {
      type: "UPDATE_DISH",
      dish
    }
  }

// asynchronout actions 

export const getMyDishes = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/dishes", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            
        })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
              dispatch(setMyDishes(response.data))
          }
        })
        .catch(console.log)
    }
}

export const createDish = (dishData, history) => {
    return dispatch => {
        const sendableDishData = {
            name: dishData.name,
            picture: dishData.picture,
            ingredients: dishData.ingredients,
            directions: dishData.directions,
            cook_time: dishData.cookTime,
            user_id: dishData.userId
          }
        return fetch("http://localhost:3000/api/v1/dishes", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendableDishData)
        })
            .then(r => r.json())
            .then(resp => {
            if (resp.error) {
            alert(resp.error)
            } else {
            dispatch(addDish(resp.data))
            dispatch(resetDishForm())
            history.push(`/dishes/${resp.data.id}`)
           
        }
      })
      .catch(console.log)

  }
}


export const updateDish = (dishData, history) => {
    return dispatch => {
      const sendableDishData = {
        name: dishData.name,
        picture: dishData.picture,
        ingredients: dishData.ingredients,
        directions: dishData.directions,
        cook_time: dishData.cookTime
      }
      return fetch(`http://localhost:3000/api/v1/dishes/${dishData.dishId}`, {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sendableDishData)
      })
        .then(r => r.json())
        .then(resp => {
          if (resp.error) {
            alert(resp.error)
          } else {
            dispatch(updateDishSuccess(resp.data))
            history.push(`/dishes/${resp.data.id}`)
            // go somewhere else --> dish show?
            // add the new dish to the store
          }
        })
        .catch(console.log)
  
    }
  }

  export const deleteDish = (dishId, history) => {
    return dispatch => {
      return fetch(`http://localhost:3000/api/v1/dishes/${dishId}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(r => r.json())
        .then(resp => {
          if (resp.error) {
            alert(resp.error)
          } else {
            dispatch(deleteDishSuccess(dishId))
            history.push(`/dishes`)
            // go somewhere else --> dish show?
            // add the new trip to the store
          }
        })
        .catch(console.log)
  
    }
  
  }
  