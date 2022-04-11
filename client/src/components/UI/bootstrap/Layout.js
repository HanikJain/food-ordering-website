import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ReviewCard, {DetailsComponent} from './Card';

export default function Layout (props) {
  return (
    <Container>
        <div>
        </div>
        <Row>
            <Col md style={{margin: "auto" }}>
                <ReviewCard rating={props.res.ranking_position} totalReviews={props.res.num_reviews}  raw_ranking = {parseFloat(props.res.raw_ranking).toFixed(1)}/>
            </Col>
            <Col md style={{margin: "auto"}}>
                <DetailsComponent address={props.res.address} email={props.res.email} phone={props.res.phone}/>
            </Col>
        </Row>
    </Container>
  )
}
