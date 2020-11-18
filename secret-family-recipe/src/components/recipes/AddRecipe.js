import React, { useState, useEffect } from 'react';
import schema from './addRecipeSchema'
import  * as yup from 'yup'
import axios from 'axios'

const initialFormValues = {
  title: '',
  source: '',
  ingredients: '',
  instructions: '',
  category: {
    appetizer: false, 
    entree: false,
    sides: false, 
    dessert: false, 
    snack: false, 
    beverage: false
  }
}
const initialFormErrors = {
  title: '',
  source: '',
  ingredients: '',
  instructions: '',
  category: ''
}
const initialRecipes = []
const initialDisabled = true

const AddRecipe = () => {
  const [recipes, setRecipes] = useState(initialRecipes)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewRecipe = newRecipe => {
    axios.post('https://reqres.in/api/users:', newRecipe)
      .then(response => {
        console.log(response)
        setRecipes([response.data, ...recipes])
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

    const validate = (name, value) => {
      //for yup schema
      yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      .catch(error => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors
        })
      })
    }

    const onChange = event => {
      const { name, value } = event.target
      change(name, value)
    }
  
    const change = (name, value) => {
      validate(name, value)
      setFormValues({
        ...formValues,
        [name]: value
      })
    } 

    const onSubmit = event => {
      event.preventDefault()
      submit()
  }

  const submit = () => {
    const newRecipe = {
      title: formValues.title.trim(),
      source: formValues.source.trim(),
      ingredients: formValues.ingredients.trim(),
      instructions: formValues.instructions.trim(),
      category: formValues.category
    }
    postNewRecipe(newRecipe)
  }

  useEffect (() => {
    console.log(formValues)
  }, [formValues])

  useEffect (() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])



  return(
    <div>
      <form onSubmit={onSubmit} className='addRecipe'>
        <h1>Add Recipe Here!</h1>

        {/* title */}
        <label>Title:     
        <input 
        value={formValues.title}
        onChange={onChange}
        name='title'
        type='text'
        />
        </label>

        {/* source */}
        <label>Source:     
        <input 
        value={formValues.source}
        onChange={onChange}
        name='source'
        type='text'
        />
        </label>

        {/* ingredients */}
        <label>Ingredients:     
        <textarea 
        value={formValues.ingredients}
        onChange={onChange}
        name='ingredients'
        type='text'
        />
        </label>

        {/* instructions */}
        <label>Instructions:     
        <textarea 
        value={formValues.instructions}
        onChange={onChange}
        name='instructions'
        type='text'
        />
        </label>

        {/* category */}
        <label>Category:       
        <select 
        onChange={onChange}
        value={formValues.category}
        name='category'
        >
           {/* <option>- Select an option -</option> */}
            <option value='appetizer'>appetizer</option>
            <option value='entree'>entree</option>
            <option value='sides'>sides</option>
            <option value='dessert'>dessert</option>
            <option value='snack'>snack</option>
            <option value='beverage'>beverage</option>
        </select>
</label>

        <button disabled={disabled} id='submitBtn'>Submit</button>
      </form>


    </div>

  )
}

export default AddRecipe;