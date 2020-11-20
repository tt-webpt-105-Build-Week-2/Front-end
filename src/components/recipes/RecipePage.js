import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import axiosWithAuth from '../../utils/axiosWithAuth'
import { RecipeContext } from '../../context/RecipeContext';

import './RecipePage.css'
import { Button } from 'react-bootstrap'

const initialRecipe = {
    recipeName: '',
    categoryName: '',
    ingredientList: '',
    directions: '',
    source: '',

}

const RecipePage = () => {
    const [recipes, setRecipes] = useContext(RecipeContext);
    const history = useHistory()
    const {id} = useParams()

    useEffect(() => {
        const getRecipes = () => {
            axiosWithAuth()
            .get(`/recipes/${id}`)
            .then(res => {
                setRecipes(res.data);
                console.log('recipes: ', res);
            })
            .catch(error => {
                console.error('Server Error', error);
            });
        }
        getRecipes();
    }, []);


    const deleteRecipe = id => {
        axiosWithAuth()
            .delete(`/recipes/${id}`)
            .then(res => {
                console.log('deleted recipe:', res.data.title)
                history.push('/recipes')
            })
            .catch(err => console.log('delete failed', err))
    }

    if (!recipes) {
        return <div>Loading Recipe...</div>;
    }
    return (
        <div className='page-container'>
            <h2 className='title'>{recipes.title}</h2>
            <div className='button-container'>
                <Button variant='primary'>Edit Recipe</Button>
            </div>
            <div className='recipe-wrapper'>
                <div className='ingredients'>
                    <h2>Ingredients:</h2>
                    <p>{recipes.ingredients}</p>
                </div>
                <div className='directions'>
                    <h2>Directions:</h2>
                    <p>{recipes.instructions}</p>
                </div>
            </div>
            <div className='button-container'>
                <Button variant='danger' onClick={() => deleteRecipe()}> Delete Recipe</Button>
            </div>
        </div>
    )
}

export default RecipePage
