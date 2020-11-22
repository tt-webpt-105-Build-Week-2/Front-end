import React, { useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import axiosWithAuth from '../../utils/axiosWithAuth'
import { RecipeContext } from '../../context/RecipeContext';
import { Spinner } from 'react-bootstrap'

import './RecipePage.css'
import { Button } from 'react-bootstrap'

const RecipePage = () => {
    const [recipe, setRecipe] = useContext(RecipeContext);
    let history = useHistory()
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

    const deleteRecipe = () => {
        axiosWithAuth()
            .delete(`/recipes/${id}`)
            .then((res) => {
                console.log('recipe deleted', res)
                history.push('/recipes');
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
                <Button variant='primary' onClick={() => history.push(`/edit/${id}`)}>Edit Recipe</Button>
            </div>
                <h2 className='title'>{recipe.title}</h2>
                <img className='recipe-img' src={recipe.recipe_img} alt="" />
            </div>

            {/* <div className='recipe-image-wrapper'>
                <img src={recipe.recipe_img} alt="recipe_image"/>
            </div> */}
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
            <div className='button-container'>
                <Button variant='danger' onClick={() => deleteRecipe()}> Delete Recipe</Button>
            </div>
        </div>
    )
}

export default RecipePage
