import React from 'react'
import { Card, Button } from 'react-bootstrap';

const DwainesCard = ({ title, source, id }) => {
    return (
        <div>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://loremflickr.com/640/360" />
                <Card.Body>
                    <Card.Title >Recipe Title</Card.Title>
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
