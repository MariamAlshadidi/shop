import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import H1 from '../images2/H1.JPG'
import H2 from '../images2/H2.JPG'
import H3 from '../images2/H3.JPG'
export default function SaleCarousel() {
  return (
    <Carousel pause='hover' className='mb-4'>
    
      <Carousel.Item >
          <Image src={H1} />
      </Carousel.Item>

      <Carousel.Item >
          <Image src={H2} />
      </Carousel.Item>

      <Carousel.Item >
          <Image src={H3} />
      </Carousel.Item>
  </Carousel>
  )
}
