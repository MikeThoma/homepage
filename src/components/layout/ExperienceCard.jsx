import './ExperienceCard.css'
import Card from 'react-bootstrap/Card';
import React from 'react';


const ExperienceCard = ({ details }) => {
    return <Card body className="experience-card" style={{ border: 'none' }}>
        <Card.Title>{details.title}</Card.Title>
        <Card.Subtitle><i>{details.subtitle}</i></Card.Subtitle>
        <Card.Text>
            <ul>
                {details.text.map(text => <li><p style={{ fontSize: '14px', textAlign: 'start', marginBottom: '5px' }}>{text}</p></li>)}
            </ul>
        </Card.Text>
    </Card>
}

export default ExperienceCard;