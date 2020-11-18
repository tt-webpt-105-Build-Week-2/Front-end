import React from 'react'
import { Spinner } from 'react-bootstrap'
import DwainesCard from './DwainesCard'


const RecipesList = ({recipe}) => {
    return (
        <div >
            <h1>Recipes List:</h1>
            {/* <Spinner animation="border" variant="warning" /> */}
            <DwainesCard />
        </div>
    )
}

export default RecipesList
