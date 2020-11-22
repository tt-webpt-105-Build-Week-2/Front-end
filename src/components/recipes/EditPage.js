import React, { useState, useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { RecipeContext } from '../../context/RecipeContext';
import axiosWithAuth from '../../utils/axiosWithAuth'


const EditPage = () => {
    const [recipe] = useContext(RecipeContext);
    const [initialRecipe, setInitialRecipe] = useState(recipe)
    const { id } = useParams()
    const history = useHistory()


    useEffect(() => {
        axiosWithAuth()
            .get(`/recipes/${id}`)
            .then(res => {
                setInitialRecipe(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    const handleChange = ev => {
        ev.persist()
        setInitialRecipe({ ...initialRecipe, [ev.target.name]: ev.target.value })
    }

    const handleSubmit = e => {
        console.log('Put recipe in handle submit', initialRecipe)
        e.preventDefault()
        axiosWithAuth()
            .put(`/recipes/${id}`, initialRecipe)
            .then(res => {
                console.log('Recipe was updated', res.data)
                setInitialRecipe(res.data)
                history.push(`/recipe/${id}`)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} style={{ margin: 'auto', maxWidth: '900px' }}>
                <h2>Edit Recipe</h2>
                <Row>
                    <Col>Title
                        <Form.Control
                            type='text'
                            name='title'
                            id='title'
                            onChange={handleChange}
                            value={initialRecipe.title} />
                    </Col>
                    <Col>Category
                        <Form.Control
                            as="select"
                            type='text'
                            name='category'
                            id='category'
                            onChange={handleChange}
                            value={initialRecipe.category}>
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
                            value={initialRecipe.source} />
                    </Col>
                    <Col>Img Link
                    <Form.Control
                            type='text'
                            name='recipe_img'
                            id='recipe_img'
                            onChange={handleChange}
                            value={initialRecipe.recipe_img} />
                    </Col>
                </Row>

                <Form.Group >
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name='ingredients'
                        id='ingredients'
                        onChange={handleChange}
                        value={initialRecipe.ingredients} />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Instructions</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={6}
                        name='instructions'
                        id='instructions'
                        onChange={handleChange}
                        value={initialRecipe.instructions} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Save Changes
                </Button>
            </Form>
        </div>
    )
}

export default EditPage
