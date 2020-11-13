import * as yup from 'yup';

export default yup.object().shape({
  email: yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: yup.string() 
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters long')
})