import React, { useState, useEffect } from 'react';
import './LoginForm.css';
import schema from './loginSchema'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import jwt from 'jwt-decode'



const initialFormValues = {
  username: '',
  password: ''
}
const initialFormErrors = {
  username: '',
  password: ''
}
const initialUsers = []
const initialDisabled = true

const LoginForm = () => {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  let history = useHistory()

  const postNewUsers = newUser => {
    axios.post('https://secret-family-recipes-6.herokuapp.com/auth/login', newUser)
      .then(response => {
        setUsers([...users, response.data])
        localStorage.setItem("token", response.data.token);
        console.log('login successful', response.data)
        history.push('/recipes');
      })
      .catch((error) => {
        // debugger
        console.log(error);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };
  const validate = (name, value) => {
    //yup validation schema
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((error) => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0],
        });
      });
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    change(name, value);
  };

  const change = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = event => {
    event.preventDefault()
    submit()
    // change route to home page, dashboard
  }

  const submit = () => {
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim()
    }
    postNewUsers(newUser)
  }

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div>
      <form className='form2' onSubmit={onSubmit}>
        <h1>Login</h1>

        <div>
          <div>{formErrors.username}</div>
          <div>{formErrors.password}</div>
        </div>

        <div className="email2">
          <label>Username:     </label>
          <input
            value={formValues.username}
            onChange={onChange}
            name='username'
            type='username'
          />
        </div>

        <div className="password2">
          <label>Password:     </label>
          <input
            value={formValues.password}
            onChange={onChange}
            autoComplete='true'
            suggested="current-password"
            name='password'
            type='password'
          />
        </div>

        <button disabled={disabled} id='button2'>Submit</button>

        {/* new users click here, or something else, need to sign up? */}
        <div className='loginLink'>
          <Link to='/register'>Not a member? Register here.</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

