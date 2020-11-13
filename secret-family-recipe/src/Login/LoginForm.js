import React, { useState, useEffect } from 'react';
import './LoginForm.less';
import schema from './loginSchema'
import  * as yup from 'yup'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'

const initialFormValues = {
  email: '',
  password: ''
}
const initialFormErrors = {
  email: '',
  password: ''
}
const initialUsers = []
const initialDisabled = true




const LoginForm = () => {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewUsers = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(response => {
        setUsers([...users, response.data])
      })
      .catch(error => {
        // debugger 
        console.log(error)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }
    const validate = (name, value) => {
        //yup validation schema
    }

    const inputChange = (name, value) => {
      validate(name, value)
      setFormValues({
        ...formValues,
        [name]: value
      })
    }

    const formSubmit = () => {
      const newUser = {
        email: formValues.email.trim(),
        password: formValues.password.trim()
      }
      postNewUsers(newUser)
    }
  





  return (
    null
  )
}

export default LoginForm