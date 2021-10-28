import React from 'react';
import DishForm from './DishForm'
import { createDish } from '../actions/myDishes'
import { connect } from 'react-redux'

const NewDishFormWrapper = ({ history, createDish }) => {

  const handleSubmit = (formData, userId) => {
    createDish({
      ...formData,
      userId
    }, history)
  }
  return  <DishForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createDish })(NewDishFormWrapper);