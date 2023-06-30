import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

function PaymentScreen({ history }) {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()
    var isDisabled=true;
    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    if (!shippingAddress.address) {
        history.push('/shipping')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }
    const setMethod=(e)=>{
        setPaymentMethod(e.target.value);
        isDisabled=false;
        console.log(isDisabled);
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />

            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Select Method</Form.Label>
                    <Col>
                        <Form.Check
                            type='radio'
                            label='DEBIT CARD'
                            id='DB'
                            name='paymentMethod'
                            value='CARD'
                            onChange={setMethod}
                        >

                        </Form.Check>
                        <Form.Check
                            type='radio'
                            label='CASH ON DELIVERY'
                            id='cod'
                            name='paymentMethod'
                            value='CASH ON DELIVERY'
                            onChange={setMethod}
                        >

                        </Form.Check>
                    </Col>
                  
                </Form.Group>
                <Button type='submit' variant='primary' disabled={paymentMethod!=='PayPal' ? false : true}>
                    Continue
                </Button>

            </Form>
        </FormContainer>
    )
}

export default PaymentScreen
