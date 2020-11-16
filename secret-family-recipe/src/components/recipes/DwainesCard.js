import React from 'react'
import { Card, Button } from 'react-bootstrap';
import './card.css'

const DwainesCard = ({ title, source, id }) => {
    return (
        <div>
            <Card className="card-container">
                <Card.Img variant="top" className="card-img" src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/3c0710e0531b41b7804acf4a52ee15be/FB_04forpkg.jpg?output-format=auto&output-quality=auto" />
                <Card.Body>
                    <Card.Title >Creamy Mac 'n' Cheese</Card.Title>
                    <Card.Text>
                        Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage chicken.
                    </Card.Text>
                    <Button variant="danger">View Recipe</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default DwainesCard
