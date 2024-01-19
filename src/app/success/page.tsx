"use client"
import { usePaymentContext } from '@/components/contexts/checkContext';
import React from 'react'

const page = () => {
    const { clientId, setClientId, paymentIntent, setPaymentIntent } = usePaymentContext();
    console.log(clientId)

    console.log("payment intent",paymentIntent)

    return (
        <div>Success</div>
    )
}

export default page;