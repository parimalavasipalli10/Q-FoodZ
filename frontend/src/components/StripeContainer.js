import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

// const PUBLIC_KEY = "pk_test_51M9kmQSB2WwWgaGUzcuZhzBfS5jmusBpixPsr9diSAhd3ZLVaYopzFK2hgn9m0eeWEwYsT0AkETsrGYjqDrEXoX100RX0dKyVY"

const stripeTestPromise = loadStripe("pk_test_51M9kmQSB2WwWgaGUzcuZhzBfS5jmusBpixPsr9diSAhd3ZLVaYopzFK2hgn9m0eeWEwYsT0AkETsrGYjqDrEXoX100RX0dKyVY")

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}