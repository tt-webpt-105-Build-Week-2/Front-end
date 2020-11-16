import React, { useState, useEffect } from 'react';
import './LoginForm.less';
import schema from './loginSchema'
import  * as yup from 'yup'
import axios from 'axios'

const initialFormValues = {
  title: '',
  source: '',
  ingredients: '',
  instructions: '',
  category {
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
const initialUsers = []
const initialDisabled = true

const RecipeCard = () => {
  return (null)
}

export default RecipeCard;