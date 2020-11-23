import React, { useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import axiosWithAuth from '../../utils/axiosWithAuth'
import { RecipeContext } from '../../context/RecipeContext';
import { Spinner } from 'react-bootstrap'

import './RecipePage.css'
import { Button } from 'react-bootstrap'

const RecipePage = () => {
    const [recipe, setRecipe, getRecipes] = useContext(RecipeContext);
    const history = useHistory()
    const { id } = useParams()


    useEffect(() => {
        axiosWithAuth()
            .get(`/recipes/${id}`)
            .then(res => {
                setRecipe(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    const deleteRecipe = (id) => {
        axiosWithAuth()
            .delete(`/recipes/${id}`)
            .then((res) => {
                console.log('recipe deleted', res)
                window.location.assign('/recipes');
                getRecipes();
            })
            .catch((err) => {
                console.log('delete error', err);
            });
    };

    if (!recipe) {
        return <div style={{ margin: '5%' }}><Spinner animation="border" variant="secondary" /></div>;
    }
    return (
        <div className='page-container'>
            <div>
                <div className='button-container'>
                    <Button className='recipe-page-btn' variant='primary' onClick={() => history.push(`/edit/${id}`)}>Edit Recipe</Button>
                </div>
                <h2 className='title'>{recipe.title}</h2>
            </div>

            <div className='recipe-and-img'>
                <img className='recipe-img' src={recipe.recipe_img} alt="" />
                <div className='recipe-wrapper'>
                    <div className='ingredients'>
                        <h2>Ingredients:</h2>
                        <p>{recipe.ingredients}</p>
                    </div>

                    <div className='directions'>
                        <h2>Directions:</h2>
                        <p>{recipe.instructions}</p>
                    </div>
                </div>

            </div>
            <div className='button-container'>
                <Button className='recipe-page-btn' variant='danger' onClick={() => deleteRecipe(id)}> Delete Recipe</Button>
            </div>
        </div>
    )
}

export default RecipePage
