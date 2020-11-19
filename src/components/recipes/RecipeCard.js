import React from 'react'
import { Card, Button } from 'react-bootstrap';
import './card.css'

const RecipeCard = ({ title, source, id, pic }) => {
    return (
        <div>
            <Card className="card-container">
                <Card.Img variant="top" className="card-img" src={pic} />
                <Card.Body>
                    <Card.Title >{title}</Card.Title>
                    <Card.Text>
                        {source}
                        {id}
                    </Card.Text>
                    <Button href="/recipe0" variant="danger">View Recipe</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default RecipeCard

