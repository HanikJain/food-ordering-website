import React from 'react'
import {Carousel} from 'react-bootstrap'

export default function CarouselComponent() {
  return (
    <Carousel>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://media-cdn.tripadvisor.com/media/photo-s/13/ab/44/8d/tarka-house-restaurant.jpg"
            alt="First slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://image.shutterstock.com/image-photo/two-cheerful-middle-aged-female-600w-140383849.jpg"
            alt="Second slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://image.shutterstock.com/image-photo/two-cheerful-middle-aged-female-600w-140383849.jpg"
            alt="Third slide"
            />
        </Carousel.Item>

    </Carousel>
  )
}
