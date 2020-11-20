import React, { useState, useEffect } from 'react';
import schema from './addRecipeSchema'
import  * as yup from 'yup'
import axios from 'axios'

const initialFormValues = {
  title: '',
  source: '',
  ingredients: '',
  instructions: '',
  category: ''
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
  const [category, setCategory] = useState('')

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
      setCategory('')
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

  const onDropdownChange = (e) => {
    const { name, value} = e.target
    setCategory(value)
    setFormValues({
      ...formValues,
      [name]: value
    })
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
    <div className='addRecipeForm'>
      <form onSubmit={onSubmit} className='addRecipe'>
        <h1>Add Recipe</h1>

        
        <div className='addRecipeItems'>

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
            onChange={onDropdownChange}
            value={category}
            name='category'
            required
          >
            <option value=''>- Select an option -</option>
            <option value='appetizer'>appetizer</option>
            <option value='entree'>entree</option>
            <option value='sides'>sides</option>
            <option value='dessert'>dessert</option>
            <option value='snack'>snack</option>
            <option value='beverage'>beverage</option>
          </select>
        </label>

        <button disabled={disabled} id='submitBtn'>Submit</button>

        </div>
      </form>


    </div>

  )
}

export default AddRecipe;