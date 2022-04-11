import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import { ReactComponent as RedHeart } from '../../../assets/icons/red-heart.svg';
import {ReactComponent as TrendingUp } from "../../../assets/icons/trending-up.svg";
import {ReactComponent as PhoneIcon } from "../../../assets/icons/phone.svg";


import styles from "./Card.module.css"

export default function ReviewCard(props) {
  return (
    <Card style={{ width: '18rem', margin:" 20px 5px"}}>
        <Card.Body>
            <Card.Title>
                <h1>Review</h1>
            </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>
                <span className={styles.trendingUp} > <TrendingUp /> </span>
                  {props.rating || "N.A."} 
            </ListGroupItem>
            <ListGroupItem>
                <div className={styles.ratings}>
                    <span className={styles.reviews} > <RedHeart /> </span>
                    <span >{`${props.raw_ranking || 'N.A.'} / ${props.totalReviews || 'N.A.'}`} </span>
                </div> 
            </ListGroupItem>
            
        </ListGroup>
    </Card>
  )
}

export function DetailsComponent(props) {
    return (
      <Card style={{ width: '18rem', margin:" 20px 5px"}}>
          <Card.Body>
              <Card.Title>
                  <h1>Details</h1>
              </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
              <ListGroupItem>
                  {props.address || "N.A."}
              </ListGroupItem>
              <ListGroupItem>
                <a href={"mailto: " + props.email}>
                  {props.email || "N.A."}
                </a>
              </ListGroupItem>
              <ListGroupItem>
              <span className={styles.trendingUp} > <PhoneIcon /> </span>
                <a href={"tel:" + props.phone}>
                  {props.phone || "N.A."}
                </a>
              </ListGroupItem>
          </ListGroup>
      </Card>
    )
  }

export function CardComponent(props) {
    return (
      <Card style={{ width: '18rem', margin:" 20px 5px"}}>
          <Card.Body>
              <Card.Title>
                  <h1>Review</h1>
              </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
              <ListGroupItem>
                  Reviews
              </ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
      </Card>
    )
  }

export function CardQuote(props) {
    return (
        <Card style={{margin:'2rem 0'}} >
            <Card.Header style={{color: 'white', backgroundColor: 'var(--orange)', border: "1px solid var(--orange)"}}>Restaurant's Quote</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p style={{color: 'gray', fontSize: '0.9rem'}}>
                    {' '}
                    {props.description}{' '}
                </p>
                </blockquote>
            </Card.Body>
        </Card>
    );
}