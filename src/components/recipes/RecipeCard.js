import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import './RecipeCard.css'

const RecipeCard = ({ title, source, pic, id }) => {
    const history = useHistory();

    const routeChange = () => {
        let path = `/recipe/${id}`;
        history.push(path);
    }

    return (
        <div >
            <Card onClick={routeChange} className="card-container">
                <Card.Img variant="top" className="card-img" src={pic} />
                <Card.Body >
                    <Card.Title >{title}</Card.Title>
                    <Card.Text>
                        <em>By: {source}</em>
                    </Card.Text>
                    <Button className='recipe-button' href={`/recipe/${id}`} variant="danger">View Recipe</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default RecipeCard

