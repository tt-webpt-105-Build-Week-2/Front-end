import React, { useContext } from 'react'
import { RecipeContext } from '../../context/RecipeContext'
import { Card, Button } from 'react-bootstrap';
import './card.css'


const RecipeCard = ({ title, source, pic, id }) => {
    const [recipes, setRecipes] = useContext(RecipeContext);
    return (
        <div >
            <Card className="card-container">
                <Card.Img variant="top" className="card-img" src={pic} />
                <Card.Body>
                    <Card.Title >{title}</Card.Title>
                    <Card.Text>
                        From: {source}
                    </Card.Text>
                    <Button href={`/recipe/${id}`} variant="danger">View Recipe</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default RecipeCard

