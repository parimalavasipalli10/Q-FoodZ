import React, { useState } from 'react'
import { Form, Button,ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'
import swal from 'sweetalert'

function ShippingScreen({ history }) {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)
    const [ordertime,settime]=useState(0)

    const submitHandler = (e) => {
        e.preventDefault()
        async function getLocation() {
            if (navigator.geolocation) {
              await navigator.geolocation.getCurrentPosition(showPosition);
            } else { 
               console.log("Geolocation is not supported by this browser.");
            }
          }
          function showPosition(position) {
            console.log( "Latitude: " + position.coords.latitude + 
            "<br>Longitude: " + position.coords.longitude);
            let lat1 = 13.024598228655767;
                  let lat2 = 12.990354269071714;
                  let lon1 = 77.70629085320729;
                  let lon2 = 77.6891706795851;
                  distance=distance(lat1, lon1,
                                     lat2, lon2)
                  if(distance<=5.0){
                    swal("Your order will be at your door step soon...")
                  }
                  else{
                    swal("Sorry, your address exceeds 5km you have to pickup your order at our shop location")
                  }

                        
                       
          }
          function distance(lat1, lon1,lat2, lon2)
              {
             
                  // The math module contains a function
                  // named toRadians which converts from
                  // degrees to radians.
                  lon1 =  lon1 * Math.PI / 180;
                  lon2 = lon2 * Math.PI / 180;
                  lat1 = lat1 * Math.PI / 180;
                  lat2 = lat2 * Math.PI / 180;
             
                  // Haversine formula
                  let dlon = lon2 - lon1;
                  let dlat = lat2 - lat1;
                  let a = Math.pow(Math.sin(dlat / 2), 2)
                           + Math.cos(lat1) * Math.cos(lat2)
                           * Math.pow(Math.sin(dlon / 2),2);
                         
                  let c = 2 * Math.asin(Math.sqrt(a));
             
                  // Radius of earth in kilometers. Use 3956
                  // for miles
                  let r = 6371;
             
                  // calculate the result
                  return(c * r)
              }
            //   12.990354269071714, 77.6891706795851
              getLocation()



        dispatch(saveShippingAddress({ address, city, postalCode, country,ordertime }))
        history.push('/payment')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter address'
                        value={address ? address : ''}
                        onChange={(e) => setAddress(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter city'
                        value={city ? city : ''}
                        onChange={(e) => setCity(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='postalCode'>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter postal code'
                        value={postalCode ? postalCode : ''}
                        onChange={(e) => setPostalCode(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='country'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter country'
                        value={country ? country : ''}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <ListGroup.Item>
                                                    
                                                        
                                                            Selecttimefordelivery:<Form.Control
                                                                as="select"
                                                                onChange={(e) => settime(e.target.value)}
                                                            >
                                                                {

                                                                    [10,1,7].map((x) => (
                                                                         <option key={x} value={x}>
                                                                            {x}
                                                                        </option>
                                                                    ))
                                                                }

                                                            </Form.Control>
                                                        

                                                </ListGroup.Item><br></br>

                <Button type='submit' variant='primary'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen
