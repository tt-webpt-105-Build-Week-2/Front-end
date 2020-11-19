import * as yup from 'yup';

export default yup.object().shape({
  username: yup.string()
    .required('Username is required'),
  password: yup.string()
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters long')
})