import React, { useContext, useEffect, useState } from 'react'
// import { Spinner } from 'react-bootstrap'
import axiosWithAuth from '../../utils/axiosWithAuth'
import RecipeCard from './RecipeCard'
import './card.css'

// Context
import { RecipeContext } from '../../context/RecipeContext'



const RecipesList = ({ recipe }) => {
    const [recipes, setRecipes] = useContext(RecipeContext);
    // const { user } = AuthContext;
    useEffect(() => {
        const getRecipes = () => {
            axiosWithAuth()
            .get(`/recipes`)
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
    

    return (
        <div >
            {/* <Spinner animation="border" variant="warning" /> */}
            <div className="user-banner">
            </div>
            <div className="recipe-list">
                {recipes.map(recipe => (
                    <div key={recipe.id}>
                        <RecipeCard
                            title={recipe.title}
                            source={recipe.source}
                            ingredients={recipe.ingredients}
                            id={recipe.id}
                            pic={recipe.recipe_img}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecipesList
