import React from "react";
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"
import { Form, Button } from "react-bootstrap";



    const Signup = ({ signupFormData, updateSignupForm, signup, history}) => {

        const handleInputChange = event => {
            const {name,value} = event.target
            const updatedFormInfo = {
                ...signupFormData,
                [name]: value
            }
            updateSignupForm(updatedFormInfo)
        }

        const handleSubmit = event => {
            event.preventDefault()
            signup(signupFormData, history)
          }
        


    return (
       


<Form onSubmit={handleSubmit}><br></br>

<Form.Group className="mb-3" controlId="formBasicName">
  <Form.Label>Name</Form.Label>
  <Form.Control type="text" placeholder="Enter name" value={signupFormData.name}
         name="name" onChange={handleInputChange} />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Username</Form.Label>
  <Form.Control type="text" placeholder="Enter username" value={signupFormData.username}
         name="username" onChange={handleInputChange} />
  <Form.Text className="text-muted">
    We'll never share your username with anyone else.
  </Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" value= {signupFormData.password}
         name="password" onChange={handleInputChange} />
</Form.Group>

<Button variant="primary" type="submit">
  Sign Up
</Button>
</Form>












    )
}






const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, {updateSignupForm, signup} )(Signup)