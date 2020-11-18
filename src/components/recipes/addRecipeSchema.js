import * as yup from 'yup';

export default yup.object().shape({
  title: yup.string()
    .required('Must include a title'),
  source: yup.string() 
    .required('Source is required'),
  ingredients: yup.string()  
    .required('Ingredients are required'),
  instructions: yup.string()
    .required('Instructions are required'),
  category: yup.string()
    .ensure()
    .required('Picking a category is required')
    .notOneOf([''])

})