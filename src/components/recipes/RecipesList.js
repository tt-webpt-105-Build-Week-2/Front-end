import React, { useContext, useEffect, useState } from 'react'
// import { Spinner } from 'react-bootstrap'
import axiosWithAuth from '../../utils/axiosWithAuth'
import RecipeCard from './RecipeCard'

// Context
import RecipeProvider, { RecipeContext } from '../../context/RecipeContext'
import AuthState from '../../context/RecipeContext'
import AuthContext from '../../context/AuthContext'


const RecipesList = ({ recipe }) => {
    const [recipes] = useContext(RecipeContext);
    const { user } = AuthContext;
    const [allRecipes, setAllRecipes] = useState([]);
    useEffect(() => {
        const getRecipes = () => {
            axiosWithAuth()
            .get(`/recipes`)
            .then(res => {
                setAllRecipes(res.data);
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
                <h3>My Recipes {recipes.message}!</h3>
            </div>

            <div className="recipe-list">
                {allRecipes.map(recipe => (
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
