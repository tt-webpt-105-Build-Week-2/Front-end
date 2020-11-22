import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import schema from './addRecipeSchema'
import * as yup from 'yup'
import axiosWithAuth from '../../utils/axiosWithAuth'
import { Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'
import './AddRecipe.css'

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
  let history = useHistory()

  const postNewRecipe = newRecipe => {
    axiosWithAuth().post('/recipes', newRecipe)
      .then(response => {
        console.log(response)
        setRecipes([response.data, ...recipes])
        history.push('/recipes');
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
    const { name, value } = e.target
    setCategory(value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  useEffect(() => {
    console.log(formValues)
  }, [formValues])

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])



  return (
    <div className='container'>
    <div className='addRecipeForm'>
      <Form onSubmit={onSubmit} className='addRecipe'>
        
        <h2 className='addRecipe'>Add Recipe</h2>


        <div className='addRecipeItems'>
        
          {/* title */}
          
          <FormGroup row>
          
          <Label>Title</Label>
          <Col sm={10}>
          <Input
              value={formValues.title}
              onChange={onChange}
              name='title'
              type='text'
            />
          </Col>
          </FormGroup>
          
          {/* source */}
          
          <FormGroup row>
          <Label>Source </Label>
          <Col sm={10}>
          <Input
              value={formValues.source}
              onChange={onChange}
              name='source'
              type='text'
            />
          </Col>    
         
          </FormGroup>
          
          

          {/* ingredients */}
          
          
          <FormGroup row>
          <Label>Ingredients</Label>
          <Col md={6}>
          <textarea
              placeholder=" List ingredients here"
              rows="4"
              col="50"
              value={formValues.ingredients}
              onChange={onChange}
              name='ingredients'
              type='text'
              />
          </Col>
          </FormGroup>
          
          {/* instructions */}
          
          <FormGroup row>
          <Label>Instructions</Label>
          <Col md={6}>
          <textarea
              placeholder=" Add instructions here"
              rows="6"
              col="50"
              value={formValues.instructions}
              onChange={onChange}
              name='instructions'
              type='text'
              />
          </Col>
          </FormGroup>
          
        
          {/* category */}
          
          
          <FormGroup row>
          
          <Label>Category</Label>
          <Col md={6}>
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
            </Col>
          </FormGroup>
          
          
          <FormGroup row>
          
          <Label htmlFor="">Recipe img</Label>
          <Col sm={10}>
            <Input type="text"/>
          </Col>
          </FormGroup>
          
          <Button color='danger' disabled={disabled} id='submitBtn'>Submit</Button>

        </div>
      </Form>


    </div>
    </div>

  )
}

export default AddRecipe;