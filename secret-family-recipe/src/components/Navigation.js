import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const Navigation = () => {

    return (
        <Navbar expand="lg" style={{ backgroundColor: '#F64C3C' }}>
            <Navbar.Brand style={{ color: 'white' }} href="/">SECRET FAMILY RECIPE</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/sign-up">Sign Up</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation