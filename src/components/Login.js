import React from "react";
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"
import { Form, Button } from "react-bootstrap";





    const Login = ({ loginFormData, updateLoginForm, login, history}) => {

        const handleInputChange = event => {
            const {name,value} = event.target
            const updatedFormInfo = {
                ...loginFormData,
                [name]: value
            }
            updateLoginForm(updatedFormInfo)
        }

        const handleSubmit = event => {
            event.preventDefault()
            login(loginFormData, history)
          }

    return (
      



<Form onSubmit={handleSubmit}><br></br>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Username</Form.Label>
  <Form.Control type="text" placeholder="Enter username" value={loginFormData.username}
         name="username" onChange={handleInputChange} />
  <Form.Text className="text-muted">
    We'll never share your username with anyone else.
  </Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" value={loginFormData.password}
         name="password" onChange={handleInputChange} />
</Form.Group>

<Button variant="primary" type="submit">
  Log In
</Button>
</Form>










    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, {updateLoginForm, login} )(Login)