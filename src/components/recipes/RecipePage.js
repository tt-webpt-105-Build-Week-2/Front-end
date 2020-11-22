import React, { useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import axiosWithAuth from '../../utils/axiosWithAuth'
import { RecipeContext } from '../../context/RecipeContext';
import { Spinner } from 'react-bootstrap'

import './RecipePage.css'
import { Button } from 'react-bootstrap'

const RecipePage = () => {
    const [recipes, setRecipes] = useContext(RecipeContext);
    const { id } = useParams()
    let history = useHistory()

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


    const deleteRecipe = () => {
        axiosWithAuth()
            .delete(`/recipes/${id}`)
            .then((res) => {
                history.push('/recipes');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    if (!recipes) {
        return <div><Spinner animation="border" variant="secondary" /></div>;
    }
    return (
        <div className='page-container'>
            <h2 className='title'>{recipes.title}</h2>
            <div className='button-container'>
                <Button variant='primary' onClick={() => history.push(`/edit/${id}`)}>Edit Recipe</Button>
            </div>
            {/* <div className='recipe-image-wrapper'>
                <img src={recipes.recipe_img} alt="recipe_image"/>
            </div> */}
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
