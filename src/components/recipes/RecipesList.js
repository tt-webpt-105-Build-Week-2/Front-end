import React, { useContext, useEffect } from 'react'
import RecipeCard from './RecipeCard'
import './RecipesList.css'

// Context
import { RecipeContext } from '../../context/RecipeContext'

const RecipesList = () => {
    const [recipes, setRecipes, getRecipes ] = useContext(RecipeContext);

    useEffect(() => {
        getRecipes() 
    }, []);

    return (
        <div className='list-container'>

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
                            category={recipe.category}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecipesList
