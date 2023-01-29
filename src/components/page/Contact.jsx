import './Contact.css'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import React from 'react';

const Contact = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    }

    const handleClick = () => {
        console.info("The submit form is still in progress")
    }


    return <div className="contact" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        {/*<h3>Contact</h3>*/}
        <Card body style={{ width: "100%", border: 'none'}}>
            <p>Feel free to contact me at <h3>mike.thoma@hotmail.de</h3></p>
        </Card>
        {/*<p style={{ marginBottom: '20px' }}>Feel free to contact me, by submitting the form below. I will contact you as soon as possible.</p>
        <p style={{ fontSize: '12px', color: 'red' }}>Info: The contact form is still in progress, and doesn't send any messages yet. Just contact me via email: mike.thoma@hotmail.de.</p>
        <Card body style={{ width: "100%", backgroundColor: '#f9f8ff' }}>
            <Form.Label htmlFor="inputName">Name</Form.Label>
            <Form.Control
                id="inputName"
                placeholder="Enter your name"
                name="name"
                value={state.name}
                onChange={handleChange}
            />
            <Form.Label htmlFor="inputEmail">Email</Form.Label>
            <Form.Control
                id="inputEmail"
                type="email"
                placeholder="Enter your email"
                name="email"
                value={state.email}
                onChange={handleChange}
            />
            <Form.Label htmlFor="inputMessage">Message</Form.Label>
            <Form.Control
                id="inputMessage"
                as="textarea"
                rows={7}
                placeholder="Enter your message"
                name="message"
                value={state.message}
                onChange={handleChange}
                style={{ resize: "none" }}
            />
            <Button variant="outline-primary" style={{ marginTop: "20px" }} onClick={handleClick}>Submit</Button>

</Card>*/}
    </div>
}

export default Contact;