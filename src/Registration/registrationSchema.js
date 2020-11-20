import * as yup from 'yup';

let formSchema = yup.object().shape({
  first_name: yup.string().required("First Name is a required field."),
  last_name: yup.string().required("Last Name is a required field."),
  username: yup.string().required("username is a required field."),
  email: yup.string().required("Email is a required field.").email(),
  password: yup.string().required("Please enter your password"),
  // checkbox: yup.boolean().oneOf([true], "You obviously need to read the Terms!")
});

export default formSchema;