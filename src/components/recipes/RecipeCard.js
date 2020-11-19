import React from 'react'
import { Card, Button } from 'react-bootstrap';
import './card.css'

const RecipeCard = ({ title, source, id }) => {
    return (
        <div>
            <Card className="card-container">
                <Card.Img variant="top" className="card-img" src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/3c0710e0531b41b7804acf4a52ee15be/FB_04forpkg.jpg?output-format=auto&output-quality=auto" />
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

