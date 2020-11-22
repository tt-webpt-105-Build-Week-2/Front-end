import React, { useEffect, useState } from "react";
import * as yup from "yup";
import formSchema from "./registrationSchema";
import "./RegistrationForm.css";
import axios from 'axios'
import { useHistory } from 'react-router-dom';

function RegistrationForm(props) {
  const initialForm = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
  };
  const [formValues, setFormValues] = useState(initialForm);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  let history = useHistory();

  const submitForm = (event) => {
    event.preventDefault();
    // const value =
    //   event.target.type === "checkbox"
    //     ? event.target.checked
    //     : event.target.value;
    // setFormValues({ ...formValues, [event.target.name] });
    console.log(formValues)

    axios
      .post('https://secret-family-recipes-6.herokuapp.com/auth/register', formValues)
      .then(res => {
        console.log(res)
        // props.postLogin(formValues)
        history.push('/login')
      })
      .catch(err => {
        console.log(err)
      })

  };

  function inputChange(event) {
    /* Destructuring the  name and value from the form inputs. */
    const { name, value } = event.target;
    /* 'reach' grabs requirements for the form label equal to form event in formSchema (e.g. name, email, password). 
        'validate' checks that the value/user input is valid-based on requirements in formSchema.
        'then' is what happens when successful (in this case, nothing, since there is nothing in the ()). 
        'catch' is what happens when the inputs are not valid per the formSchema (e.g. logs the message in the .required()). */
    // if (name === "checkbox") {
    //   yup
    //     .reach(formSchema, name)
    //     .validate(event.target.checked)
    //     .then(() => { })
    //     .catch((error) => { });

    //   setFormValues({
    //     ...formValues,
    //     [name]: event.target.checked,
    //   });
    // } else {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => { })
      .catch((error) => { });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  }
  // }

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div>
      <div>
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap"
          rel="stylesheet"
        />
      </div>
      <form className="form" onSubmit={submitForm}>
        <h1 className="head1">Register</h1>
        <div className='input-wrapper'>
          <div className="name">
            <label>First Name:
          <input
                type="text"
                name="first_name"
                id="first_name"
                value={formValues.first_name}
                placeholder="John"
                onChange={inputChange}
              />
            </label>

            <label>Last Name:
          <input
                type="text"
                name="last_name"
                id="last_name"
                value={formValues.last_name}
                placeholder="Doe"
                onChange={inputChange}
              />
            </label>

            <label>Username:
          <input
                type="text"
                name="username"
                id="username"
                value={formValues.username}
                placeholder="bigjoe"
                onChange={inputChange}
              />
            </label>
          </div>

          <div className="email">
            <label>Email:
          <input
                type="email"
                name="email"
                id="email"
                value={formValues.email}
                placeholder="johndoe@email.com"
                onChange={inputChange}
              />
            </label>
          </div>

          <div className="password">
            <label>Password:
          <input
                type="password"
                name="password"
                id="password"
                value={formValues.password}
                placeholder="Runner124##"
                onChange={inputChange}
              />
            </label>
          </div>
        </div>

        {/* <div className="terms">
          <a href="#">Terms of Service</a>
          <input
            id="check"
            type="checkbox"
            name="checkbox"
            value={formValues.checkbox}
            onChange={inputChange}
          /> */}
        {/* </div> */}
        <div className="submit">
          <button type="submit" disabled={buttonDisabled}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;

