"use client"
import { UsePaymentContext } from '@/components/contexts/checkContext';
import { useStripeStore } from '@/stores/StripeStore';
import React from 'react'

const page = () => {
    const { clientId, setClientId, paymentIntent, setPaymentIntent } = UsePaymentContext();
    console.log(clientId)

    console.log("payment intent",paymentIntent)
    const stripeSessionId = useStripeStore((state) => state.stripeSession);
    console.log("my stripe session id",stripeSessionId)
    return (
        <div>Success</div>
    )
}

export default page;