import React from 'react';
import DishForm from './DishForm'
import { updateDish, deleteDish } from '../actions/myDishes'
import { setFormDataForEdit, resetDishForm } from '../actions/dishForm'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';

class EditDishFormWrapper extends React.Component {
  componentDidMount(){
    this.props.dish && this.props.setFormDataForEdit(this.props.dish)
  }

  componentDidUpdate(prevProps) {
    this.props.dish && !prevProps.dish && this.props.setFormDataForEdit(this.props.dish)
  }

  componentWillUnmount() {
    this.props.resetDishForm()
  }

  handleSubmit = (formData) => {
    const { updateDish, dish, history } = this.props
    updateDish({
      ...formData,
      dishId: dish.id
    }, history)
  }

  render() {
    const { history, deleteDish, dish } = this.props
    const dishId = dish ? dish.id : null
    return  <>
              <DishForm editMode handleSubmit={this.handleSubmit} />
              <br/>
              <Button variant="primary" size="md" onClick={()=>deleteDish(dishId, history)}>Delete Recipe</Button>
            </>
  }
};

export default connect(null, { updateDish, setFormDataForEdit, resetDishForm, deleteDish })(EditDishFormWrapper);