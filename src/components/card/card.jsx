import React from 'react';
import { Card } from 'react-bootstrap';

const OverviewCard = ({header, energyType, value}) => (
    <Card bg="success" text="white" style={{ width: '18rem' }}>
        <Card.Header>{header}</Card.Header>
        <Card.Body>
        <Card.Title>{energyType}</Card.Title>
        <Card.Text>
            <span>{value}</span>
        </Card.Text>
        </Card.Body>
    </Card>
)

export default OverviewCard;