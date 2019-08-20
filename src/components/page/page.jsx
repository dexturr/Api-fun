import React from 'react';
import { Container, Card } from 'react-bootstrap';

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

const Page = (props) => {
    return (<Container>
        <h1>Energy Generation Data</h1>
        <OverviewCard header='Test' energyType='TEST' value='123' />
    </Container>)
}

// TODO propTypes

export default Page;