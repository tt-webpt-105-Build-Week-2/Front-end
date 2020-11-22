import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { RecipeContext } from '../../context/RecipeContext'
import axiosWithAuth from '../../utils/axiosWithAuth'

const initialFormValues = {
    title: '',
    source: '',
    ingredients: '',
    instructions: '',
    category: '',
    recipe_img: '',


};

const EditPage = () => {
    const { id } = useParams()
    const history = useHistory()
    const [recipe, setRecipe] = useState(initialFormValues)

    useEffect(() => {
        axiosWithAuth()
            .get(`/recipes/${id}`)
            .then(res => {
                setRecipe(res.data)
                console.log(recipe)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    const handleChange = ev => {
        ev.persist()
        setRecipe({ ...recipe, [ev.target.name]: ev.target.value })
    }

    const handleSubmit = e => {
        console.log('Put recipe in handle submit', recipe)
        e.preventDefault()
        axiosWithAuth()
            .put(`/recipes/${id}`, recipe)
            .then(res => {
                console.log('Recipe was updated', res.data)
                setRecipe(res.data)
                history.push(`/recipe/${id}`)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} style={{margin: 'auto', maxWidth:'900px'}}>
                <h2>Edit Recipe</h2>
                <Row>
                    <Col>Title
                        <Form.Control
                            type='text'
                            name='title'
                            id='title'
                            onChange={handleChange}
                            value={recipe.title} />
                    </Col>
                    <Col>Category
                        <Form.Control
                            as="select"
                            type='text'
                            name='category'
                            id='category'
                            onChange={handleChange}
                            value={recipe.category}>
                            <option>Appetizer</option>
                            <option>Dessert</option>
                            <option>Sandwich</option>
                            <option>Breakfast</option>
                            <option>Pasta</option>
                        </Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col>Source
                    <Form.Control
                            type='text'
                            name='source'
                            id='source'
                            onChange={handleChange}
                            value={recipe.source} />
                    </Col>
                    <Col>Img Link
                    <Form.Control
                            type='text'
                            name='recipe_img'
                            id='recipe_img'
                            onChange={handleChange}
                            value={recipe.recipe_img} />
                    </Col>
                </Row>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name='ingredients'
                        id='ingredients'
                        onChange={handleChange}
                        value={recipe.ingredients} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Instructions</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={6}
                        name='instructions'
                        id='instructions'
                        onChange={handleChange}
                        value={recipe.instructions} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Save Changes
                </Button>
            </Form>
        </div>
    )
}

export default EditPage
