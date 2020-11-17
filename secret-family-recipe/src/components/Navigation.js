import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const Navigation = () => {
    const history = useHistory()
    const location = useLocation()

    const logout = e => {
        e.preventDefault()
        localStorage.clear()
        history.push('/login')
    }

    return (
        <Navbar variant="dark" expand="lg" style={{ backgroundColor: '#F64C3C' }}>
            <Navbar.Brand style={{ color: 'white' }} href="/recipes">SECRET FAMILY RECIPE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {localStorage.getItem('token') ? (
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" >
                        <Nav.Link onClick={logout} href="/login">Sign Out</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>

            ) : (
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" >
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                )}
        </Navbar>
    )
}

export default Navigation