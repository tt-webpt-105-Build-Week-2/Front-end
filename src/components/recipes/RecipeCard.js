import React, { useContext } from 'react'
import { RecipeContext } from '../../context/RecipeContext'
import { Card, Button } from 'react-bootstrap';
import './RecipeCard.css'


const RecipeCard = ({ title, source, pic, id, category }) => {
    // const [recipes, setRecipes] = useContext(RecipeContext);
    return (
        <div >
            <Card className="card-container">
                <Card.Img variant="top" className="card-img" src={pic} />
                <Card.Body >
                    <Card.Title >{title}</Card.Title>
                    <Card.Text>
                        <em>By: {source}</em>
                    </Card.Text>
                    <Button href={`/recipe/${id}`} variant="danger">View Recipe</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default RecipeCard

