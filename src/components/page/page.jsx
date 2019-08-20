import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../card/card';
import BubbleChart from '../bubble-chart/bubble-chart'
import _ from 'lodash';


const Page = ({ data }) => {
    const sortedData = _.orderBy(data.generationmix, 'perc', ['desc']);
    const highest = _.first(sortedData);
    const lowest = _.last(sortedData);

    return (<Container>
        <h1>Fuel Split Highlights</h1>
        <Row>
            <Col xs={6}>
                <Card header='Highest' type='success' energyType={highest.fuel} value={`${highest.perc}%`} />
            </Col>
            <Col xs={6}>
                <Card header='Lowest' type='danger' energyType={lowest.fuel} value={`${lowest.perc}%`} />
            </Col>
        </Row>
        <Row>
            <BubbleChart header='Fuel split' data={sortedData} />
        </Row>
    </Container>)
}

// TODO propTypes

export default Page;