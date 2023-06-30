import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

function ProductCarousel() {
    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.productTopRated)
    const { error, loading, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

    return (loading ? <Loader />
        : error
            ? <Message variant='danger'>{error}</Message>
            : (
                <Carousel pause="hover" className="bg-dark">
      <Carousel.Item>
        <div className='background'></div>
        
      </Carousel.Item>
      <Carousel.Item>
      <div className='background2'></div>


        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            )

    )
}

export default ProductCarousel
