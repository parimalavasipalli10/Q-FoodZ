import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({ product }) {
    return (
        <Card className="my-3 p-3 rounded" >
            <Link to={`/product/${product._id}`}>
                <Card.Img style={{"height":"200px"}} src={product.image} />
            </Link>

            <Card.Body className='pb-0'>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>


                <Card.Text as="h3">
                    RS:{product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
