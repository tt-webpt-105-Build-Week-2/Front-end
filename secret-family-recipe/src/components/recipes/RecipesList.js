import React from 'react'
// import { Spinner } from 'react-bootstrap'
import RecipeCard from './RecipeCard'


const RecipesList = ({ recipe }) => {
    return (
        <div >
            <h1>Recipes List:</h1>
            {/* <Spinner animation="border" variant="warning" /> */}
            <RecipeCard />
        </div>
    )
}

export default RecipesList
